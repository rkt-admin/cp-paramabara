<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from '$lib/photoswipe/photoswipe-lightbox.esm';
	export let galleryID;
	export let images;
	import PhotoSwipe from '$lib/photoswipe/photoswipe.esm';
	import PhotoSwipeDeepZoom from '$lib/photoswipe/photoswipe-deep-zoom-plugin.esm.js';

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: '.pswp-gallery__item',
			pswpModule: PhotoSwipe,

			// Recommended PhotoSwipe options for this plugin
			allowPanToNext: false, // prevent swiping to the next slide when image is zoomed
			allowMouseDrag: true, // display dragging cursor at max zoom level
			wheelToZoom: true, // enable wheel-based zoom
			zoom: false // disable default zoom button
		});

		const deepZoomPlugin = new PhotoSwipeDeepZoom(lightbox, {
			// deep zoom plugin options, for example:
			tileSize: 256
		});

		lightbox.init();
	});	
</script>

<div id={galleryID} class="pswp-gallery">
	{#each images as image}
		<a
			href={image.src}
			target="_blank"
			rel="noreferrer"
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			data-pswp-tile-type={image.tileType}
			data-pswp-tile-url={image.tileUrl}
			data-pswp-max-width={image.maxWidth}
			data-pswp-max-height={image.maxHeight}
		>
			<img src={image.msrc} alt="aaa" />
		</a>
	{/each}
</div>
