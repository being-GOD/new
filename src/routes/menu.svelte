<script>
    import "../app.css";
    import { home, balance } from "./start/store";
    import { goto } from "$app/navigation";
    export let data;

    function handleClick() {
        if (data.Requirment == "Home Loan") {
            goto("/start/home-loan");
        }
        if (data.Requirment == "Balance Transfer") {
            goto("/start/Property-Location");
        } else {
            goto("/start");
        }
    }
    let isOpen = true;

    function toggleMenu() {
        isOpen = !isOpen;
    }
    function startButton(values) {
        document.cookie = "Requirment=" + values;
        home.set(values);
        if (values == "Buy A Home") {
            goto("../start/home-loan");
        } else if (values == "Refinance") {
            goto("../start/Property-Location");
        } else if (values == "LAP") {
            balance.set(true);
            goto("../start/Property-Location");
        }
    }
</script>
<div class="w-full bg-gray-50">
    <div
        class="container flex flex-row justify-center sm:justify-between m-auto w-11/12 p-3"
    >
        <div>
            <p>
                <strong>₹1,000 Cr.</strong> in online home loans
            </p>
        </div>
        <div class="order-1 hidden sm:block">
            <p class=" text-green-800 font-semibold">
                <a href="tel:1204994466"> (+91)1204994466</a><span
                    class="ml-2">Questions?</span
                > Give us a call.
            </p>
        </div>
    </div>
</div>

<div class="w-full md:sticky  border-b-2 top-0 z-50 bg-gradient-to-l from-cyan-50 to-orange-50  rounded-b-3xl">
    
    <header class="container m-auto">
        <nav class=" border-gray-200 py-1.5">
            <div
                class=" w-11/12 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
            >
                <a href="/" class="flex items-center">
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap"
                        >ऋण.In</span
                    >
                </a>
                <div class="flex items-center lg:order-2">
                    <a
                        href="/login"
                        class="hidden sm:block text-gray-800 hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium border-2 rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >Sign In</a
                    >

                    <a
                        href="/start"
                        class="text-black hover:text-white border-2 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        {data.visited ? "Continue" : "Get Started"}
                    </a>
                    <button
                        on:click={toggleMenu}
                        type="button"
                        class="inline-flex items-center p-2 ml-1 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            /></svg
                        >
                        <svg
                            class="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </button>
                </div>
                <div
                    class="{isOpen
                        ? 'hidden'
                        : 'block'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul
                        class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                    >
                        <li class="dropdown flex">
                            <button
                                class="btn  pt-4 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700  flex"
                                >Home Loan

                                <div class="btn-hover caret my-5 mx-3 mt-3" />
                            </button>

                            <ul
                                class="dropdown-menu mt-10 absolute hidden bg-gradient-to-l from-cyan-50 to-orange-50   z-50 w-60 text-gray-700"
                            >
                                <br />
                                <li class="hover:bg-gray-200">
                                    <button
                                        on:click={() =>
                                            startButton("Buy A Home")}
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        >Apply Now</button
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/mortgage-rates/purchase"
                                        >Purchase rates
                                    </a>
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/find-an-agent"
                                    >
                                        Find an Agent
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown flex">
                            <button
                                class="flex btn pt-4 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700"
                                >Balance transfer <div
                                    class="btn-hover caret my-5 mx-3 mt-3"
                                /></button
                            >

                            <ul
                                class="dropdown-menu mt-10 absolute hidden  bg-gradient-to-l from-cyan-50 to-orange-50  rounded-2xl z-50 py-2 w-60 text-gray-700"
                            >
                                <br />
                                <li class="hover:bg-gray-200">
                                    <button
                                        on:click={() =>
                                            startButton("Refinance")}
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        >Apply Now</button
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/mortgage-rates/refinance"
                                        >balance transfer rates
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown flex">
                            <button
                                class="flex btn pt-4 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700"
                                >LAP <div
                                    class="btn-hover caret my-5 mx-3 mt-3"
                                /></button
                            >

                            <ul
                                class="dropdown-menu mt-10 absolute hidden  bg-gradient-to-l from-cyan-50 to-orange-50  rounded-2xl z-50 py-2 w-60 text-gray-700"
                            >
                                <br />
                                <li class="hover:bg-gray-200 block">
                                    <button
                                        on:click={() => startButton("LAP")}
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        >Apply Now</button
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown flex">
                            <button
                                class="flex btn pt-4 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700 "
                                >Calculators <div
                                    class="btn-hover caret my-5 mx-3 mt-3"
                                /></button
                            >

                            <ul
                                class="dropdown-menu mt-10 absolute hidden  bg-gradient-to-l from-cyan-50 to-orange-50  rounded-2xl z-50 py-2 w-60 text-gray-700"
                            >
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/mortgage-calculator/home-loan-emi-calculator"
                                    >
                                        Loan EMI Calculator
                                    </a>
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/mortgage-calculator/home-loan-eligibility-calculator"
                                    >
                                        Loan Eligibility Calculator
                                    </a>
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal"
                                        href="/mortgage-calculator/home-loan-balance-transfer-calculator"
                                    >
                                        Loan Balance Transfer Calculator
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>

<style>
    .dropdown:hover .dropdown-menu {
        display: block;
    }
    .caret {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 8px solid rgb(1, 39, 4);
        transition: 0.3s;
    }

    .btn:hover .btn-hover {
        transform: rotate(180deg);
        border-top: 8px solid rgb(3, 228, 70);
    }
    
</style>
