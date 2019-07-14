<template>
	<div class="ms-button-group"
		:class="[
			`ms-button-group-${computedSize}`,
			{
				'ms-button-group-horizontal': !vertical,
				'ms-button-group-vertical': vertical,
				'ms-button-group-no-border': !border
			}
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-button-group',
	props: {
		vertical: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: true
		}
	},
	mixins: [mixin],
	mounted() {
		const isWarning = this.$slots.default.filter(tabItem => {
			if (tabItem.componentOptions) {

				tabItem.componentOptions.propsData.size="sm";
			}

			return tabItem.tag && (!tabItem.componentOptions || tabItem.componentOptions.tag !== 'f-button');
		})
			.length > 0;


		if (isWarning) {
			console.warn('The child of f-button-group component must be f-button component.')
		}
	}
}
</script>

