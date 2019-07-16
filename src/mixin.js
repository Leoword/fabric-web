const SIZE_REG = /(sm|md|lg)/;

export default {
	props: {
		size: {
			type: String,
			validator(value) {
				const result = SIZE_REG.test(value)

				if (!result) {
					console.warn('The value of size should be one of sm, md, lg');
				}

				return result;
			}
		}
	},
	computed: {
		computedSize() {
			return this.size ? this.size : this.$fabric.size;
		}
	},
	methods: {
		hasClass(el, className) {
			return el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
		},
		addClass(el, className) {
			if (el.classList) {
				return el.classList.add(className);
			}

			if (!this.hasClass(el, className)) {
				return el.className = `${el.className} ${className}`;
			}
		},
		removeClass(el, className) {
			if (el.classList) {
				return el.classList.remove(className);
			}
			
			if (this.hasClass(el, className)) {
				const regExp = new RegExp(`(\\s|^)${className}(\\s|$)`);

 				return el.className = el.className.replace(regExp, ''); 
			}
		}
	}
}