<template>
	<li class="ms-nav-item">
		<slot>
			<f-nav-link
				:href="href"
				:target="target"
				:disabled="disabled"
			>
				{{ text }}
			</f-nav-link>
		</slot>
	</li>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-nav-item',
	mixins: [mixin],
	props: {
		text: {
			type: String
		}
	}
}
</script>

<style lang="scss">
.ms-nav-item {
	display: inline-block;
	padding: 0 8px;
	font-size: 16px;
	vertical-align: middle;
}
</style>


