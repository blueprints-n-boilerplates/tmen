import express, { Response, Request } from 'express';
import { IProductCategory } from '../models/categories';
import * as CategoryController from '../controllers/categories';
import { authenticateAccessToken } from '../middlewares/jwt';
import formatter from '../utils/formatter';

const categoryRouter = express.Router();

// POST

categoryRouter.post(
	'/',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const categoryData: IProductCategory = req.body;
				categoryData.slug = formatter(categoryData.name);
				const category = await CategoryController.addCategory(
					categoryData,
				);

				// Created
				return res.status(201).json(category);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

// PATCH

categoryRouter.patch(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const { id } = req.params;
				const update = req.body;
				const category = await CategoryController.editCategory(
					id,
					update,
				);
				return res.status(200).json(category);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

// DELETE

categoryRouter.delete(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		/* TODO: Cascade deletion / nullify parent of subcat */
		try {
			try {
				const { id } = req.params;
				const category = await CategoryController.deleteCategory(id);
				return res.status(200).json(category);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

// GET

categoryRouter.get(
	'/',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		try {
			try {
				const category = await CategoryController.getCategories();

				return res.status(200).json(category);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

categoryRouter.get(
	'/:id',
	authenticateAccessToken,
	async (req: Request, res: Response) => {
		/* TODO: Cascade deletion / nullify parent of subcat */
		try {
			try {
				const { id } = req.params;
				const category = await CategoryController.getCategory(id);
				return res.status(200).json(category);
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

export default categoryRouter;
