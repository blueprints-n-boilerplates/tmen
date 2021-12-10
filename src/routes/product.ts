import express, { Response, Request } from 'express';
import { IProduct } from '../models/product';
import * as ProductController from '../controllers/product';
import { authenticateAccessToken } from '../middlewares/jwt';

const productRouter = express.Router();

/**
 * Products
 **/

// post

productRouter.post(
	'/',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const productData: IProduct = req.body;
				const product = await ProductController.addProduct(productData);

				// Created
				return res.status(201).json({
					_id: product._id,
					name: product.name,
				});
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error

			return res.status(500).json({ message: err.message });
		}
	},
);

// patch

productRouter.patch(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const { id } = req.params;
				const update = req.body;
				const product = await ProductController.editProduct(id, update);
				return res.status(200).json(product);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error

			return res.status(500).json({ message: err.message });
		}
	},
);

// delete

productRouter.delete(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const { id } = req.params;
				const product = await ProductController.deleteProduct(id);
				return res.status(200).json(product);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error

			return res.status(500).json({ message: err.message });
		}
	},
);

// get

productRouter.get(
	'/',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const products = await ProductController.getProducts();

				// List
				return res.status(200).json(products);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error

			return res.status(500).json({ message: err.message });
		}
	},
);

productRouter.get(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const { id } = req.params;
				const product = await ProductController.getProduct(id);
				return res.status(200).json(product);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error

			return res.status(500).json({ message: err.message });
		}
	},
);

export default productRouter;
