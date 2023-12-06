// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';

//  {

//     type: 'Додатково*',
//     amount: 'Текстовий формат / Дзвінок ',
//     duration: '30-45',
//     period: null,
//     price: '600',
//   },
const adultPriceSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, ' forgot to add    type '],
    },
    amount: {
      type: String,
      required: [true, ' forgot to add   amount'],
    },
    duration: {
      type: String,
      required: [true, ' forgot to add   duration '],
    },

    period: {
      type: String,
      default: null, // значення має відповідати одному з значкнь з масиву
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

adultPriceSchema.post('save', handelSchemsErrorStatus);
const AdultPrice = model('adult_price', adultPriceSchema);

export default AdultPrice;
