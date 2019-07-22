<template>
	<div
		:class="[
			'ms-clearfix',
			'ms-breadcrumb',
			`ms-breadcrumb-${computedSize}`
		]"
	>
		<f-breadcrumb-item 
			v-for="(item, index) in items"
			:key="index"
			:href="item.href"
			:target="item.target"
			:disabled="item.disabled"
			:active="item.active"
			:active-class="item.activeClass"
			:split="split"
		>
			{{ item.text }}
		</f-breadcrumb-item>	
		<slot></slot>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-breadcrumb',
	mixins: [mixin],
	props: {
		items: {
			type: Array,
			default: () => []
		},
		split: {
			type: String
		}
	}
}
</script>
