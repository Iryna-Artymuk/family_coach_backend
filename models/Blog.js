// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';

const blogSchema = new Schema(
  {
    postImage: {
      public_id: {
        type: String,
        required: [true, 'missing  id'], // поле є обовязковим
      },
      url: {
        type: String,
        required: [true, 'missing  url'], // поле є обовязковим
      },
    },
    title: {
      type: String,
      required: [true, ' forgot to add   title '],
      maxlength: 50, // поле є обовязковим
    },
    description: {
      type: String,
      required: [true, ' forgot to add  description '],
      maxlength: 300, // поле є обовязковим
    },
    post: {
      type: String,
      required: [true, ' forgot to add post '],
    },

    postCategory: {
      type: String,
      required: [true, ' forgot to add   category'],
      // enum: ['Саморозвиток', 'Мотивація', 'Відносини', 'Діти', 'Підлітки'],
    },
  },
  { versionKey: false, timestamps: true }
);

// якщо валідація по mongoose schema не пройдена mongoose викидає помилку  спрацьовує catch з контролера і викликає функцію обробки помилок
//---ПОМИЛКА -- mongoose не присвою помилці статус тому всі помилки мають статус 500 і не будуть зрозумілі на фронтенді
//---РІШЕННЯ---  викликати спеціальний mongoose hook
// це функція яка буде викликана перед тим як помилка перейде в блок catch ій присвоїться статус і спрацює функція обробки помилок з app.js

blogSchema.post('save', handelSchemsErrorStatus);
const Blog = model('post', blogSchema);

export default Blog;
