import { PrismaClient } from "@prisma/client";
import fs from "fs";
const prisma = new PrismaClient();

const result = async (req, res) => {
  //let listId = await prisma.frame.findMany();
  //console.log(listId);
  fs.rmSync(`./frames/${req.params.id}`, { recursive: true, force: true });
  let allFace = await prisma.face.findMany();
  //console.log(allFrame);
  var listObj = [];
  allFace.forEach((e) => {
    var obj = { path: `${e.path}`, masked: `${e.value}` };
    listObj.push(obj);
  });
  res.json(listObj);
  // res.json(req.params);
};
export default result;
