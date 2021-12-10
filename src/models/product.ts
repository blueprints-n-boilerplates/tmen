import mongoose, { Types, Document, Schema } from 'mongoose';

/* Interfaces */
export interface IProduct extends Document {
	name: string;
	description: string;
	dateAdded?: Date;
	specifications?: any;
	category: Types.ObjectId;
	images?: string[];
}

/* Schemas */

const ProductSchema: Schema = new Schema(
	{
		category: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'product_category',
		},
		name: { type: String, required: true },
		description: { type: String, required: true },
		images: [{ type: String, required: true }],
		specifications: { type: Schema.Types.Mixed },
	},
	{ timestamps: true },
);

export const Product = mongoose.model<IProduct>('product', ProductSchema);
