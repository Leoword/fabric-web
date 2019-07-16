<template>
	<div>
		<h2>carousel</h2>
		<div style="width: 400px;height:200px">
			<f-carousel v-model="value">
				<f-carousel-slide
					src="https://picsum.photos/1024/480/?image=52"
					caption="h1 test1111111111111111111111111111111"
					text="h1 test11111111111111111111111111111"
				></f-carousel-slide>
				<f-carousel-slide
					src="https://picsum.photos/1024/480/?image=54"
				></f-carousel-slide>
				<f-carousel-slide
					src="https://picsum.photos/1024/480/?image=58"
				></f-carousel-slide>
				<f-carousel-slide
					src="https://picsum.photos/1024/480/?image=55"
				></f-carousel-slide>
			</f-carousel>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 1
		}
	}
}
</script>

