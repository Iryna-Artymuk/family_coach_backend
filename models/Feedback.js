// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';
const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, ' forgot to type  is  name'], // поле є обовязковим
    },
    feedback: {
      type: String,

      required: [true, ' forgot to type  is  name    feedback(('], // поле є обовязковим другий параметр кастомний меседж
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// якщо валідація по mongoose schema не пройдена mongoose викидає помилку  спрацьовує catch з контролера і викликає функцію обробки помилок
//---ПОМИЛКА -- mongoose не присвою помилці статус тому всі помилки мають статус 500 і не будуть зрозумілі на фронтенді
//---РІШЕННЯ---  викликати спеціальний mongoose hook
// це функція яка буде викликана перед тим як помилка перейде в блок catch ій присвоїться статус і спрацює функція обробки помилок з app.js

feedbackSchema.post('save', handelSchemsErrorStatus);
const Feedback = model('feedback', feedbackSchema);

export default Feedback;
