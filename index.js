import FabricUI from '@or-change/fabric-ui';

import ButtonGroupPlugin from './src/buttonGroup';
import CarouselPlugin from './src/carousel';
import NavbarPlugin from './src/navbar';

const pluginList = [
	ButtonGroupPlugin,
	CarouselPlugin,
	NavbarPlugin
];

export default function install(Vue, options) {
	Vue.use(FabricUI, options);

	pluginList.forEach(plugin => Vue.use(plugin));
}