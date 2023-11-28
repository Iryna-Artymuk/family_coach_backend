import app from './app.js';
import dotenv from 'dotenv';
import path from 'path';
import colors from 'colors';
const configPath = path.resolve('./', 'config', '.env');
console.log('configPath: ', configPath);
dotenv.config({ path: configPath }); // додає змінні з файлу env який знаходиться в папці config  до глобального обєкту process.env
import connectDB from './config/connectDB.js';
const { PORT, DB_HOST } = process.env;

await connectDB(DB_HOST);
app.listen(PORT, () => {
  console.log(PORT);
  console.log(`Server is running on ${PORT}`.bold.green);
});
