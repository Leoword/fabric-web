<template>
	<span
		class="ms-breadcrumb-item-container ms-clearfix"
	>
		<a
			class="ms-breadcrumb-item"
			:class="{
				'ms-breadcrumb-item-disabled': disabled,
				[`${activeClass}`]: active
			}"
			:href="!disabled &&  href"
			:target="target"
		>
			<slot></slot>
		</a>
		<i v-show="!active" :class="[split, 'ms-split']"></i>
	</span>
</template>

<script>
export default {
	name: 'f-breadcrumb-item',
	props: {
		href: {
			type: String
		},
		target: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		active: {
			type: Boolean,
			default: false
		},
		split: {
			type: String,
			default: 'ms-breadcrumb-split'
		},
		activeClass: {
			type: String,
			default: 'ms-breadcrumb-item-active'
		}
	}
}
</script>

<style>

</style>
