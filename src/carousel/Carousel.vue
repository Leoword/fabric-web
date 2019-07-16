<template>
	<div
		:style="{
			width: width,
			height: height
		}"
		:class="[
			'ms-carousel',
			{
				'ms-carousel-animation': animation,
				'ms-carousel-fade': fade
			}
		]"
		@mouseenter="isHover = true"
		@mouseleave="isHover = false;startRotate()"
	>
		<slot></slot>
		<button
			class="ms-carousel-prev"
			@click="activeCarouselSlide(activeSlide - 1)"
			v-show="control"
		>
			<i class="ms-Icon ms-Icon--ChevronLeftSmall"></i>
		</button>
		<button
			class="ms-carousel-next"
			@click="activeCarouselSlide(activeSlide + 1)"
			v-show="control"
		>
			<i class="ms-Icon ms-Icon--ChevronRightSmall"></i>
		</button>
		<ol
			class="ms-carousel-indicator"
			v-show="indicator"
		>
			<li
				v-for="(item, index) in carouselSlideList"
				:key="index"
				@click="activeCarouselSlide(index)"
				:class="{
					'ms-carousel-indicator-active': activeSlide === index
				}"
			></li>
		</ol>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-carousel',
	data() {
		return {
			carouselSlideList: null,
			timer: null,
			activeSlide: 0,
			isHover: false
		}
	},
	mixins: [mixin],
	props: {
		value: {
			type: Number,
			default: 0
		},
		interval: {
			type: Number,
			default: 5000
		},
		indicator: {
			type: Boolean,
			default: true
		},
		control: {
			type: Boolean,
			default: true
		},
		animation: {
			type: Boolean,
			default: true
		},
		fade: {
			type: Boolean,
			default: true
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '100%'
		},
		hoverPause: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		value() {
			this.activeCarouselSlide(this.value);
		}
	},
	methods: {
		getCarouselSlide() {
			this.carouselSlideList = this.$slots.default.filter(carouselSlide => carouselSlide.componentOptions && carouselSlide.componentOptions.tag === 'f-carousel-slide')
				.map(vnode => vnode.componentInstance);
		},
		activeCarouselSlide(index) {
			if (!index) {
				index = 0;
			}

			if (index < 0) {
				index = this.carouselSlideList.length - 1;
			}

			if (index > this.carouselSlideList.length - 1) {
				index = 0;
			}


			this.carouselSlideList.forEach((carouselSlide, number) => {
				carouselSlide.$set(carouselSlide, 'isShow', false);

				if (index === number) {
					carouselSlide.$set(carouselSlide, 'isShow', true);
				}
			});

			this.activeSlide = index;

			this.$emit('input', this.activeSlide);
		},
		startRotate() {
			if (this.interval) {
				this.timer = setTimeout(() => {
					clearTimeout(this.timer);

					if (this.hoverPause && this.isHover) {
						return;
					}

					this.activeCarouselSlide(this.activeSlide + 1);
					this.startRotate();

				}, this.interval);
			}
		}
	},
	mounted() {
		const isWarning = !this.$slots.default || this.$slots.default.filter(tabItem => {
			return tabItem.tag && (!tabItem.componentOptions || tabItem.componentOptions.tag !== 'f-carousel-slide');
		})
			.length > 0;


		if (isWarning) {
			return console.warn('The child of f-carousel component must be f-carousel-slide component.')
		}

		this.getCarouselSlide();
		this.activeCarouselSlide(this.value);
		this.startRotate();
	}
}
</script>
