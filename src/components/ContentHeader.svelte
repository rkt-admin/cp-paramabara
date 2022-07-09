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
		@apply text-xl w-full font-bold uppercase bg-slate-200 py-1 px-8 -mt-8 mb-0;
	}
</style>