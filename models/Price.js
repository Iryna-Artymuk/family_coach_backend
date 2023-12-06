// ------------create schema ------------
import { Schema, model } from 'mongoose';
import { handelSchemsErrorStatus } from './hooks.js';

const priceSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, ' forgot to add type '],
    },
    kids: [{ type: Schema.Types.ObjectId, ref: 'kids_price' }],

   adult: [{ type: Schema.Types.ObjectId, ref: 'adult_price' }],
  
  },
  { versionKey: false, timestamps: true }
);


const Price = model('price', priceSchema);

export default Price;
