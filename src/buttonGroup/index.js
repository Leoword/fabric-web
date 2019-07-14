import './buttonGroup.scss';
import ButtonGroup from './ButtonGroup.vue';

export default function install(Vue) {
	Vue.component(ButtonGroup.name, ButtonGroup);
}