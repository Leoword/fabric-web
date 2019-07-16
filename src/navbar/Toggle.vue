<template>
	<button class="ms-navbar-toggle ms-hiddenLgUp"
		@click="toggleCollapse"
	>
		<slot>
			<i class="ms-Icon ms-Icon--AlignJustify" v-show="!isExpand"></i>
			<i class="ms-Icon ms-Icon--Cancel" v-show="isExpand"></i>
		</slot>
	</button>
</template>

<script>
export default {
	name: 'f-navbar-toggle',
	data() {
		return {
			isExpand: false
		}
	},
	props: {
		target: {
			type: String
		}
	},
	methods: {
		toggleCollapse() {
			this.isExpand = !this.isExpand;

			if (this.isExpand) {
				this.$root.$emit('f::collapse::show', this.target);
			} else {
				this.$root.$emit('f::collapse::hide', this.target);
			}
		}
	}
}
</script>

<style lang="scss">
.ms-navbar-toggle {
	float: right;
	font: inherit;
	font-weight: 400;
	outline: transparent none medium;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	user-select: none;
	border: none;
	padding: 0px;
	background-color: transparent;

	i {
		font-size: 20px;
	}
}
</style>

