import axios from "axios";

const image_hosting_key = process.env.NEXT_PUBLIC_ImgBbKey;
console.log(image_hosting_key)
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const upLoadImgBBPhoto = async (image) => {
    const upload = new FormData()
    upload.append('image', image)
    console.log('uploadImg', upload);

    const { data } = await axios.post(image_hosting_api, upload)

    console.log('img bb', data);
    return data.data.url
}