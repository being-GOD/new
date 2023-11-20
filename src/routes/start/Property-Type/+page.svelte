<script>
    import { goto } from "$app/navigation";

    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 42.9;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Type of Property=" + value;
        event.currentTarget.value;
        if (event.currentTarget.value == "Row House") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Flat") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Floor") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Plot") {
            goto("../start/properties-owned");
        }
    }
</script>

<ProgressBar {progress} />
<div class="flex items-center justify-center mb-6">
    <form class="w-full max-w-screen-sm" id="form" method="Post">
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Row House"
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
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <path
                                d="M8 11L12 15M12 15L16 11M12 15V3M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.87958 19.412 6.13007 17 4.51555"
                                stroke="#0b751c"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g></svg
                    >
                </span>
                <p class="text-lg mx-4 my-auto">Row House</p>
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
                value="Floor"
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
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <path
                                d="M19 9.77794V15M5 15V9.77728M21 11.9998L15.5668 5.96381C14.3311 4.59104 13.7133 3.90466 12.9856 3.65126C12.3466 3.4287 11.651 3.42875 11.0119 3.65141C10.2843 3.90491 9.66661 4.59139 8.43114 5.96433L3 11.9998M3 20.0048C3 20.0048 3.69422 18.8856 4.8 19.0096C6.06078 19.151 7.13275 21 8.4 21C9.66725 21 10.7327 19.0096 12 19.0096C13.2673 19.0096 14.3327 21 15.6 21C16.8672 21 17.9392 19.151 19.2 19.0096C20.3058 18.8856 21 20.0048 21 20.0048M10 11H14V15H10V11Z"
                                stroke="#0b751c"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">Floor</p>
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
                value="Flat"
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
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <path
                                d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z"
                                stroke="#0b751c"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">Flat</p>
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
                value="Plot"
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
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier">
                            <path
                                d="M7 2L8.5 2"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M11.5 2L13 2"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 13L21.5 13"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 17L21.5 17"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15 17L16.5 17"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16 2L17.5 2"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20.5 2L22 2L22 3.5"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 20.5L2 22L3.5 22"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 17.5L2 16"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 9L20 7"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 13L2 11.5"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 8.5L2 7"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4 2H2V4"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M22 22V9.5C22 9.22386 21.7761 9 21.5 9H14.5C14.2239 9 14 9.22386 14 9.5V13"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M17 22V13.5C17 13.2239 16.7761 13 16.5 13H10.5C10.2239 13 10 13.2239 10 13.5V22"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.5 22H22"
                                stroke="#0b751c"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">Plot</p>
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
