<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { nextTick, provide } from 'vue'

const { Layout } = DefaultTheme
const { isDark } = useData()
const { page } = useData()

const enableTransitions = () =>
	'startViewTransition' in document &&
	window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }, MouseEvent) => {
	if (!enableTransitions()) {
		isDark.value = !isDark.value
		return
	}
	
	const clipPath = [
		`circle(0px at ${x}px ${y}px`,
		`circle(${Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y)
		)}px at ${x}px ${y}px)`
	]
	
	await document.startViewTransition(async () => {
		isDark.value = !isDark.value
		return nextTick()
	}).ready
	
	document.documentElement.animate(
		{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
		{
			duration: 300,
			easing: 'ease-in',
			pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
		}
	)
})
</script>

<template>
	<Layout>
		<template #layout-bottom>
				<div class="container" data-v-566314d4="">
					<p class="message" data-v-566314d4="">
						<strong>Fedora</strong> - built w/ <u><a href="https://vitepress.dev">VitePress</a></u> on <u><a href="https://github.com/FedoraOrg/Fedora/blob/main/LICENSE">MIT</a></u>
					</p>
					<p class="copyright" data-v-566314d4="">© 2024  Fedora Org.</p>
					<br>
				</div>
		</template>
	</Layout>
</template>

<template>
	<DefaultTheme.Layout/>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
	animation: none;
	mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
	z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
	z-index: 9999;
}

.VPSwitchAppearance {
	width: 22px !important;
}

.VPSwitchAppearance .check {
	transform: none !important;
}

:root {
	--vp-home-hero-name-color: transparent;
	--vp-home-hero-name-background: -webkit-linear-gradient(120deg, #A69CAC, #474973);
	--vp-home-hero-image-background-image: linear-gradient(to bottom right, #474973, #0D0C1D);
	--vp-home-hero-image-filter: blur(100px)
}
</style>
