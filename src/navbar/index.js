import './navbar.scss';

import NavLink from './Link.vue';
import NavButton from './Button.vue';
import NavBrand from './Brand.vue';
import Collapse from './Collapse.vue';
import NavItem from './Item.vue';
import Nav from './Nav.vue';
import Navbar from './Navbar.vue';
import Toggle from './Toggle.vue';

const componentList = [
	NavLink,
	NavButton,
	NavBrand,
	Collapse,
	NavItem,
	Nav,
	Navbar,
	Toggle
];

export default function install(Vue) {
	componentList.forEach(component => {
		Vue.component(component.name, component);
	});
}
