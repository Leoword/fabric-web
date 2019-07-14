import FabricUI from '@or-change/fabric-ui';

const pluginList = [];

export default function install(Vue, options) {
	Vue.use(FabricUI, options);

	pluginList.forEach(plugin => Vue.use(plugin));
}