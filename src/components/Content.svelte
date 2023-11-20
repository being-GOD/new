<script>
	export let title;
	export let data;
	console.log(data);
	let isCollapsed = true;

function toggleCollapse() {
  isCollapsed = !isCollapsed;
}
</script>
<!-- <a href="/images/1.jpg" download> here</a> -->
<div class="mt-4">
	<div class="mb-5 text-2xl font-medium text-gray-700">{title}</div>
	<div class="flex gap-8">
		<div
			class="flex items-center gap-4 rounded-md border bg-green-800 px-8 py-4 text-white shadow"
		>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">{data.length}</div>
				<div class="text-sm">All User</div>
			</div>
		</div>
		<div
			class="flex items-center gap-4 rounded-md border bg-green-800 px-8 py-4 text-white shadow"
		>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">{data.length}</div>
				<div class="text-sm">Last 7 Day</div>
			</div>
		</div>
		<div
			class="flex items-center gap-4 rounded-md border bg-green-800 px-8 py-4 text-white shadow"
		>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-10 w-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">{data.length}</div>
				<div class="text-sm">Today Registered</div>
			</div>
		</div>
	</div>
	<div class="container mt-10 border">
		<div class="py-8">
			<div class="py-4">
				<div class="max-w-full overflow-x-auto rounded-lg">
					<table class="w-full leading-normal text-black">
						<thead>
							<tr>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									User
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									Enquiry Type
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
								User Contact No.
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									status
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								/>
							</tr>
						</thead>
						<tbody class="text-black">
							{#each data as item}
								<tr>
									<td
										class="border-b border-gray-200 p-5 text-sm"
									>
										<div class="flex items-center">
											<!-- <div class="shrink-0">
											<a href="#" class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</a>
										</div> -->
											<div class="ml-3">
												<p class="whitespace-nowrap">
													{item.usernName}
												</p>
											</div>
										</div>
									</td>
									<td
										class="border-b border-gray-200 p-5 text-sm"
									>
										<p class="whitespace-nowrap">
											{item.home}
										</p>
									</td>
									<td
										class="border-b border-gray-200 p-5 text-sm"
									>
										<p class="whitespace-nowrap">{item.userNo}</p>
									</td>
									<td
										class="border-b border-gray-200 p-5 text-sm"
									>
										<span
											class="relative inline-block px-3 py-1 font-semibold leading-tight"
										>
											<span
												aria-hidden="true"
												class="absolute inset-0 rounded-full bg-green-200 opacity-50"
											/>
											<span class="relative">active</span>
										</span>
									</td>
									<td
										class="border-b border-gray-200 p-5 text-sm"
									>
										<span
											class="relative inline-block px-3 py-1 font-semibold leading-tight"
										>
											<span
												aria-hidden="true"
												class="absolute inset-0 rounded-full bg-green-200 opacity-50"
											/>
											<span class="relative"><a href={item.fileUrl} target="_blank">View File</a></span>
										</span>
									</td>
								
										  <td class="border-b border-gray-200 p-5 text-sm">
											<span class="text-indigo-600 hover:text-indigo-900">
											  <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
												<h2 class="mb-0">
												  <button
													class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor:none hover:z-2 focus:z-3 focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
													type="button"
													aria-expanded={!isCollapsed}
													aria-controls="flush-collapseTwo"
													on:click={toggleCollapse}
												  >
													Shoe More
													<span
													  class="ml-auto h-5 w-5 shrink-0 rotate-[180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[data-te-collapse-collapsed]:rotate-0 group-[data-te-collapse-collapsed]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[data-te-collapse-collapsed]:fill-[#eee]"
													>
													  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
														<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
													  </svg>
													</span>
												  </button>
												</h2>
												<div
												  id="flush-collapseTwo"
												  class:visible={!isCollapsed}
												  class:hidden={isCollapsed}
												  class="border-0"
												  data-te-collapse-item
												  aria-labelledby="flush-headingTwo"
												  data-te-parent="#accordionFlushExample"
												>
												  <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
													Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
												  </div>
												</div>
											  </div>
											</span>
										  </td>
										</tr>
									  
							{/each}

							<!-- <tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Marcus coco</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Designer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">01/10/2012</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Eric marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Developer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">02/10/2018</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Julien Huger</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">User</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">23/09/2010</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Jean marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Admin</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">12/09/2020</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Marcus coco</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Designer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">01/10/2012</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Eric marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Developer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">02/10/2018</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Julien Huger</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">User</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">23/09/2010</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr> -->
						</tbody>
					</table>
					<div
						class="xs:flex-row xs:justify-between flex flex-col items-center p-5"
					>
						<div class="flex items-center">
							<button
								type="button"
								class="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
							>
								<svg
									width="9"
									fill="currentColor"
									height="8"
									class=""
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
									/>
								</svg>
							</button>
							<button
								type="button"
								class="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
							>
								1
							</button>
							<button
								type="button"
								class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								2
							</button>
							<button
								type="button"
								class="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								3
							</button>
							<button
								type="button"
								class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								4
							</button>
							<button
								type="button"
								class="w-full rounded-r-xl border-y border-r bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
							>
								<svg
									width="9"
									fill="currentColor"
									height="8"
									class=""
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container my-24 mx-auto md:px-6 xl:px-24">
	<!-- Section: Design Block -->
	<section class="mb-32">
		<h2 class="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>

		<div id="accordionFlushExample">
			<div
				class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200"
			>
				<h2 class="mb-0" id="flush-headingOne">
					<button
						class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
						type="button"
						data-te-collapse-init
						data-te-target="#flush-collapseOne"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						Anim pariatur cliche reprehenderit?
						<span
							class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</span>
					</button>
				</h2>
				<div
					id="flush-collapseOne"
					class="!visible border-0"
					data-te-collapse-item
					data-te-collapse-show
					aria-labelledby="flush-headingOne"
					data-te-parent="#accordionFlushExample"
				>
					<div
						class="py-4 px-5 text-neutral-500 dark:text-neutral-300"
					>
						Anim pariatur cliche reprehenderit, enim eiusmod high
						life accusamus terry richardson ad squid. 3 wolf moon
						officia aute, non cupidatat skateboard dolor brunch.
						Food truck quinoa nesciunt laborum eiusmod. Brunch 3
						wolf moon tempor, sunt aliqua put a bird on it squid
						single-origin coffee nulla assumenda shoreditch et.
						Nihil anim keffiyeh helvetica, craft beer labore wes
						anderson cred nesciunt sapiente ea proident. Ad vegan
						excepteur butcher vice lomo. Leggings occaecat craft
						beer farm-to-table, raw denim aesthetic synth nesciunt
						you probably haven't heard of them accusamus labore
						sustainable VHS.
					</div>
				</div>
			</div>

			<div
				class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200"
			>
				<h2 class="mb-0" id="flush-headingThree">
					<button
						class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
						type="button"
						data-te-collapse-init
						data-te-collapse-collapsed
						data-te-target="#flush-collapseThree"
						aria-expanded="false"
						aria-controls="flush-collapseThree"
					>
						Praesentium voluptatibus temporibus consequatur non
						aspernatur?
						<span
							class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</span>
					</button>
				</h2>
				<div
					id="flush-collapseThree"
					class="!visible hidden rounded-b-lg"
					data-te-collapse-item
					aria-labelledby="flush-headingThree"
					data-te-parent="#accordionFlushExample"
				>
					<div
						class="py-4 px-5 text-neutral-500 dark:text-neutral-300"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Velit optio vitae inventore autem fugiat rerum sed
						laborum. Natus recusandae laboriosam quos pariatur
						corrupti id dignissimos deserunt, praesentium
						voluptatibus temporibus consequatur non aspernatur
						laborum rerum nemo dolorem libero inventore provident
						exercitationem sunt totam aperiam. Facere sunt quos
						commodi obcaecati temporibus alias amet! Quam quisquam
						laboriosam quae repellendus non cum adipisci odio?
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Section: Design Block -->
</div>
