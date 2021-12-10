import { IProduct, Product } from '../models/product';

/**
 * Products
 */

// post

export const addProduct = async (
	newProductData: IProduct,
): Promise<IProduct> => {
	try {
		const newProduct = await new Product(newProductData).save();
		return newProduct;
	} catch (err) {
		throw err;
	}
};

// patch

export const editProduct = async (id: any, update: any): Promise<IProduct> => {
	try {
		const product = await Product.findByIdAndUpdate(id, update).exec();

		if (product) return product;
		else throw Error('Non-existent product.');
	} catch (err) {
		throw err;
	}
};

// delete

export const deleteProduct = async (id: any): Promise<IProduct> => {
	try {
		const product = await Product.findByIdAndDelete(id).exec();

		if (product) return product;
		else throw Error('Non-existent product.');
	} catch (err) {
		throw err;
	}
};

// get

export const getProduct = async (id: any): Promise<IProduct> => {
	try {
		const product = await Product.findOne({ id: id }).exec();

		if (product) return product;
		else throw Error('Non-existent product.');
	} catch (err) {
		throw err;
	}
};

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const product = await Product.find({}).exec();
		return product;
	} catch (err) {
		throw err;
	}
};
