import type { Item } from './types.ts'

export const getAllItems = async (): Promise<Item[]> => {
	return [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' }
	]
}
