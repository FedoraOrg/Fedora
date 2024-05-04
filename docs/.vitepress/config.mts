import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Fedora",
	description: "Non si può sconfiggere la contraffazione, ma la si può rendere inutile.",
	logo: 'https://github.com/FedoraOrg/Fedora/blob/main/logo.png',
	base: '/Fedora/',
	cleanUrls: true,
	lastUpdated: true,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],
		sidebar: [
			{
				text: 'Informazioni',
				items: [
					{ text: 'Il team', link: '/il-team' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/FedoraOrg/Fedora' },
			{ icon: 'youtube', link: 'https://github.com/FedoraOrg/Fedora' }
		],
		footer: {
			message: '<strong>Fedora</strong> - built w/ <u><a href="https://vitepress.dev">VitePress</a></u> on <u><a href="https://github.com/FedoraOrg/Fedora/blob/main/LICENSE">MIT</a></u>',
			copyright: '© 2024  Fedora Org.'
		},
		editLink: {
			pattern: 'https://github.com/FedoraOrg/Fedora/edit/main/docs/:path',
			text: 'Modifica su GitHub'
		}
	}
})
