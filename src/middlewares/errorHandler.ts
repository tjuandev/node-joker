import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export interface AppError extends Error {
	status?: number
}

export const errorHandler = (
	err: AppError | ZodError,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	console.error(err)

	if (err instanceof ZodError) {
		return res.status(400).json({
			message: 'Validation failed',
			errors: err.issues
		})
	}

	const appError = err as AppError
	res.status(appError.status || 500).json({
		message: appError.message || 'Internal Server Error'
	})
}
