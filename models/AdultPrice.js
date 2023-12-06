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
      required: [true, ' forgot to add `strictPopulate price'],
    },
  },
  { versionKey: false, timestamps: true }
);

// adultPriceSchema.post('save', handelSchemsErrorStatus);
const AdultPrice = model('adult_price', adultPriceSchema);

export default AdultPrice;
