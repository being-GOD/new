<script>
    import { goto } from "$app/navigation";
    import { balance } from "../store";
    let selected = "";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 50.05;
    let countValue;

    balance.subscribe((value) => {
        countValue = value;
    });
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "No. of properties already owned=" + value;
        if (countValue == true) goto("../start/Financial-Institution");
        else if (
            event.currentTarget.value == "0 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "1-2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "More then 2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
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
                value="0 Property"
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
                                d="M10 12.9999V11.9999C10 10.8954 10.8954 9.99994 12 9.99994C13.1046 9.99994 14 10.8954 14 11.9999V12.9999M3 14.5999V12.1301C3 10.9814 3 10.407 3.14805 9.87807C3.2792 9.40953 3.49473 8.96886 3.78405 8.57768C4.11067 8.13608 4.56404 7.78346 5.47078 7.07822L8.07078 5.056C9.47608 3.96298 10.1787 3.41648 10.9546 3.2064C11.6392 3.02104 12.3608 3.02104 13.0454 3.2064C13.8213 3.41648 14.5239 3.96299 15.9292 5.056L18.5292 7.07822C19.436 7.78346 19.8893 8.13608 20.2159 8.57768C20.5053 8.96886 20.7208 9.40953 20.8519 9.87807C21 10.407 21 10.9814 21 12.1301V14.5999C21 16.8401 21 17.9603 20.564 18.8159C20.1805 19.5685 19.5686 20.1805 18.816 20.564C17.9603 20.9999 16.8402 20.9999 14.6 20.9999H9.4C7.15979 20.9999 6.03969 20.9999 5.18404 20.564C4.43139 20.1805 3.81947 19.5685 3.43597 18.8159C3 17.9603 3 16.8401 3 14.5999ZM10.5 15.9999H13.5C13.9659 15.9999 14.1989 15.9999 14.3827 15.9238C14.6277 15.8223 14.8224 15.6276 14.9239 15.3826C15 15.1988 15 14.9659 15 14.4999C15 14.034 15 13.801 14.9239 13.6173C14.8224 13.3722 14.6277 13.1776 14.3827 13.0761C14.1989 12.9999 13.9659 12.9999 13.5 12.9999H10.5C10.0341 12.9999 9.80109 12.9999 9.61732 13.0761C9.37229 13.1776 9.17761 13.3722 9.07612 13.6173C9 13.801 9 14.034 9 14.4999C9 14.9659 9 15.1988 9.07612 15.3826C9.17761 15.6276 9.37229 15.8223 9.61732 15.9238C9.80109 15.9999 10.0341 15.9999 10.5 15.9999Z"
                                stroke="#0b751c"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">0 Property</p>
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
                value="1-2 Property"
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
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier"
                            ><path
                                d="M19,3a1,1,0,0,0-2,0V6L12,2,2,10H4V22h6V18a2,2,0,0,1,4,0v4h6V10h2L19,7.6ZM8,18H6V16H8Zm0-4H6V12H8Zm6,0H10V12h4Zm4,4H16V16h2Zm0-4H16V12h2Z"
                            /></g
                        ></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">1-2 Property</p>
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
                value="More then 2 Property"
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
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                            id="SVGRepo_tracerCarrier"
                            
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        /><g id="SVGRepo_iconCarrier"
                            ><path
                                d="M21,2H13a1,1,0,0,0-1,1V22H22V3A1,1,0,0,0,21,2ZM20,19H14V17h6Zm0-4H14V13h6Zm0-4H14V9h6Zm0-4H14V5h6ZM10,9A1,1,0,0,0,9,8H3A1,1,0,0,0,2,9V22h8ZM7,20H5V18H7Zm0-4H5V14H7Zm0-4H5V10H7Z"
                            /></g
                        ></svg
                    ></span
                >
                <p class="text-lg mx-4 my-auto">More then 2 Property</p>
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
