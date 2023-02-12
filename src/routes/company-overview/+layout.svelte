<script>
	import { Accordion, AccordionItem } from 'svelte-accessible-accordion';
	import Content from '../../components/Content.svelte';
	import ContentHeader from '../../components/ContentHeader.svelte';
	import ContentWrap from '../../components/ContentWrap.svelte';
	import ContentSidebar from '../../components/ContentSidebar.svelte';
	import NavLink from '../../components/NavLink.svelte';
	let expanded;

	import { TreeView } from 'carbon-components-svelte';
	import { Router, Route, navigate } from 'svelte-routing';

	let activeId = '';
	let selectedIds = [];
	let children = [
		{
			id: 0,
			text: 'Company Overview',
			children: [
				{ id: 1, text: 'History' },
				{ id: 2, text: 'Vision' },
				{ id: 3, text: 'Services' },
				{ id: 4, text: 'Customers' },
				{ id: 5, text: 'Location' }
			]
		}
	];

	function handleSelect({ detail }) {
		const selectedId = detail.id;
		switch (selectedId) {
			case 0:
				navigate('/company-overview');
				break;
			case 1:
				navigate('/company-overview/history');
				break;
			case 2:
				navigate('/company-overview/vision');
				break;
			case 3:
				navigate('/company-overview/services');
				break;
			case 4:
				navigate('/company-overview/customers');
				break;
			case 5:
				navigate('/company-overview/location');
				break;
			default:
				break;
		}
	}


import Base from './+page.svelte';
import History from './history/+page.svelte';
import Vision from './vision/+page.svelte';
import Services from './services/+page.svelte';
import Customers from './customers/+page.svelte';
// import location from './services/+page.svelte';

</script>

<ContentHeader
	url="https://www.bayan.com.sg/cfind/source/thumb/images/banner/cover_w1920_h393_banner-awards.jpg"
>
	<div class="grid grid-cols-8 gap-0">
		<div class="col-start-1 col-end-4">COMPANY OVERVIEW</div>
		<div class="col-start-5 col-end-9">
			<nav class="float-right flex" aria-label="Breadcrumb">
				<ol class="inline-flex items-end space-x-1 md:space-x-3">
					<li class="inline-flex items-center">
						<a
							href="/"
							class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								aria-hidden="true"
								class="mr-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/></svg
							>
							Home
						</a>
					</li>
					<li>
						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/></svg
							>
							<a
								href="/"
								class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2"
								>Projects</a
							>
						</div>
					</li>
					<li aria-current="page">
						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/></svg
							>
							<span class="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2"
								>Flowbite</span
							>
						</div>
					</li>
				</ol>
			</nav>
		</div>
	</div>
</ContentHeader>
<ContentWrap>
	<ContentSidebar>
		<TreeView
			{children}
			bind:activeId
			bind:selectedIds
			hideLabel
			on:select={handleSelect}
			on:toggle={({ detail }) => console.log('toggle', detail)}
			on:focus={({ detail }) => console.log('focus', detail)}
		/>
	</ContentSidebar>
	<Content>
		<Router>
			<Route path="/company-overview" component={Base} />
			<Route path="/company-overview/history" component={History} />
			<Route path="/company-overview/vision" component={Vision} />
			<Route path="/company-overview/services" component={Services} />
			<Route path="/company-overview/customers" component={Customers} />
			<!-- <Route path="/company-overview/location" component={Item2} /> -->
		</Router>
	</Content>
</ContentWrap>
