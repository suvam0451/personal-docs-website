import getGW2APIInstance from './gw2_base'

export type ItemPrice = {
	id: number
	whitelisted: boolean
	buys: {
		quantity: number
		unit_price: number
	}
	sells: {
		quantity: number
		unit_price: number
	}
}

export async function getItemPrice(itemId: number | string): Promise<ItemPrice> {
	return new Promise<ItemPrice>((resolve, reject) => {
		getGW2APIInstance()
			.get<ItemPrice>(`/commerce/prices/${itemId}`)
			.then(
				(res) => {
					resolve(res.data)
				},
				(err) => {
					reject(err)
				},
			)
	})
}

export type GW2Item = {
	name: string
	description: string // Mostly empty
	type: string
	level: number
	rarity: 'Fine'
	vendor_value: number
	default_skin: number
	game_types: string[]
	flags: []
	restrictions: []
	id: number
	chat_link: string
	icon: string
	details: {
		type: string
		weight_class: 'Heavy' | 'Light' | 'Medium'
		defense: number
		infusion_slots: []
		attribute_adjustment: string
		infix_upgrade: {
			id: number
			attribute: {
				attribute: string
				modifier: number
			}[]
		}
	}
}

export async function getItemDetails(itemId: number | string): Promise<GW2Item> {
	return new Promise<GW2Item>((resolve, reject) => {
		getGW2APIInstance()
			.get<GW2Item>(`/items/${itemId}`)
			.then(
				(res) => {
					resolve(res.data)
				},
				(err) => {
					reject(err)
				},
			)
	})
}
