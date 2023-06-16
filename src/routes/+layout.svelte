<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import Heading from './heading.svelte'
	import PageFooter from './footer.svelte'
	import '../app.postcss'
	import { AppShell } from '@skeletonlabs/skeleton'
</script>

<svelte:head>
	<title>Fieldbender</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>
<!-- <AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>-->

<Heading />

<slot />
<!-- <svelte:fragment slot="footer">PageFooter</svelte:fragment> -->
<PageFooter />
<!-- </AppShell> -->
