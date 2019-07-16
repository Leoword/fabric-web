<template>
	<div
		class="ms-navbar-brand"
		:class="{
			'ms-navbar-brand-disabled': disabled
		}"
	>
		<f-nav-link
			:href="href"
			:target="target"
			:disabled="disabled"
		>
			<slot></slot>
		</f-nav-link>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-navbar-brand',
	mixins: [mixin]
}
</script>

<style lang="scss">
.ms-navbar-brand {
	vertical-align: top;
	padding-right: 16px;
	font-size: 20px;
	line-height: inherit;
	white-space: nowrap;
	word-break: keep-all;
	width: 20px;;
	cursor: pointer;
}

.ms-navbar-brand-disabled {
	cursor: default;
}
</style>

