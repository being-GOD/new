<script>
	import "../app.css";
	import Menu from "./menu.svelte";
	import Footer from "./footer.svelte";
	import { home, balance } from "./start/store";
	import { goto } from "$app/navigation";
	
	
  
	export let data;
    //###########################
	function startButton(values){
		document.cookie = "Requirment=" + values;
        home.set(values);
		if (values == "Buy A Home") {
            goto("../start/home-loan");
			balance.set(false)
           
        } else if (values == "Refinance") {
            goto("../start/Property-Location");
			balance.set(true)
        } else if (values == "LAP") {
            balance.set(false);
            goto("../start/Property-Location");
        }
	}
	
	
</script>

<Menu data={data}/>


<!-- <Carousel
  autoplay
  autoplayDuration={2000}
>
  {#each colors as { color, text } (color)}
    <Color {color} {text} />
  {/each}
</Carousel> -->

  
  

<!---bjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn-->
<div>
	<section class=" container m-auto px-10 ">
		<div
			class=" grid max-w-screen-xl  py-8  lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12"
		>
			<div
				class="mr-10  order-1 lg:col-span-7 gap"
			>
				<p class="bg-yellow-300 p-2 px-3 inline-block rounded-2xl">
					Introducing
				</p>
				<h1
					class="max-w-2xl text-green-900 opacity-90 mb-1 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl"
				>
					One Day Mortgage
				</h1>
				<h1
					class="max-w-2xl text-green-700 mb-4 text-3xl tracking-tight leading-none md:text-4xl xl:text-5xl"
				>
					exclusively at rinn.in
				</h1>
				<p
					class="max-w-md mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl"
				>
					Instead of waiting weeks, now you can lock a rate, share some
					financial info, and get a loan Commitment Letter within the next
					24 hours.
				</p>
				<sup class="text-xsm antialiased text-black-100 opacity-50 mb-8"
					>Customers must qualify. Terms apply.</sup
				>
				
				<button
					on:click={()=>startButton("Buy A Home")}
					
					class=" mb-4 block  lg:w-3/5 w-full items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 "
				>
					Buy A Home
				</button>
	
				<div class="grid grid-cols-2 lg:w-3/5">
					
					<button on:click={()=>startButton("Refinance")}
						class=" items-center justify-center py-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 "
					>
						Balance transfer
					</button>
					<button on:click={()=>startButton("LAP")}
						class="mx-1 items-center justify-center py-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 "
					>
						LAP
					</button>
				</div>
			</div>
			<div
				class="w-4/5 lg:order-1   lg:mt-0 lg:col-span-5 lg:flex m-8 lg:m-2"
			>
				<img src="/img/one-day-mortgage.svg" class="mx-auto" alt="mockup" />
			</div>
		</div>
	</section>
	
	
</div>
<!-- Devider section for Get Started  -->
<section>
	<div class="bg-green-950 text-white py-6 text-center rounded-tl-3xl rounded-br-3xl m-1">
		<a href="/start" class="border p-3 rounded-md hover:border-2">Get Started</a>
	</div>
</section>


<!-- Product Details section -->

<!----------using grid property;;,------------------------------------------------>

<section class="py-10">
	<div class=" container m-auto px-10">
		<div class=" grid lg:grid-cols-3  py-4">
			
			<div class=" lg:border-r-2 border-black mr-1 px-2 md:px-8">
				<h3 class="text-2xl font-bold ">Real Estate Agents</h3>
				<p>Partner with a local expert and save big.</p>
				<ul role="list" class="space-y-5 my-7">
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>₹2k off rinn.in Mortgage closing costs 
						</span>
					</li>
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Selling? List your home for 0%</span
						>
					</li>
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Non-commissioned Agents</span
						>
					</li>
					<li class="flex space-x-3 pt-4">
						<span
							class="text-base font-normal leading-tight text-gray-500"
							><img
								src="/img/compimg.png"
								alt=""
								class="rounded-lg mt-10"
							/></span
						>
					</li>
				</ul>
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
				>Learn More</button
		>
			</div>
			<div class=" lg:border-r-2 border-black px-2 md:px-8 mt-3 lg:mt-0 ">
				<h3 class="text-2xl font-bold">Digital home loans</h3>
				<p>Low rates. Save thousands. Close fast.</p>
				<ul role="list" class="space-y-5 my-7">
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Apply 100% online, on your schedule.
						</span>
					</li>
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500 "
							>No commissions</span
						>
					</li>
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Close 17 days faster than industry avg.
						</span>
					</li>
					<li class="flex space-x-3">
						<span
							class="text-base font-normal leading-tight text-gray-500"
							><img
								src="/img/house-isolated-field.jpg"
								alt=""
								class="rounded-lg mt-10"
							/></span
						>
					</li>
				</ul>
				<a href="/start"><button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
					>Get pre-approved</button
				></a>
			</div>
			<div class="  pl-2 md:pl-8 mt-3 lg:mt-0">
				<h3 class="text-2xl font-bold">List your home for 0%</h3>
				<p >List your home for 0% Traditional agents charge 3% listing fees - that‘s ₹15,000 on a ₹500,000 house!¹</p>
			    <ul role="list" class="space-y-6 my-5">
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Buy before you sell</span
						>
					</li>
					<li class="flex space-x-3">
					
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500"
							>Stress-free homebuying</span
						>
					</li>
					<li class="flex space-x-3">
						
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><title>Check icon</title><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/></svg
						>
						<span
							class="text-base font-normal leading-tight text-gray-500 "
							>Partner with expert local agents</span
						>
					</li>
					<li class="flex space-x-3">
						<span
							class="text-base font-normal leading-tight text-gray-500 px-3 "
							><img
								src="/img/formalboy.jpg"
								alt=""
								class="rounded-lg my-2"
							/></span
						>
					</li>
				</ul>
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
					>Learn More</button
				>
			</div>
			

		</div>
	</div>

</section>
<!----------------------------------------------bbbshjsjbsuhcygbjvyuguhnhghumkn---------------------->
<!-- Today’s mortgage rates section start -->
<section>
	<div class=" container m-auto px-14 py-8   ">
		<div class=" block justify-around gap-0 sm:block sm:justify-center md:flex">
			<div >
				<h3 class=" text-2xl sm:text-4xl md:text-6xl font-bold my-10">Today’s <br /> mortgage rates</h3>
				<p class="mb-10 w-full md:w-1/2 text-gray-700">
					Tap that green button to see your personalized mortgage rates and
					custom mortgage recommendation.
				</p>
				<button
					type="button"
					class=" text-white bg-green-700  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
					><a href="/mortgage-rates/purchase">See Your Rates</a></button
				>
			</div>
			<div class="mt-5 p-5 md:w-2/3 border-2 border-gray-400 rounded-2xl">
				<h3 class="m-auto p-1 md:p-5 py-3 text-2xl opacity-60 font-semibold">
					Hey, we currently don’t have service in your area. We will notify
					you when we are there.
				</h3>
				<input
					type="text"
					placeholder="Email"
					class=" w-4/5 block px-10 py-5 m-auto border-2 bg-transparent border-green-600  rounded-lg "
				/>
				<button
					type="submit"
					class="block m-auto border w-4/5 py-5 mt-3 bg-green-800 text-white rounded-xl"
					>Add Email</button
				>
			</div>
		</div>
	</div>
</section>


<!-- Container for demo purpose -->

<!-- Section: Design Block -->
<section
	class=" text-gray-800 text-center lg:text-left background-radial-gradient "
>
	<div
		class=" opacity-90 relative w-full overflow-hidden bg-no-repeat bg-cover"
		style="
            background-position: 50%;
            background-image: url('/img/customers.jpeg');
            height: 450px;
          "
	>
		<div
			class="absolute   top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
			style="background-color: rgba(0, 0, 0, 0.75)"
		>
			<div class=" text-white py-20 text-center">
				<p class=" md:text-5xl text-4xl font-bold px-6">"We needed to make an offer the next day. rinn.in <br>
					made it happen.&nbsp;"
				</p>
				<p class="text-lg font-thin lg:py-16 py-4">
					Shaina & Tessa | rinn.in Mortgage customers
				</p>
			</div>
		</div>
	</div>  
</section>


<div
	class=" container m-auto px-14 block justify-around gap-0 mt-0 sm:block sm:justify-center"
>
	<div class="bg-green-900 md:flex mt-5  mb-5 p-5 m-0 rounded-2xl">
		<div class="">
			<p class=" md:text-5xl text-3xl font-bold text-white my-8">
				The tools you need to make that next step
			</p>
			<p class="mb-8 text-white w-2/3 text-justify">
				How much home can I afford? Should I pay points to get a lower
				rate? Should I refinance? Tap to find out.
			</p>
			<button
				type="button"
				class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
				><a href="/mortgage-rates/purchase">See Your Rates</a></button
			>
		</div>
		<div class=" rounded-2xl">
			<img src="/img/mortgage-calculator.jpeg" alt="" srcset="" />
			<small style="font-size: 10px;color:white;"
				>Image is for example purposes only. Your actual rates, monthly
				payment, and loan amount will vary.</small
			>
		</div>
	</div>
</div>
<!--------------------------------------start1111111111111------------------------->
<!-- Container for demo purpose -->
<section>
	<div class=" container m-auto px-8 py-8">
		<div class=" grid lg:grid-cols-3  py-4">
			
			<div class=" lg:border-r-2 border-black mr-1 px-6">
				<h3 class="text-3xl font-bold">Look Before You Lock:
					Why Rates Matter</h3>
				<p class=" pt-8">Almost half of all homebuyers don’t compare mortgage lenders before locking a rate. But small rate differences can add up to big savings.</p>
				<ul class="space-y-5 my-7">
					<li class="flex space-x-3">
						<span
							class="text-base font-normal leading-tight text-gray-500"
							><img
								src="/img/look-before-you-lock.jpeg"
								alt=""
								class="rounded-lg mt-10"
							/></span
						>
					</li>
				</ul>
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
				>Learn More</button
		>
			</div>
			<div class=" lg:border-r-2 border-black px-6 mt-3 lg:mt-0 ">
				<h3 class="text-3xl font-bold">What’s a Good DTI for a Home Loan?</h3>
				<p class=" pt-8">When you apply for a mortgage, the top three things lenders look at are your income, your credit score, and your debt-to-income ratio, or DTI.

				</p>
				<ul class="space-y-5 my-7">
					<li class="flex space-x-3">
						<span
							class="text-base font-normal leading-tight text-gray-500"
							><img
								src="/img/whats-a-good-dti-for-home-loan.jpeg"
								alt=""
								class="rounded-lg mt-10"
							/></span
						>
					</li>
				</ul>
				
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
					>Get pre-approved</button
				>
			</div>
			<div class=" px-6 mt-3 lg:mt-0">
				<h3 class="text-3xl font-bold">Understanding Your Down Payment</h3>
				<p class="pt-8">Housing prices are rising across the country, and low down payment mortgages make it easier for homebuyers to enter the housing market.

				</p>
				<ul class="space-y-5 my-7">
					<li class="flex space-x-3">
						<span
							class="text-base font-normal leading-tight text-gray-500"
							><img
								src="/img/understanding-your-down-payment.jpeg"
								alt=""
								class="rounded-lg mt-10"
							/></span
						>
					</li>
				</ul>
			    
				<button
					type="button"
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
					>Learn More</button
				>
			</div>
			

		</div>
	</div>

</section>
<!-----------------------------------------------nnnnnnnnnnnnnjjijjijjjijijij-->

<section>
	<div class=" container m-auto  py-12 sm:px-14  lg:py-16">
	  
  
	  <div class="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 m-3 md:m-0 md:gap-8">
		<blockquote class="rounded-lg bg-gray-100  border-r-2 border-b-2 border-green-700 shadow-green-800 py-4  px-6 shadow-lg sm:p-8">
		  <div class="flex items-center gap-4">
			<img
			  alt="Man"
			  src="/img/better-customers-mateo-n-alejendra.jpeg"
			  class="h-14 w-14 rounded-full object-cover"
			/>
  
			<div>
			  <div class="flex justify-center gap-0.5 text-green-500">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
			  </div>
  
			</div>
		  </div>
  
		  <p class="mt-4 text-gray-700 text-xl">
			We needed to make an offer the next day. made it happen.
		  </p><br>
		  <p>En route to a hike, Shaina and Tessa unexpectedly stumbled upon their dream home, not at all ready to make an offer.
<br><br>
			Just 17 hours later, they applied for a loan online with Mortgage, put in a bid, and the home was theirs.</p>
		</blockquote>
  
		<blockquote class="rounded-lg bg-gray-100 shadow-green-800 border-r-2 border-b-2 shadow-lg border-green-700 p-6 sm:p-8">
		  <div class="flex items-center gap-4">
			<img
			  alt="Man"
			  src="/img/progressImg.jpg"
			  class="h-14 w-14 rounded-full object-cover"
			/>
  
			<div>
			  <div class="flex justify-center gap-0.5 text-green-500">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
			  </div>
  
			</div>
		  </div>
  
		  <p class="mt-4 text-gray-700 text-xl">
			We did the math on the next 30 years. It was cheaper to own.
		  </p><br>
		  <p>When Mateo and Alejandra first saw their neighborhood, it was a dirt field.
<br><br>
			One year later, their newly constructed home was finished, and  Mortgage beat every single one of the incentives offered by the builder’s lender</p>
		</blockquote>
  
		<blockquote class="rounded-lg bg-gray-100 border-r-2 border-b-2 border-green-700 p-6 shadow-green-800 shadow-lg sm:p-8">
		  <div class="flex items-center gap-4">
			<img
			  alt="Man"
			  src="/img/understanding-your-down-payment.jpeg"
			  class="h-14 w-14 rounded-full object-cover"
			/>
  
			<div>
			  <div class="flex justify-center gap-0.5 text-green-500">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  viewBox="0 0 20 20"
				  fill="currentColor"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  />
				</svg>
			  </div>
  
			</div>
		  </div>
  
		  <p class="mt-4 text-gray-700">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
			rerum incidunt, a consequuntur recusandae ab saepe illo est quia
			obcaecati neque quibusdam eius accusamus error officiis atque
			voluptates magnam!
		  </p>
		</blockquote>
	  </div>
	</div>
  </section>
  
<Footer />
