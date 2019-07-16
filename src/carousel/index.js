import './carousel.scss';
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';

export default function install(Vue) {
	Vue.component(Carousel.name, Carousel);
	Vue.component(CarouselSlide.name, CarouselSlide);
}