export default {
	props: {
		href: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}