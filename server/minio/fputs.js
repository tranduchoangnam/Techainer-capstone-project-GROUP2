import AWS from "aws-sdk";
import Fs from "fs";
var s3 = new AWS.S3({
  accessKeyId: "1RNpWskQu7iHHTGW",
  secretAccessKey: "jZSnVHWt4g0GkiLqPO59IdHbtwIRfIcx",
  endpoint: "s3.techainer.com",
  s3ForcePathStyle: true, // needed with minio?
  signatureVersion: "v4",
});
export function uploadFile(file) {
  const fileStream = Fs.createReadStream(file.path);
  var params = {
    Bucket: "techainer-bootcamp",
    Key: `group-2/${file.filename}`,
    Body: fileStream,
  };
  return s3
    .upload(params, function (err, data) {
      if (err) console.log(err);
      else console.log("Successfully uploaded data to testbucket/testobject");
    })
    .promise();
}
