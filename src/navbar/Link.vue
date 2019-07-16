<template>
	<a
		class="ms-nav-link"
		:class="{
			'ms-nav-link-disabled': disabled
		}"
		:href="!disabled && href"
		:target="target"
		:disabled="disabled">
		<slot></slot>
	</a>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-nav-link',
	mixins: [mixin]
}
</script>

<style lang="scss">
.ms-nav-link {
	overflow: hidden;

	img {
		vertical-align: middle;
	}
}
</style>


