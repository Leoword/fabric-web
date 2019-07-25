<template>
	<f-nav-item>
		<f-button
			size="lg"
			class="ms-nav-button"
			:type="type"
			:text="text"
			:tag="tag"
			:href="href"
			:target="target"
			:disabled="disabled"
			:width="width"
			:icon="icon"
			:dropdown="dropdown"
			:split="split"
			:triangle="triangle"
			:dropdownDisabled="dropdownDisabled"
			@click="$emit('click', $event)"
			@dropdown="$emit('dropdown', $event)"
		>
			<div slot="menu">
				<slot name="menu"></slot>
			</div>
		</f-button>
	</f-nav-item>
</template>

<script>
export default {
	name: 'f-nav-button',
	props: {
		type: {
			type: String,
			default: 'button'
		},
		text: {
			type: String,
			default: ''
		},
		tag: {
			type: String,
			default: 'button'
		},
		href: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: 'auto'
		},
		// border: {
		// 	type: Boolean,
		// 	default: true
		// },
		// bar: {
		// 	type: Boolean,
		// 	default: false
		// },
		icon: {
			type: String,
			default: null
		},
		// description: {
		// 	type: String,
		// 	default: null
		// },
		dropdown: {
			type: Boolean,
			default: false
		},
		split: {
			type: Boolean,
			default: false
		},
		triangle: {
			type: Boolean,
			default: false
		},
		dropdownDisabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
@import 'office-ui-fabric-core/src/sass/_References.scss';

.ms-nav-item {
	ul.ms-menu {
		top: 0;
		left: 0;
	}
}

.ms-nav-button .ms-button, .ms-nav-button .ms-button button,  .ms-nav-button .ms-button a{
	padding-top: 0px;
	padding-bottom: 0px;
	height: 40px;
	line-height: 40px;
	background-color: transparent !important;
	border: none;
}

.ms-nav-button .ms-button:hover, .ms-nav-button .ms-button:active{
	background-color: transparent !important;

	button, a {
		border: none;
		color: $ms-color-white !important;
		background-color: transparent !important;
	}

	.ms-dropdown-triangle {
		border-color: $ms-color-white transparent transparent transparent;
	}
}

.ms-nav-button .ms-button {
	button.ms-button-disabled, a.ms-button-disabled {
		color: #c8c6c4 !important;
	}

	.ms-button-disabled .ms-dropdown-triangle {
		border-color: #c8c6c4 transparent transparent transparent;
	}
}
.ms-nav-button .ms-buttonms-button-split .ms-button-dropdown .ms-button-split-icon {
	background-color: #c8c6c4;
	display: block !important;
}

</style>
