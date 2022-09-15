import { uploadFile } from "../s3/fputs.js";
import { PrismaClient } from "@prisma/client";
import cropImage from "./cropObject.js";
import AWS from "aws-sdk";
var s3 = new AWS.S3({
  accessKeyId: "1RNpWskQu7iHHTGW",
  secretAccessKey: "jZSnVHWt4g0GkiLqPO59IdHbtwIRfIcx",
  endpoint: "s3.techainer.com",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});
const prisma = new PrismaClient();
const upImage = async (req, res) => {
  const data = req.body.output;
  for (var keyFrame in data) {
    //handle json data
    var faces = data[keyFrame];
    for (var face in faces) {
      var value = faces[face];
      var label = value.label;
      var coor = value.coordinates;
      //console.log(label, coor[1]);

      //create prisma
      let frame = await prisma.frame.findUnique({
        where: {
          id_userId: {
            userId: req.params.id,
            id: keyFrame,
          },
        },
      });
      if (!frame) {
        let user = await prisma.user.update({
          where: {
            id: req.params.id,
          },
          data: {
            frames: {
              create: {
                id: keyFrame,
              },
            },
          },
        });
        console.log(frame);
      }
      //cropping
      const keyFrameNumber = Number(keyFrame) / 15 + 1;
      var originalImage = `./frames/${req.params.id}/screenshot-${keyFrameNumber}.jpg`;
      //console.log(originalImage, coor, keyFrameNumber, face, req.params.id);
      let nameImage = `${keyFrameNumber}_${face}_${req.params.id}.jpg`;
      await cropImage(originalImage, coor, nameImage, req.params.id);
      let croppedImage = `./frames/${req.params.id}/${nameImage}.jpg`;

      //upload to s3
      let result = await uploadFile(croppedImage, nameImage);
      console.log(result);

      //create access url
      var urlFinal = "";
      var params = { Bucket: result.Bucket, Key: result.Key };
      var promise = s3.getSignedUrlPromise("getObject", params);
      await promise
        .then(
          function (url) {
            urlFinal = url;
            //console.log(urlFinal);
          },
          function (err) {
            console.log(err);
          }
        )
        .then(async () => {
          //update prisma
          //console.log(urlFinal);
          frame = await prisma.frame.update({
            where: {
              id_userId: {
                userId: req.params.id,
                id: keyFrame,
              },
            },
            data: {
              faces: {
                create: {
                  value: label,
                  path: urlFinal,
                },
              },
            },
          });
        });
    }
  }
  //delete prisma
  //let frame = await prisma.frame.deleteMany();
  /* setTimeout(() => {
    
  }, 3000);*/
};
export default upImage;
