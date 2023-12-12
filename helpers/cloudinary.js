import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import dotenv from 'dotenv';

const configPath = path.resolve('./', 'config', '.env');
dotenv.config({ path: configPath }); // додає змінні з файлу env який знаходиться в папці config  до глобального обєкту process.env

const { Cloud_Name, API_Key, API_Secret } = process.env;

cloudinary.config({
  cloud_name: Cloud_Name,
  api_key: API_Key,
  api_secret: API_Secret,
});

export default { cloudinary };
