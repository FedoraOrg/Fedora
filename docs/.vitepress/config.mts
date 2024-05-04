import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Fedora",
	description: "Non si può sconfiggere la contraffazione, ma la si può rendere inutile.",
	siteTitle: 'Fedora',
	logo: 'https://raw.githubusercontent.com/FedoraOrg/Fedora/main/resources/logo-round.png',
	base: '/Fedora/',
	cleanUrls: true,
	lastUpdated: true,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Informazioni', link: '/il-progetto' }
		],
		sidebar: [
			{
				text: 'Informazioni',
				items: [
					{ text: 'Il progetto', link: '/il-progetto' },
					{ text: 'Prototipo demo', link: '/prototipo-demo' },
					{ text: 'Il team', link: '/il-team' },
					{ text: 'Link utili', link: '/link-utili' }
				]
			}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/FedoraOrg/Fedora' },
			{ icon: 'youtube', link: 'https://youtu.be/YJ-ZPNuiiSU' }
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
