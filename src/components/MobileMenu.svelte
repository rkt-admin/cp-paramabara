<script>
	import Logo from './Logo.svelte';
	import { Accordion, AccordionItem } from 'svelte-accessible-accordion';
	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="md:hidden my-2">
	<div class="flex">
		<button
			class="burger visible"
			aria-label="Toggle menu"
			type="button"
			on:click={() => (isOpen = !isOpen)}
		>
			{#if !isOpen}
				<svg
					class="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					><path
						d="M2.5 7.5H17.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M2.5 12.5H17.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M2.5 17.5H17.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			{:else}
				<svg
					class="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
					shape-rendering="geometricPrecision"
					data-hide="true"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg
				>
			{/if}
		</button>
		<Logo text={true} size="small" />
	</div>

	{#if isOpen}
		<!-- <Accordion multiselect class="menu absolute flex flex-col bg-slate-900">
		<AccordionItem title="Title 1">
			<li>Content 1</li>
			<li>Content 2</li>
			<li>Content 2</li>
		</AccordionItem>
		<AccordionItem title="Title 2">Content 2</AccordionItem>
		<AccordionItem title="Title 3">
			<AccordionItem title="Title 1">Content 1</AccordionItem>
			<AccordionItem title="Title 2">Content 2</AccordionItem>
			<AccordionItem title="Title 3">Content 2</AccordionItem>
		</AccordionItem>
	</Accordion> -->
		<ul class="menu absolute flex flex-col bg-gray-900 overflow-y-scroll" class:menuRendered={isMenuRendered}>
			<li style="transition-delay: 150ms;">
				<a sveltekit:prefetch on:click={() => setTimeout(() => (isOpen = false), 300)} href="/"
					>Home</a
				>
			</li>
			<li style="transition-delay: 250ms;">
				<a sveltekit:prefetch on:click={() => setTimeout(() => (isOpen = false), 300)} href="/blog"
					>About</a
				>
				<ul>
					<li style="transition-delay: 100ms;">
						<a sveltekit:prefetch on:click={() => setTimeout(() => (isOpen = false), 300)} href="/"
							>Home</a
						>
					</li>
					<li style="transition-delay: 200ms;">
						<a
							sveltekit:prefetch
							on:click={() => setTimeout(() => (isOpen = false), 300)}
							href="/blog">About</a
						>
					</li>
					<li style="transition-delay: 300ms;">
						<a
							sveltekit:prefetch
							on:click={() => setTimeout(() => (isOpen = false), 300)}
							href="/about">Company Insight</a
						>
					</li>				
				</ul>
			</li>
			<li style="transition-delay: 350ms;">
				<a sveltekit:prefetch on:click={() => setTimeout(() => (isOpen = false), 300)} href="/about"
					>Company Insight</a
				>
			</li>
			<li style="transition-delay: 400ms;">
				<a
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="https://github.com/sw-yx/swyxkit">Press Release</a
				>
			</li>
			<li style="transition-delay: 450ms;">
				<a on:click={() => setTimeout(() => (isOpen = false), 200)} href="/tweets">News & Event</a>
			</li>
		</ul>
	{/if}
</div>

<style lang="postcss">
	.burger {
		transition: opacity 300ms ease;
		border: 0;
		background: transparent;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu {
		padding: 0 28px 0 4px;
		margin: 0;
		width: 100%;
		height: 100vh;
		z-index: 1000;
		opacity: 0;
		left: 0;
		transition: opacity 300ms ease, transform 300ms ease;	
		@apply pb-10;	
	}

	.menu li {
		transform: translateX(-16px);
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
		width: 0px;
		white-space: nowrap;
	}

	.menu li > a {
		@apply text-slate-50;
	}

	.menuRendered {
		opacity: 1;
		@apply pl-1;
	}

	.menuRendered li {
		transform: translateX(0);
		opacity: 1;
		@apply w-full font-normal text-lg text-gray-900  dark:text-gray-100;
		@apply pl-8;
	}

	ul > * + * {
		margin-top: 16px;
	}
	li:first-child {
		margin-top: 16px;
	}

	/* @keyframes grow {
		0% {
			height: 0px;
		}
		100% {
			height: 24px;
		}
	} */
</style>
