<script>
	export let url = 'assets/mining-pic-1.jpg'; // small, medium, or large
	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />

<div class="mx-auto w-full h-[18rem] bg-fixed" style="background-image: url('{url}')">
	&nbsp;
</div>
<div class="flex sticky top-[7rem]">
	<h2 class="-mt-10"><slot /></h2>
</div>
<style lang="postcss">
	h2 {
		@apply text-3xl w-full font-bold uppercase bg-slate-400 py-5 px-8 mb-8;
	}
</style>