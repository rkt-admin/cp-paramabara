<script>
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let url = 'assets/mining-pic-1.jpg'; // small, medium, or large
	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />

<div
	class="mx-auto h-[15rem] w-full rounded-md"
	in:fly={{ y: -5, duration: 500, opacity: 0.5 }}
	out:fly={{ y: 5, duration: 500, opacity: 0.5 }}
	style="background-image: url('{url}')"
/>
<div
	class="mb-10 flex"
	in:fly={{ y: -5, duration: 500, opacity: 0.5 }}
	out:fly={{ y: 5, duration: 500, opacity: 0.5 }}
>
	<h2><slot /></h2>
</div>

<style lang="postcss">
	h2 {
		color: white;
		@apply -mt-16 mb-0 w-full bg-gray-600 py-4 px-6 text-xl font-semibold;
		@apply bg-gray-900/80 dark:bg-black/80;
	}
</style>
