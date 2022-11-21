import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'dmf4n14wf',
    api_key: '915288559864292',
    api_secret: '1_Fs6iW9Jdl9Jrpc4xdX-j8Us3k',
});

export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath,{
        folder: 'recetas',
    });
}
