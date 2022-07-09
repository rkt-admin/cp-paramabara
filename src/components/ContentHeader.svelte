<script>
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let url = 'assets/mining-pic-1.jpg'; // small, medium, or large
	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />

<div class="mx-auto w-full h-[15rem] rounded-md"  in:fly="{{ y: -5, duration: 500, opacity: 0.5  }}" out:fly="{{ y: 5, duration: 500, opacity: 0.5  }}" style="background-image: url('{url}')">
</div>
<div class="flex mb-10" in:fly="{{ y: -5, duration: 500, opacity: 0.5  }}" out:fly="{{ y: 5, duration: 500, opacity: 0.5  }}"
 >
	<h2><slot /></h2>
</div>
<style lang="postcss">
	h2 {
		color: gold;
		@apply text-xl w-full font-bold bg-gray-600 py-4 px-6 -mt-16 mb-0;
		@apply bg-gray-900/80 dark:bg-black/80;
	}
</style>