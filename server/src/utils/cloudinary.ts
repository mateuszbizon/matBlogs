import { v2 as cloudinary } from 'cloudinary';
import { deleteFile } from './deleteFile';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

export async function uploadImageToCloudinary(filePath: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'blog_images',
    });

    deleteFile(filePath)

    return result.secure_url
  } catch (error) {
    console.error('Cloudinary upload error:', error);
  }
}
