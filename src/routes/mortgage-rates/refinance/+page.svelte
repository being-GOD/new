<script >
    import Menu from '../../menu.svelte'
    import Footer from '../../footer.svelte'
    let isOpen = true;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
    export let data;

    const date = new Date();
    let pin_code ="your location";
    fetch("https://ipapi.co/json/")
    .then((Response)=>Response.json())
    .then((data)=>{
        pin_code=data.postal;
    })
</script>
<Menu data/>
<hr>
<section class="py-8">
    <div class=" container m-auto px-8">
        <div class="flex justify-between">
            <span>
                <button
                class="flex relative rounded-md px-3 py-2 text-5xl font-bold text-green-700  "
                id="menu-button"
                on:click={toggleDropdown}
            >
                Refinance
                    <svg
                        class=" h-5 mt-3 w-5 text-green-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                {#if !isOpen}
                <div
                    class="ml-1 absolute  z-5 mt-1 w-56 origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <div class="py-1 px-5 " role="none">
                        <a
                            href="/mortgage-rates/purchase"
                            class="text-gray-700 block px-4 py-2 text-lg"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0">Purchase</a
                        >
                        <a
                            href="/mortgage-rates/refinance"
                            class="text-gray-700 block px-4 py-2 text-lg"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-1">Refinance</a
                        >
                        <a
                            href="/mortgage-rates/lap"
                            class="text-gray-700 block px-4 py-2 text-lg"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-2">LAP</a
                        >
                    </div>
                </div>
            {/if}
            
            </span>    
            <p
                class=" text-right text-2xl font-medium pr-8 lg:mt-8 mt-2 hidden lg:block "
                id="menu-button"
            >
                Mortgage rates today for <span class=" text-green-700 font-bold underline" > {pin_code}</span>

             

        </div>
        
        <div class="py-8">
            <p class=" text-5xl font-normal px-2 text-green-700">No commissions.</p>
            <p class=" text-5xl font-normal px-2 text-blue-700 py-6">Fast pre-approval, with no hard credit pull.</p>

        </div>
        <div class="">
            <p class=" ">
                <small class="">
                    The below rates are estimated rates current as of: <span class="font-bold"> {date} </span>
                </small>
            </p>
        </div>
        <div class="grid justify-items-center py-14">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <p class="font-semibold">
                Looks like we couldn’t find any loans that matched.
            </p>
            <p>Try making some adjustments to broaden your options.</p>
        </div>
        <div class="inline-flex  my-5 ">
            <p class="text-2xl font-normal">Have another rate?</p>
            <a href="/start/home-loan" class="font-normal text-2xl text-green-600"
                >Let us match it →</a
            >
        </div>
        <!---------frame-------------------------------->
        <div class="grid lg:grid-cols-2 ">
            <div class="  px-12">
                
                <iframe class="w-full lg:h-96 h-60" title="" src="https://www.youtube.com/embed/FToLUShZQ9I?si=GVnop8Q2-G-Qb0NV">hii</iframe>
            </div>
            <div class="  px-12 mt-4 lg:mt-0">
                <iframe class="w-full lg:h-96  h-60" title="" src="https://www.youtube.com/embed/FToLUShZQ9I?si=GVnop8Q2-G-Qb0NV">hii</iframe>
            </div>

        </div>
        <div class=" p-10 text-xs">
            <ul class="list-disc ">
                <li>
                    Rates can change several times a day, so we make sure you have
                    the latest. We updated them at <span class="font-bold"> {date} </span>. Interest
                    rates and APRs are for informational purposes and do not include
                    all applicable fees. Your actual rates, payments, and costs may
                    differ.
                </li>
                <li>
                    Rates and fees are as of time displayed above and are subject to
                    change without notice.
                </li>
                <li>
                    The one-time costs shown include points/credits and third-party
                    fees. An escrow deposit, pre-paid interest, and other charges
                    may be required depending on your situation.
                </li>
                <li>
                    We don’t yet have your complete financial picture. Your actual
                    rate, payment and costs could be higher. Get an official Loan
                    Estimate before choosing a loan.
                </li>
                <li>
                    Loan approval is subject to underwriter review: not everyone who
                    applies will be approved.
                </li>
                <li>
                    We also assume: closing costs are paid out of pocket; your
                    debt-to-income ratio is below 35%; you are purchasing or
                    refinancing a single-family home that is your primary residence;
                    you are making a down payment of 20%; and your credit score is
                    760 or higher.
                </li>
                <li>
                    Refinancing may cause your finance charges to be higher over the
                    life of the loan.
                </li>
            </ul>
        </div>
        
        

    </div>
    
</section>




<Footer />