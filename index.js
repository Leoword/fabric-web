import FabricUI from '@or-change/fabric-ui';

import ButtonGroupPlugin from './src/buttonGroup';

const pluginList = [
	ButtonGroupPlugin
];

export default function install(Vue, options) {
	Vue.use(FabricUI, options);

	pluginList.forEach(plugin => Vue.use(plugin));
}