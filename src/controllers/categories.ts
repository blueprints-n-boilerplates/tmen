import { IProductCategory, ProductCategory } from '../models/categories';

// POST

export const addCategory = async (
	newCategoryData: IProductCategory,
): Promise<IProductCategory> => {
	try {
		const category = await ProductCategory.findOne({
			slug: newCategoryData.slug,
		}).exec();

		if (!category) {
			// if there's no match, then create a record
			const newCategory = await new ProductCategory({
				...newCategoryData,
			}).save();

			return newCategory;
		} else {
			// else, return the existing
			throw Error('Existing category.');
		}
	} catch (err) {
		throw err;
	}
};

// PATCH

export const editCategory = async (
	id: any,
	update: any,
): Promise<IProductCategory> => {
	try {
		const category = await ProductCategory.findByIdAndUpdate(
			id,
			update,
		).exec();

		if (category) return category;
		else throw Error('Non-existent category.');
	} catch (err) {
		throw err;
	}
};

// DELETE

export const deleteCategory = async (id: any): Promise<IProductCategory> => {
	try {
		const category = await ProductCategory.findByIdAndDelete({
			_id: id,
		}).exec();
		if (category) return category;
		else throw Error('Non-existent category.');
	} catch (err) {
		throw err;
	}
};

// GET

export const getCategories = async (): Promise<IProductCategory[]> => {
	try {
		const categories = await ProductCategory.find().exec();
		return categories;
	} catch (err) {
		throw err;
	}
};

export const getCategory = async (id: any): Promise<IProductCategory> => {
	try {
		const category = await ProductCategory.findOne({ _id: id }).exec();

		if (category) return category;
		else throw Error('Non-existent category.');
	} catch (err) {
		throw err;
	}
};
