import './breadcrumb.scss';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './Item.vue';

export default function install(Vue) {
	Vue.component(Breadcrumb.name, Breadcrumb);
	Vue.component(BreadcrumbItem.name, BreadcrumbItem);
}