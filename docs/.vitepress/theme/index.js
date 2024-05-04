import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import CustomFooter from './CustomFooter.vue'

export default {
	extends: DefaultTheme,
	Layout: CustomLayout,
	enhanceApp({ app }) {
		app.component('CustomFooter', CustomFooter)
	}
}
