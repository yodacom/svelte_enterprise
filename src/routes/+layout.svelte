<script lang="ts">
	import Heading from './heading.svelte'
	import Footer from './footer.svelte'
	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Fieldbender</title>
	<link rel="icon" href="https://fav.farm/🔥" />
	<!-- <link rel="icon" type="image/x-icon" href="favicon.png" /> -->
</svelte:head>

<Heading />

<slot />

<Footer />
