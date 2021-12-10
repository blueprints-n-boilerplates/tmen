import mongoose, { Types, Document, Schema } from 'mongoose';

/* Interfaces */

export interface IProductCategory extends Document {
	name: string;
	description: string;
	slug: string;
	image?: string;
	parent?: Types.ObjectId;
}

/* Schemas */

const ProductCategorySchema: Schema = new Schema({
	name: { type: String, required: true },
	description: { type: String },
	slug: { type: String }, // for checking existing data, can also be used for url routing
	image: { type: String },
	parent: {
		type: Schema.Types.ObjectId,
		ref: 'product_category',
	},
});

// ProductCategorySchema.methods.getSubCategories = async function (
// 	cb,
// ): Promise<IProductCategory[]> {
// 	// not nested categories
// 	// if there is a parent, category is a child
// 	// return get all subcategories
// 	return await mongoose
// 		.model('product_category')
// 		.find({ parent: this.parent }, cb)
// 		.exec();
// };

// get products under category

export const ProductCategory = mongoose.model<IProductCategory>(
	'product_category',
	ProductCategorySchema,
);
