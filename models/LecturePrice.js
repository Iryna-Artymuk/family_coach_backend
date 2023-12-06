// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';

const lecturePriceSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, ' forgot to add    type '],
    },
    theme: {
      type: String,
      required: [true, ' forgot to add   theme'],
    },

    price: {
      type: String,
      required: [true, ' forgot to add     price'],
    },
  },
  { versionKey: false, timestamps: true }
);

// якщо валідація по mongoose schema не пройдена mongoose викидає помилку  спрацьовує catch з контролера і викликає функцію обробки помилок
//---ПОМИЛКА -- mongoose не присвою помилці статус тому всі помилки мають статус 500 і не будуть зрозумілі на фронтенді
//---РІШЕННЯ---  викликати спеціальний mongoose hook
// це функція яка буде викликана перед тим як помилка перейде в блок catch ій присвоїться статус і спрацює функція обробки помилок з app.js

lecturePriceSchema.post('save', handelSchemsErrorStatus);
const LecturePrice = model('lecture_price', lecturePriceSchema);

export default LecturePrice;
