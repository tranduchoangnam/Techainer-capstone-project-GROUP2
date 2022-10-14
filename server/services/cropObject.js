import sharp from "sharp";

const cropImage = async (originalImage, coor, name, id) => {
	await sharp(originalImage)
		.extract({
			width: Number(coor[2] - coor[0]),
			height: Number(coor[3] - coor[1]),
			left: Number(coor[0]),
			top: Number(coor[1]),
		})
		.toFile(`./frames/${id}/${name}.jpg`)
		.then(function (new_file_info) {
			console.log("Image cropped and saved");
		})
		.catch(err => {
			throw err;
		});
};
export default cropImage;
