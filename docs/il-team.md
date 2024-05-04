---
head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/FedoraOrg/Fedora/main/resources/favicon.ico' }]]
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://i.imgur.com/rKRmZQM.png',
    name: 'Simone Gandini',
    title: 'Marketing & design manager',
    links: [
      { icon: 'github', link: 'https://github.com/ArialTNR' },
	  { icon: 'twitter', link: 'https://twitter.com/sonovain' },
	  { icon: 'reddit', link: 'https://www.reddit.com/sonovain' }
    ]
  },
  {
    avatar: 'https://i.imgur.com/KhvSjGf.png',
    name: 'Remigio Piovani',
    title: 'Chief Technology Officer',
    links: [
      { icon: 'github', link: 'https://github.com/Remigio07' },
	  { icon: 'discord', link: 'https://discord.gg/eSnAPhvMTG' }
    ]
  }
]
</script>

# Il team
Siamo due ragazzi molto giovani appassionati di tecnologia e marketing.
Crediamo che il progetto Fedora possa essere un buon metodo per combattere la contraffazione.

<VPTeamMembers size="small" :members="members" />

::: tip <CustomFooter/>
:::
