// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';


const kidsPriceSchema = new Schema(
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
      required: [true, ' forgot to add price'],
    },
    singleConsultation: {
      type: {
        type: String,
        required: [true, ' forgot to add    type '],
      },
      duration: {
        type: String,
        required: [true, ' forgot to add   duration '],
      },
      price: {
        type: String,
        required: [true, ' forgot to add price'],
      },
    },
  },
  { versionKey: false, timestamps: true }
);



kidsPriceSchema.post('save', handelSchemsErrorStatus);
const KidsPrice = model('kids_price', kidsPriceSchema);

export default KidsPrice;
