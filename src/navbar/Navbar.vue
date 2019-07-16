<template>
	<div
		class="ms-navbar"
		:class="[
			`ms-variant-${variant}`,
			`ms-navbar-${type}`,
			{
				'ms-navbar-fixed': fixed,
				'ms-navbar-sticky': sticky
			}
		]"
	>
		<nav>
			<slot></slot>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'f-navbar',
	props: {
		fixed: {
			type: Boolean,
			default: false
		},
		sticky: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'light' //(light, dark)
		},
		variant: {
			type: String,
			default: 'primary' //(primary, success, info, warning, danger, secondary,dark)
		}
	}
}
</script>

<style lang="scss">
@import 'office-ui-fabric-core/src/sass/_References.scss';

.ms-navbar {
	width: 100%;
	height: 100%;
	padding: 8px 16px;
}

nav {
	width: 100%;
}

.ms-navbar-fixed {
	position: fixed;
	top: 0;
	left: 0;
	height: auto;
	z-index: 500;
}

.ms-navbar-sticky {
	position: absolute;
	top: 0;
	left: 0;
	height: auto;
	z-index: 500;
}

@media (min-width: $ms-screen-min-lg) and (max-width: $ms-screen-max-xxl) {
	nav {
		display: table;
	}

	.ms-navbar-brand {
		display: table-cell;
	}

	.ms-navbar .ms-navbar-collapse {
		display: table-cell !important;
	}
}

@media (min-width: 0) and (max-width: $ms-screen-max-md) {
	nav {
		display: block;
	}

	.ms-navbar-brand {
		display: inline-block;
	}

	.ms-navbar .ms-navbar-collapse {
		display: block;
	}

	.ms-navbar .ms-navbar-nav, .ms-navbar .ms-navbar-nav li{
		display: block;
		float: none;
	}
}
</style>

