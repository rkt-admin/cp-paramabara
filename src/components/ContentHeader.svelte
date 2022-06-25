<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let url = 'assets/mining-pic-1.jpg'; // small, medium, or large
	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />

<div class="mx-auto w-full h-[18rem] bg-fixed"
style="background-image: url('{url}')">
	&nbsp;
</div>
<div class="flex" in:fly="{{ y: -20, duration: 300, opacity: 0.5  }}"
out:fly="{{y: -20, duration: 100, opacity: 1 }}" >
	<h2 class="-mt-8"><slot /></h2>
</div>
<style lang="postcss">
	h2 {
		@apply text-2xl w-full font-bold uppercase bg-black py-3 px-8 mb-8;
	}
</style>