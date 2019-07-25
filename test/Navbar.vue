<template>
	<div style="position: relative">
		<h2>navbar</h2>
		<f-navbar fixed>
			<f-navbar-brand>
				<img src="https://placekitten.com/g/30/30" alt="">
				Navbar test
			</f-navbar-brand>

			<f-navbar-toggle target="collapse 1" />

			<f-navbar-collapse id="collapse 1">
				<f-navbar-nav>
					<f-nav-item text="nav item 1" :disabled="true" href="http://baidu.com" />
					<f-nav-item text="nav item 1" />
					<f-nav-item text="nav item 1" />

					<f-nav-button
						icon="ms-Icon ms-Icon--Add"
						text="Create account"
						:dropdown="true"
						split tag="a"
						disabled
						dropdownDisabled
						@dropdown.stop="toggleMenu('menu11')"
					>
						<f-menu slot="menu" :menu="menu" ref="menu11" style="top:100%"  />

					</f-nav-button>

					<f-nav-button
						variant="primary"
						icon="ms-Icon ms-Icon--AddFriend"
						text="Create account"
						:border="false"
					/>

					<f-nav-button
						icon="ms-Icon ms-Icon--Emoji2"
						dropdown
						triangle
						size="sm"
					/>
					<f-nav-button
						text="Create account"
					/>
				</f-navbar-nav>
			</f-navbar-collapse>

		</f-navbar>

		<f-navbar type="dark" variant="default">
			<f-navbar-brand>
				<img src="https://placekitten.com/g/30/30" alt="">
				Navbar
			</f-navbar-brand>

			<f-navbar-toggle target="collapse 1" />

			<f-navbar-collapse id="collapse 1">
				<f-navbar-nav>
					<f-nav-item text="nav item 1" :disabled="true" />
					<f-nav-item text="nav item 1" />
					<f-nav-item text="nav item 1" />
				</f-navbar-nav>

				<f-navbar-nav align="right">
					<f-nav-item text="nav item 1" />
					<f-nav-item text="nav item 1" />
					<f-nav-item text="nav item 1" />
					<f-nav-item>
						<f-search-box size="md"></f-search-box>
					</f-nav-item>
					<f-nav-item>
						<f-button
							size="sm"
							tag="a"
							href="http://www.baidu.com"
							text="Create account"
							dropdown split
							@click.native.stop
						/>
					</f-nav-item>
				</f-navbar-nav>
			</f-navbar-collapse>

		</f-navbar>
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

			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show();
			}
		}
	}
}
</script>


<style lang="scss">
.ml-auto {
	margin-left: 20px;
}
</style>

