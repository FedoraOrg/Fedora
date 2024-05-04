---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://i.imgur.com/rKRmZQM.png',
    name: 'Simone Gandini',
    title: 'Marketing & design manager',
    links: [
      { icon: 'github', link: 'https://github.com/ArialTNR' }
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

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Il team
    </template>
    <template #lead>
      Siamo due ragazzi molto giovani appassionati di tecnologia e marketing.
	  Crediamo che il progetto Fedora possa essere un buon metodo per combattere la contraffazione.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

::: tip <CustomFooter/>
:::
