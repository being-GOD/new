<script>
    import Menu from "../../menu.svelte";
    import Footer from "../../footer.svelte";
    let isOpen = true;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
    export let data;

    const date = new Date();
</script>

<Menu {data} />
<hr />
<section class=" py-8">
    <div class=" container m-auto px-8">
        <div class="flex justify-between">
            <span>
                <button
                    class="flex relative rounded-md px-3 py-2 text-5xl font-bold text-green-700"
                    id="menu-button"
                    on:click={toggleDropdown}
                >
                    LAP
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
                        class="ml-1 absolute z-5 mt-1 w-56 origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                    >
                        <div class="py-1 px-5" role="none">
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
        </div>
        <!---second process---------------------->
        <div class=" flex items-center justify-center py-10">
            <div class=" text-center lg:w-1/2 w-full bg-slate-100 shadow  py-8 px-6">
                <p class="text-4xl font-bold py-2">Rate as low as 9%APR*</p>
                <p>
                    HELOC was built for customers with immediate cash needs in
                    mind. Rinn.in’s LAP could work for you if you:
                </p>
                <ul class=" text-left py-6 xl:px-32 lg:px-24 px-6">
                    <!-----------first list------------------->
                    <li class=" flex gap-2 py-4">
                        <svg
                           
                            
                            viewBox="0 0 32 32"
                            fill="none"
                            class="   w-8"
                            >
                                <path
                                    
                                    d="M16,0C7.163,0,0,7.163,0,16c0,8.837,7.163,16,16,16c8.836,0,16-7.164,16-16C32,7.163,24.836,0,16,0z M16,30   C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14C30,23.732,23.732,30,16,30z"
                                    fill="#121313"
                                /><path
                                    d="M23.3,10.393L13.012,20.589l-4.281-4.196c-0.394-0.391-1.034-0.391-1.428,0   c-0.395,0.391-0.395,1.024,0,1.414l4.999,4.899c0.41,0.361,1.023,0.401,1.428,0l10.999-10.899c0.394-0.39,0.394-1.024,0-1.414   C24.334,10.003,23.695,10.003,23.3,10.393z"
                                    fill="#121313"
                                />
                        </svg>
                        <span>
                        Own a primary, secondary or investment home

                        </span>
                    </li>
                    <!-------second list----------------------->
                    <li class=" flex py-4">
                        <svg
                            
                            viewBox="0 0 23 23"
                            fill="none"
                            class=" w-6 mr-2"
                            ><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            /><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M8 7h3m5 0h-5m5 3h-2m-6.003 0H14m-3-3c1 0 3 .6 3 3m-1 7-5.003-4H11c1 0 3-.6 3-3"
                            />
                        </svg>
                        Need ₹50K - ₹500K in cash
                    </li>
                    <!---------third list----------------------->
                    <li class="flex py-4 ">
                        <svg
                            class=" mr-2 lg:w-8 xl:w-8 w-9"
                            viewBox="0 0 24 24"
                            fill="none"
                            
                        >
                            <path
                                d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                stroke="#000000"
                                stroke-width="1"
                            />
                            <path
                                d="M15 9L9 15"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16 14.5C16 15.3284 15.3284 16 14.5 16C13.6716 16 13 15.3284 13 14.5C13 13.6716 13.6716 13 14.5 13C15.3284 13 16 13.6716 16 14.5Z"
                                fill="#000000"
                            />
                            <path
                                d="M11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5Z"
                                fill="#000000"
                            />
                        </svg>
                        Draw minimum 75% of amount upfront**
                    </li>
                </ul>
                <button
                    class=" bg-green-700 hover:bg-green-900 rounded-lg py-4 px-7 text-white font-bold"
                    >Apply Now</button
                >
            </div>
        </div>

        <!---------frame-------------------------------->
        <div class="grid lg:grid-cols-2">
            <div class="  px-12">
                <iframe
                    class="w-full lg:h-96 h-60"
                    title=""
                    src="https://www.youtube.com/embed/FToLUShZQ9I?si=GVnop8Q2-G-Qb0NV"
                    >hii</iframe
                >
            </div>
            <div class="  px-12 mt-4 lg:mt-0">
                <iframe
                    class="w-full lg:h-96 h-60"
                    title=""
                    src="https://www.youtube.com/embed/FToLUShZQ9I?si=GVnop8Q2-G-Qb0NV"
                    >hii</iframe
                >
            </div>
        </div>
        <div class=" p-14 text-xs ">
            <ul class="list-disc">
                <li>
                    Rates can change several times a day, so we make sure you
                    have the latest. We updated them at <span class="font-bold">
                        {date}
                    </span>. Interest rates and APRs are for informational
                    purposes and do not include all applicable fees. Your actual
                    rates, payments, and costs may differ.
                </li>
                <li>
                    Rates and fees are as of time displayed above and are
                    subject to change without notice.
                </li>
                <li>
                    The one-time costs shown include points/credits and
                    third-party fees. An escrow deposit, pre-paid interest, and
                    other charges may be required depending on your situation.
                </li>
                <li>
                    We don’t yet have your complete financial picture. Your
                    actual rate, payment and costs could be higher. Get an
                    official Loan Estimate before choosing a loan.
                </li>
                <li>
                    Loan approval is subject to underwriter review: not everyone
                    who applies will be approved.
                </li>
                <li>
                    We also assume: closing costs are paid out of pocket; your
                    debt-to-income ratio is below 35%; you are purchasing or
                    refinancing a single-family home that is your primary
                    residence; you are making a down payment of 20%; and your
                    credit score is 760 or higher.
                </li>
                <li>
                    Refinancing may cause your finance charges to be higher over
                    the life of the loan.
                </li>
            </ul>
        </div>
    </div>
</section>
<Footer />
<style>
    .shadow{
        box-shadow:4px 5px 12px   rgb(145, 255, 145);
        border-radius: 2%;
    }
</style>
