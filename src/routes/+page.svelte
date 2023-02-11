<!-- <script context="module">
    export const prerender = true
</script> -->
<script>
	import Hero from '../components/Hero.svelte';
	import SectionTransition from '$lib/components/SectionTransition.svelte';
	// import Files from '../components/Files.svelte';
	import Gallery from '../components/Gallery.svelte';
	const images = [
		{
			src: '/assets/tempat1/IMG_2577.jpeg',
			width: 605,
			height: 454,
			msrc: '/assets/tempat1/IMG_2577 (thumbnail).jpeg',
			tileType: 'deepzoom',
			tileUrl: '/assets/tempat1/{z}/{x}_{y}.jpeg',
			tileSize: 254,
			tileOverlap: 1,
			maxWidth: 4032,
			maxHeight: 3024
		}
		// more slides...
	];
</script>

<Hero />
<Gallery galleryID="gallery"  {images} />

<!-- <div class="absolute top-0 left-5 -rotate-1 h-full w-[1px] bg-gray-100 z-50 m-0 p-0">&nbsp;</div>
<div class="absolute top-0 right-5 rotate-1 h-full w-[1px] bg-gray-100 z-50 m-0 p-0">&nbsp;</div> -->
