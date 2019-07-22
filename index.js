import defaultIcon from './src/icon';

import ButtonGroupPlugin from './src/buttonGroup';
import CarouselPlugin from './src/carousel';
import NavbarPlugin from './src/navbar';
import Breadcrumb from './src/breadcrumb';

const pluginList = [
	ButtonGroupPlugin,
	CarouselPlugin,
	NavbarPlugin,
	Breadcrumb
];

function normalize(options) {
	if (typeof options.icon !== 'object') {
		options.icon = defaultIcon;
	}

	return options;
}

export default function install(Vue, options = {}) {
	Vue.prototype.$fabricWeb = normalize(options);

	pluginList.forEach(plugin => Vue.use(plugin));
}