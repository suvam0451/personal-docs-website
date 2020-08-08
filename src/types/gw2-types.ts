import { ItemPrice, GW2Item } from '../api/gw2_market'

export const dummyItemPriceData: ItemPrice = {
	id: 0,
	whitelisted: true,
	buys: {
		quantity: 0,
		unit_price: 0,
	},
	sells: {
		quantity: 0,
		unit_price: 0,
	},
}

export const dummyItemData: GW2Item = {
	name: 'loading...',
	description: 'loading...',
	type: 'loading...',
	level: 0,
	rarity: 'Fine',
	vendor_value: 0,
	default_skin: 0,
	game_types: [],
	flags: [],
	restrictions: [],
	id: 0,
	chat_link: 'loading...',
	icon: 'loading...',
	details: {
		type: 'loading...',
		weight_class: 'Light',
		defense: 0,
		infusion_slots: [],
		attribute_adjustment: 'loading...',
		infix_upgrade: {
			id: 0,
			attribute: [],
		},
	},
}
