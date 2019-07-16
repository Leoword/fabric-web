<template>
	<div class="ms-carousel-slide"
		:class="{
			'ms-carousel-slide-active': isShow
		}"
	>
		<slot>
			<img :src="src" :alt="alt" />
			<div class="ms-carousel-slide-caption">
				<h3>{{ caption }}</h3>
				<p>{{ text }}</p>
			</div>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'f-carousel-slide',
	data() {
		return {
			isShow: false
		}
	},
	props: {
		src: {
			type: String
		},
		alt: {
			type: String
		},
		caption: {
			type: String
		},
		text: {
			type: String
		}
	}
}
</script>


