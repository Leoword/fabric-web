<template>
	<div>
		<h2>breadcrumb</h2>

		<f-breadcrumb :items="items" size="sm" />
		<f-breadcrumb :items="items" />
		<f-breadcrumb :items="items" size="lg" :split="split"/>
		<f-breadcrumb :items="items2" :split="split">
			<f-breadcrumb-item active>test</f-breadcrumb-item>
		</f-breadcrumb>
	</div>
</template>

<script>
export default {
	data() {
		return {
			split: 'ms-Icon ms-Icon--ChevronRight',
			items: [
				{
					text: 'Admin',
					href: 'http://www.baidu.com'
				},
				{
					text: 'Manage',
					href: '#'
				},
				{
					text: 'Library',
					active: true,
					activeClass: 'active'
				}
			],
			items2: [
				{
					text: 'Admin',
					href: 'http://www.baidu.com'
				},
				{
					text: 'Manage',
					href: '#'
				},
				{
					text: 'Library',
					activeClass: 'active'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.active {
	color: red !important;
}
</style>

