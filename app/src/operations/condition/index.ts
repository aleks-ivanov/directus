import { defineOperationApp } from '@directus/shared/utils';

export default defineOperationApp({
	id: 'condition',
	icon: 'rule',
	name: '$t:operations.condition.name',
	description: '$t:operations.condition.description',
	overview: ({ filter }) => [
		{
			label: '$t:condition_rules',
			text: filter,
		},
	],
	options: () => [
		{
			field: 'filter',
			name: '$t:condition_rules',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
				options: {
					language: 'json',
					placeholder: `{
	"$trigger": {
		"category": {
			"_eq": "Example"
		}
	}
}`,
				},
			},
		},
	],
});
