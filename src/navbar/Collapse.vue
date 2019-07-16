<template>
	<div class="ms-navbar-collapse" v-show="isExpand"
		:style="{
			width: width
		}"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'f-navbar-collapse',
	data() {
		return {
			isExpand: false
		}
	},
	props: {
		id: {
			type: String
		},
		width: {
			type: String,
			default: 'auto%'
		}
	},
	methods: {
		expand(target) {
			if (target !== this.id) {
				return;
			}

			this.isExpand = true;
		},
		close(target) {
			if (target !== this.id) {
				return;
			}

			this.isExpand = false;
		}
	},
	mounted() {
		this.$root.$on('f::collapse::show', this.expand);
		this.$root.$on('f::collapse::hide', this.close);
	},
	destroyed() {
		this.$root.$off('f::collapse::show', this.expand);
		this.$root.$off('f::collapse::hide', this.close);
	}
}
</script>

<style lang="scss">
.ms-navbar-collapse {
	vertical-align: top;
}
</style>


