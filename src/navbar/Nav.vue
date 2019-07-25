<template>
	<ul class="ms-navbar-nav ms-clearfix"
		:class="[
			`ms-navbar-nav-${align}`
		]"
	>
		<slot></slot>
	</ul>
</template>

<script>
export default {
	name: 'f-navbar-nav',
	props: {
		align: {
			type: String,
			default: 'left'
		}
	}
}
</script>

<style lang="scss">
.ms-navbar-nav {
	display: inline-block;
	vertical-align: top;
}

.ms-navbar-nav-right {
	float: right
}
</style>

