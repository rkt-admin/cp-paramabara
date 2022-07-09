<script context="module">	
	export const prerender = true; // index page is most visited, lets prerender
</script>

<script>
	import Newsletter from '../components/Newsletter.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import Video from '../components/Video.svelte';
	import Hero from '../components/Hero.svelte';
</script>



<div class="flex flex-col justify-center pb-16">
	<Hero />
	<!-- <Video /> -->

	<!-- <section class="mb-16 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Featured Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard title="Welcome to swyxkit 2022!" href="/welcome" stringData="Jan 2022" />
			<FeatureCard
				title="Moving to a GitHub CMS"
				href="/moving-to-a-github-cms"
				stringData="Jan 2022"
			/>
			<FeatureCard title="HTML Ipsum demo" href="/moo" stringData="Jan 2022" />
		</div>
		<a
			class="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"
			href="/blog"
			>See latest posts<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="ml-1 h-6 w-6"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
				/></svg
			></a
		>
	</section> -->
	<!-- <Newsletter /> -->
<div class="h-screen"></div>
</div>
