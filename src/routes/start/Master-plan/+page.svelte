<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 35.75;

    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Is it part of Master plan of City =" + value;
        if (event.currentTarget.value == "Property selected is : Authorised") {
            goto("../start/Property-Type");
        } else if (
            event.currentTarget.value == "Property selected is : UnAuthorised"
        ) {
            goto("../start/Property-Type");
        } else if (
            event.currentTarget.value == "Property selected is : Don't Know"
        ) {
            goto("../start/Property-Type");
        }
    }
</script>

<ProgressBar {progress} />
<div class="flex items-center justify-center mb-20">
    <form class="w-full max-w-screen-sm" id="form" method="Post">
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Property selected is : Authorised"
            />
            <label
                class="flex border border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class=" my-auto flex"
                    ><svg
                        height="36px"
                        style="margin-left:16px;margin-right:12px"
                        width="36px"
                        fill="#0b751c"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        stroke="#0b751c"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                            />
                        </g></svg
                    >
                </span>
                <p class="text-lg mx-4 my-auto">Authorised</p></label
            >
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Property selected is : UnAuthorised"
            />
            <label
                class="flex border border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class=" my-auto flex"
                    ><svg
                        fill="#0b751c"
                        height="36px"
                        style="margin-left:16px;margin-right:12px"
                        width="36px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512.415 512.415"
                        xml:space="preserve"
                        stroke="#0b751c"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M467.914,445.093l-32.021-8l-1.344-5.355c8.32-9.173,14.208-20.885,16.661-33.024c5.696-2.944,9.835-8.533,10.667-15.253 l2.325-18.56c0.704-5.632-1.024-11.307-4.757-15.552c-1.152-1.323-2.475-2.475-3.904-3.435l0.555-11.307l1.963-1.963 c5.483-5.845,12.928-18.325,1.152-36.331c-5.589-8.576-17.109-18.773-40.171-18.773c-6.784,0-22.123,0-37.013,9.344 c-43.904,1.536-49.067,25.195-49.067,43.072c0,3.52,0.619,10.112,1.237,15.616c-1.579,1.003-3.029,2.219-4.288,3.648 c-3.776,4.288-5.547,9.984-4.843,15.68l2.325,18.56c0.875,6.955,5.291,12.715,11.797,15.552 c2.411,11.627,7.979,22.891,15.765,31.829l-1.557,6.272l-32.021,8c-25.963,6.464-44.075,29.675-44.075,56.427 c0,5.888,4.779,10.667,10.667,10.667H501.3c5.888,0,10.667-4.8,10.667-10.688C511.967,474.789,493.855,451.578,467.914,445.093z"
                                        />
                                        <path
                                            d="M272.074,426.874H181.3c-5.888,0-10.667-4.779-10.667-10.667V277.541c0-5.888,4.779-10.667,10.667-10.667h187.84 c1.643-0.235,2.965-0.683,4.693-0.853c1.301-0.128,2.56-0.469,3.733-1.045c17.835-8.768,35.008-8.768,41.472-8.768 c4.843,0,9.664,0.448,15.232,1.429c1.963,0.384,4.331-0.299,6.464-1.429h60.8c6.229-0.192,10.901-4.693,10.88-10.667 c0-3.861-2.048-7.232-5.12-9.109l-59.307-59.307V10.874c0-5.888-4.779-10.667-10.667-10.667h-85.333 c-5.888,0-10.667,4.779-10.667,10.667v59.584l-59.584-59.584c-13.717-13.739-37.696-13.76-51.477,0L3.124,238.01 c-3.051,3.051-3.968,7.637-2.304,11.627c1.6,3.968,5.504,6.571,9.813,6.571h53.333v245.333c0,5.888,4.779,10.667,10.667,10.667 H245.3c5.739,0,10.688-4.523,10.667-10.283c-0.107-21.888,8.597-41.963,23.253-56.533 C286.132,438.522,281.823,426.874,272.074,426.874z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g></svg
                    ></span
                >
                <p class="text-lg flex mx-4 my-auto">UnAuthorised</p>
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Property selected is : Don't Know"
            />
            <label
                class="flex border border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <svg
                
                
                height="36px"
                style="margin-left:16px;margin-right:12px"
                width="36px"
                    viewBox="0 0 24 24"
                    
                    xmlns="http://www.w3.org/2000/svg"
                    ><g id="SVGRepo_bgCarrier" stroke-width="1" /><g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    /><g id="SVGRepo_iconCarrier">
                        <path
                            d="M13.06 12L17.48 7.57996C17.5537 7.5113 17.6128 7.4285 17.6538 7.3365C17.6948 7.2445 17.7168 7.14518 17.7186 7.04448C17.7204 6.94378 17.7018 6.84375 17.6641 6.75036C17.6264 6.65697 17.5703 6.57214 17.499 6.50092C17.4278 6.4297 17.343 6.37356 17.2496 6.33584C17.1562 6.29811 17.0562 6.27959 16.9555 6.28137C16.8548 6.28314 16.7555 6.30519 16.6635 6.34618C16.5715 6.38717 16.4887 6.44627 16.42 6.51996L12 10.94L7.58 6.51996C7.43782 6.38748 7.24978 6.31535 7.05548 6.31878C6.86118 6.32221 6.67579 6.40092 6.53838 6.53834C6.40096 6.67575 6.32225 6.86113 6.31882 7.05544C6.3154 7.24974 6.38752 7.43778 6.52 7.57996L10.94 12L6.52 16.42C6.37955 16.5606 6.30066 16.7512 6.30066 16.95C6.30066 17.1487 6.37955 17.3393 6.52 17.48C6.66062 17.6204 6.85125 17.6993 7.05 17.6993C7.24875 17.6993 7.43937 17.6204 7.58 17.48L12 13.06L16.42 17.48C16.5606 17.6204 16.7512 17.6993 16.95 17.6993C17.1488 17.6993 17.3394 17.6204 17.48 17.48C17.6204 17.3393 17.6993 17.1487 17.6993 16.95C17.6993 16.7512 17.6204 16.5606 17.48 16.42L13.06 12Z"
                            fill="#0b751c"
                        />
                    </g></svg
                >
                <p class="text-lg flex mx-4 my-auto">Don't Know</p>
            </label>
        </div>
    </form>
</div>

<style>
    label {
        padding: 1rem 1rem;
        text-wrap: pretty;
        /* height: 100px; */
        overflow: auto;
    }
    label:hover {
        box-shadow: 0 0 0 4px  #017a4e inset;

        color: #017848;
        
    }
    label:active {
        background-color: #017a4e;
        color: white;
    }
    label:active svg {
        fill: white;
        stroke: white;
    }
    label:active svg path {
        fill: white;
        stroke: white;
    }
</style>
