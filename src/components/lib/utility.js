import axios from "axios";

export const upLoadImgBBPhoto = async (image) => {
    const upload = new FormData()
    upload.append('image', image)
    console.log('uploadImg', upload);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.ImgBbKey}`, upload)

    console.log('img bb', data);
    return data.data.url
}