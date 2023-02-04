<script>
	import Logo from './Logo.svelte';
	import { SITE_URL, REPO_URL, RSS_URL } from '$lib/siteConfig';
	import NavLink from './NavLink.svelte';

	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />
<!-- <nav class="sticky top-0 bg-white dark:bg-black"></nav> -->
<nav class="sticky top-0 bg-white dark:bg-black">
	<div class="mx-auto flex flex-wrap items-center justify-between">
		<span class="hidden items-center md:order-1 md:flex">
			<Logo text={true} size="medium" />
		</span>
		<div
			class="z-10 hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
			id="mobile-menu-2"
		>
			<ul class="flex">
				<!--Regular Link-->
				<li class="hoverable">
					<a href="/" class="menu-link">About</a>
					<div class="megamenu mb-0">
						<div class="container mx-auto flex flex-wrap justify-between">
							<ul>
								<div class="megamenu-header">
									<h3>Company Overview</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/company-overview">Find out more</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Core Value</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/core-value">Find out more</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Corporate Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/corporate-structure">Find out more</a>
								</div>
							</ul>
							<ul>
								<div class="megamenu-header">
									<h3>Organization Structure</h3>
								</div>
								<p class="megamenu-description">
									Quarterly sales are at an all-time low create spaces to explore the accountable
									talk and blind vampires.
								</p>
								<div class="megamenu-link">
									<a href="/organization-structure">Find out more</a>
								</div>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<a href="/company-insight" class="menu-link">Company Insight</a>
				</li>
				<li>
					<a href="/sustainability" class="menu-link">Sustainability</a>
				</li>
				<li>
					<a href="/press-release" class="menu-link">Press Release</a>
				</li>
				<li>
					<a href="/news-event" class="menu-link">News</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	/* ––––––––––––––––––––––––––––––––––––––––––––––––––
	  Based on: https://codepen.io/nickelse/pen/YGPJQG
	  Influenced by: https://sproutsocial.com/
	–––––––––––––––––––––––––––––––––––––––––––––––––– */

	/* Main Menu */

	nav a {
		@apply text-sm font-light uppercase text-black dark:text-gray-400;
		@apply border-b-2 border-black transition duration-700 ease-in-out hover:border-b-2 hover:border-white hover:text-white;
	}

	.menu-link {
		@apply relative mb-4 block px-4 pt-12 pb-3 text-sm lg:mb-4 lg:px-4 lg:pb-3 lg:text-sm;
	}

	/* Main Menu > link megamenu */
	.hoverable {
		position: static;
	}

	.hoverable:hover a {
		background: rgb(57, 57, 57);
		@apply border-b-black bg-black text-white dark:bg-black dark:text-white;
	}
	.hoverable:hover a:link {
		/* @apply border-4 border-white dark:hover:border-b-black;		 */
	}

	/* Megamenu */
	.hoverable > .megamenu {
		position: absolute;
		text-align: left;
		visibility: hidden;
		opacity: 0;
		z-index: 1;
		@apply left-0 w-full -translate-x-0 -translate-y-3 rounded-md pt-2 pb-6 pl-4;
		@apply border-b-2 border-t-2 border-gray-100;
		background-image: '/assets/texture-carbon.png';
		background-repeat: repeat;
	}
	.hoverable:hover > .megamenu {
		visibility: visible;
		opacity: 1;
		background: rgb(21, 21, 21);
		background: -moz-linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		background: linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		@apply translate-x-0 -translate-y-5;
		@apply dark:border-t-2 dark:border-b-2 dark:border-gray-100;
		@apply transition-all duration-300 ease-in-out;
	}
	.hoverable:hover .megamenu-link a {
		/* background-color: #464647; */
		color: #fdd017;
		@apply bg-transparent font-normal normal-case;
	}
	.hoverable:hover .megamenu-link a:hover {
		@apply text-black dark:text-white;
	}
	.hoverable .megamenu ul {
		@apply px-4 pt-4 sm:w-1/2 lg:w-1/4;
	}
	.hoverable .megamenu-header {
		@apply mb-4 flex items-center text-sm font-normal uppercase text-slate-50;
	}
	.hoverable .megamenu-description {
		@apply mb-8 text-sm text-slate-300;
	}

	.hoverable > a:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 8px;
		position: relative;
		top: -3px;
		transition: transform 1s;
	}

	.animate {
		animation-duration: 2s;
		animation-name: animate-fade;
		animation-delay: 2s;
		animation-fill-mode: backwards;
	}

	@keyframes animate-fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.hvr-shrink {
		-webkit-transition-duration: .5s;
		transition-duration: .5s;
	}
</style>
