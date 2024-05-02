import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fedora",
  description: "Non si può sconfiggere la contraffazione, ma la si può rendere inutile.",
  base: '/Fedora/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
	
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FedoraOrg/Fedora' }
    ],
	footer: {
		message: '<strong>Fedora</strong> - built w/ <u><a href="https://vitepress.dev">VitePress</a></u> on <u><a href="https://github.com/FedoraOrg/Fedora/blob/main/LICENSE">MIT</a></u>',
		copyright: '© 2024  Fedora Org.'
	}
  }
})
