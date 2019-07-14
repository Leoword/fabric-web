<template>
	<div>
		<h2>button group</h2>

		<f-button-group size="sm" vertical>
			<f-button text="test1" :disabled="true" />
			<f-button text="test1" />
			<f-button text="test1" />
			<f-button
				icon="ms-Icon ms-Icon--Emoji2"
				dropdown
				triangle
				size="sm"
			/>
			<f-button
				tag="a"
				href="http://www.baidu.com"
				text="Create account"
				@dropdown="toggleMenu('menu1')"
				dropdown split
				@click.native.stop
			>
				<f-menu slot="menu" :menu="menu" id="menu1" ref="menu1" style="top:100%"  />
			</f-button>
		</f-button-group>

		<f-button-group :border="false">
			<f-button text="test1" variant="primary" :disabled="true" />
			<f-button text="test1" variant="primary" />
			<f-button text="test1" variant="primary"  />
		</f-button-group>

		<f-button-group>
			<f-button text="test1" variant="primary" :disabled="true" />
			<f-button text="test1" variant="primary" />
			<f-button text="test1" variant="primary"  />
			<f-button
				:disabled="true"
				tag="a"
				href="http://www.baidu.com"
				text="Create account"
				@dropdown="toggleMenu('menu2')"
				dropdown split
				variant="primary"
				@click.native.stop
			>
				<f-menu slot="menu" :menu="menu" id="menu2" ref="menu2" style="top:100%"  />
			</f-button>
		</f-button-group>

		<f-button-group>
			<f-button
				icon="ms-Icon ms-Icon--Add"
				:border="false"
				text="Create account"
				:dropdown="true"
				:split="true"
				@dropdown="toggleMenu('menu1')"
				:triangle="true"
			>
				<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

			</f-button>

			<f-button
				icon="ms-Icon ms-Icon--Add"
				text="Create account"
				:dropdown="true"
				@click.native="toggleMenu('menu1')"
			>
				<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

			</f-button>

			<f-button
				variant="primary"
				icon="ms-Icon ms-Icon--Add"
				text="Create account"
				:dropdown="true"
				@click.native="toggleMenu('menu1')"
			>
				<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

			</f-button>

			<f-button
				icon="ms-Icon ms-Icon--Add"
				text="Create account"
				:dropdown="true"
				:split="true"
				@dropdown="toggleMenu('menu1')"
			>
				<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

			</f-button>
		</f-button-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					icon: 'ms-Icon ms-Icon--Mail',
					text: 'Email message'
				},
				{
					icon: 'ms-Icon ms-Icon--Calendar',
					text: 'Calendar event'
				}
			]
		}
	},
	methods: {
		toggleMenu(ref) {
			
			const menu = this.$refs[ref];

			console.log(menu.isShow)
			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show();
			}
		}
	}
}
</script>
