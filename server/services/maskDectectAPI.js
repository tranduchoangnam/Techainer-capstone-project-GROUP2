import axios from 'axios';
import FormData from 'form-data';
import Fs from "fs";

const maskDectectAPI = async (req, res) => {
    const file = req.file
    var video = Fs.createReadStream(file.path);
    var export_rate = 15
    const formData = new FormData();
    formData.append("video", video)
    formData.append("export_rate", export_rate)
    const result = await axios.post('http://localhost:4000/call/masked_video', formData, { headers: {'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': '*'}})
    console.log(result)
    res.json(result.data)
}

export default maskDectectAPI;