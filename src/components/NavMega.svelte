<script>
	import Logo from './Logo.svelte';
	import { SITE_URL, REPO_URL, RSS_URL } from '$lib/siteConfig';
	import NavLink from './NavLink.svelte';

	let yScreen;
	$: yScreen = yScreen;
</script>

<svelte:window bind:scrollY={yScreen} />
<nav class="bg-white dark:bg-black top-0 sticky">
	<div class="flex flex-wrap justify-between items-center mx-auto">
		<span class="hidden md:flex md:order-1 items-center">
			<Logo text={true} size="small" />
		</span>
		<div
			class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
			id="mobile-menu-2"
		>
			<ul class="flex">
				<!--Regular Link-->
				<li class="hoverable">
					<a href="/" class="relative block p-6 px-2 lg:px-6 lg:pt-6 lg:pb-5">About</a>
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
					<a href="/company-insight" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base"
						>Company Insight</a
					>
				</li>
				<li>
					<a href="/sustainability" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base"
						>Sustainability</a
					>
				</li>
				<li>
					<a href="/press-release" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base"
						>Press Release</a
					>
				</li>
				<li>
					<a href="/news-event" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">News</a
					>
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
		@apply text-black dark:text-white text-sm font-light uppercase;

		/*hover*/
		/* @apply border-4 border-white hover:border-black dark:border-black dark:hover:border-white; */
	}
	nav a:hover {
		@apply text-white dark:text-black bg-black dark:bg-white;
	}

	/* Main Menu > link megamenu */
	.hoverable {
		position: static;
	}
	.hoverable a {
		@apply text-black dark:text-white;
		/* @apply border-4 border-white hover:border-4 hover:border-black dark:border-black dark:hover:border-white dark:hover:border-b-black;		 */
	}
	.hoverable:hover a {
		@apply text-white dark:text-black bg-black dark:bg-white;
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
		@apply w-full left-0 -translate-x-4 pt-2 pb-6 pl-4;
		@apply border-t-2 border-b-2 border-gray-400;
		background-image: '/assets/texture-carbon.png';
		background-repeat: repeat;
		transition: visibility 0.5s, opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
			transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), height 300ms ease, width 300ms ease,
			border-width 0.6s linear;
	}
	.hoverable:hover > .megamenu {
		visibility: visible;
		opacity: 1;
		background: rgb(21, 21, 21);
		background: -moz-linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		background: linear-gradient(0deg, rgba(21, 21, 21, 1) 0%, rgba(57, 57, 57, 1) 100%);
		@apply translate-x-0;
		@apply dark:border-t-2 dark:border-b-2 dark:border-gray-400;
	}
	.hoverable:hover .megamenu-link a {
		/* background-color: #464647; */
		color: #FDD017;
		@apply bg-transparent font-normal normal-case;
	}
	.hoverable:hover .megamenu-link a:hover {
		@apply text-black dark:text-white;
	}
	.hoverable .megamenu ul {
		@apply sm:w-1/2 lg:w-1/4 pt-4 px-4;
	}
	.hoverable .megamenu-header {
		@apply flex items-center uppercase font-normal text-base text-slate-50 mb-4;
	}
	.hoverable .megamenu-description {
		@apply text-slate-300 text-sm mb-8;
	}

	.hoverable > a:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 8px;
		position: relative;
		top: -3px;
		transition: transform 1s;
	}

	/* #toggle Class Styles
	–––––––––––––––––––––––––––––––––––––––––––––––––– */
	/* 
	.toggleable > label:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

	.toggle-input {
		display: none;
	}
	.toggle-input:not(checked) ~ .mega-menu {
		display: none;
	}

	.toggle-input:checked ~ .mega-menu {
		display: block;
	}

	.toggle-input:checked + label {
		color: white;
		background: #2c5282;
	}

	.toggle-input:checked ~ label:after {
		content: '\25B2';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	} */
</style>
