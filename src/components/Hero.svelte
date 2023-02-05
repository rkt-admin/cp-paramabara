<script>
	import Background from '../components/Background.svelte';
</script>

<Background>
	<div
		class="inline-grid grid-cols-2 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 pl-8 pr-12 py-4 mt-14 ml-5 mx-auto z-0"
	>
		<div class="col-span-2">
			<h2
				class="max-w-2xl items-left uppercase text-white dark:text-white text-6xl font-bold text-left md:text-left sm:text-2xl leading-none tracking-tight p-2 bg-black/80 dark:bg-black/80 "
			>
				Coal Mining Resources
			</h2>
			<div
				class="max-w-2xl items-left text-gray-400 dark:text-gray-300 text-base sm:text-base font-normal text-left md:text-left leading-none tracking-normal p-2 bg-black/80 dark:bg-black/80 "
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, magna sit amet
				aliquam posuere, ante mi euismod lectus, non volutpat mauris magna ut nunc. Sed eget mauris
				felis. Cras commodo nibh odio, ut commodo turpis ultricies in.
			</div>
		</div>
	</div>

	<!-- <div class="absolute right-60  -top-32 h-full w-full bg-sky-100 dark:bg-gray-900 -z-20 ">&nbsp;</div>
    <div class="absolute top-0 left-0 w-full min-h-screen bg-slate-200 dark:bg-gray-900 -z-20">&nbsp;</div> -->
</Background>

<style lang="postcss">
	.animate-character {
		/* font-weight: 300; */
		background-image: linear-gradient(-225deg, #ea0000 25%, #007c1d 50%, #b9a000 75%, #ce5757 100%);
		background-size: auto auto;
		background-clip: border-box;
		background-size: 200% auto;
		color: #fff;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 3s reverse infinite;
		display: inline-block;
	}

	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}
</style>
