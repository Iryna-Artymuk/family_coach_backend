// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';

const kidsSchema = new Schema({
  category: {
    type: String,
    enum: ['Дорослі', 'Діти', 'Лекції'],
    required: [true, ' forgot to add category '],
  },
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
});
const adultSchema = new Schema({
  category: {
    type: String,
    enum: ['Дорослі', 'Діти', 'Лекції'],
    required: [true, ' forgot to add category '],
  },
  type: {
    type: String,
    required: [true, ' forgot to add  type '],
  },
  amount: {
    type: String,
    required: [true, ' forgot to add amount'],
  },
  duration: {
    type: String,
    required: [true, ' forgot to add   duration '],
  },

  period: {
    type: String,
    default: null,
  },
  price: {
    type: String,
    required: [true, ' forgot to add `strictPopulate price'],
  },
});
const lectureSchema = new Schema({
  category: {
    type: String,
    enum: ['Дорослі', 'Діти', 'Лекції'],
    required: [true, ' forgot to add category '],
  },
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
});

const priceSchema = new Schema(
  {
    adultPrices: [adultSchema],
    kidsPrices: [kidsSchema],
    lecturePrices: [lectureSchema],
  },
  { versionKey: false, timestamps: true }
);

priceSchema.post('save', handelSchemsErrorStatus);

// lectureSchema.post('save', handelSchemsErrorStatus);

const Price = model('price', priceSchema);

export default Price;
