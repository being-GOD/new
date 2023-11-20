<script>
    import { goto } from "$app/navigation";
    import { path } from "../store";
    import ProgressBar from "../../components/ProgressBar.svelte";
    
    
    let progress = 7.15;
    let home_loan_value="Signed the Agreement with Builder or Seller"
    
    
    function onChange(event) {
        
        let value = event.currentTarget.value;

        document.cookie = "Stage of Property purchase=" + value;
        
        if (
            event.currentTarget.value ==
            "Signed the Agreement with Builder or Seller"
        )  {
            
            setTimeout(()=>{
                goto("../start/Property-Location");
            },500)
            
        } else if (
            event.currentTarget.value ==
            "Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
        ) {
            setTimeout(()=>{
                goto("../start/Property-Location");
            },500)
            
        } else if (
            event.currentTarget.value ==
            "Need only Sanction letter (Validity 3 months)"
        ) {
            path.set(true);
            setTimeout(()=>{
                goto("../start/Working-Location");
            },500)
           
        }
    }
</script>

<ProgressBar {progress} />
<div class=" grid md:grid-cols-8">
    <!-----------!!!!!@@@@@@@@@@@@---------column 1-->
    <div class="md:col-start-1 md:col-end-3 text-center mt-8 md:mt-0 py-10 ">
        <!-- <details class="  ml-2 p-2 border border-gray-400 rounded-xl">
            <summary>Information</summary>
            <p id="summarypara">hiii</p>
        </details> -->
    </div>
    <!-----------------column2------sssssssssssss--------->
    <div class="md:col-start-3 md:col-end-7 ">
        <div class="flex items-center justify-center mb-20">
    
    
            <form class="w-full max-w-screen-sm" id="form" method="Post">
                <div class="m-10">
                    <input
                        on:change={onChange}
                        class="hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        bind:value={home_loan_value}
                    />
                    <label
                        class="flex border border-gray-400 rounded-lg cursor-pointer"
                        for="radio_1" 
                    >
                        <span class=" my-auto flex items-blue-800">
                            <svg
                                height="36px"
                                style="margin-left:16px;margin-right:12px"
                                width="36px"
                                fill=" #017a4e"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 420 420"
                                xml:space="preserve"
                                stroke="#017848"
                                ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                /><g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M252.877,92.823h53.791l0.005,62.757l27.271-42.343V77.743c0-2.168-0.863-4.247-2.396-5.787L261.984,2.395 C260.451,0.863,258.371,0,256.199,0H41.113C27.579,0,16.566,11.008,16.566,24.543v370.914c0,13.534,11.012,24.543,24.547,24.543 h268.283c13.533,0,24.545-11.009,24.545-24.543V290.15l-27.264,41.721l0.004,60.854H43.84V27.274h198.906v55.417 C242.746,88.29,247.281,92.823,252.877,92.823z"
                                                />
                                                <path
                                                    d="M364.398,195.123l-11.271-7.364c-1.84-1.201-4.303-0.686-5.506,1.154l-60.688,92.866l-11.67-7.625l60.688-92.867 c1.203-1.841,0.687-4.304-1.153-5.506l-11.271-7.365c-1.84-1.202-4.305-0.686-5.506,1.154l-90.869,139.053 c-0.386,0.591-0.607,1.274-0.643,1.979l-2.375,48.258c-0.069,1.409,0.614,2.754,1.797,3.523c1.183,0.773,2.688,0.86,3.949,0.231 l43.243-21.553c0.634-0.313,1.17-0.793,1.558-1.385l90.867-139.052C366.754,198.79,366.236,196.326,364.398,195.123z"
                                                />
                                                <path
                                                    d="M401.631,138.145l-40.869-26.708c-1.838-1.201-4.304-0.685-5.506,1.154l-27.563,42.179 c-1.201,1.84-0.686,4.306,1.154,5.508l40.869,26.706c1.838,1.202,4.305,0.686,5.506-1.154l27.562-42.178 C403.988,141.812,403.471,139.347,401.631,138.145z"
                                                />
                                                <path
                                                    d="M83.563,87.462h78c5.523,0,10-4.478,10-10s-4.477-10-10-10h-78c-5.523,0-10,4.478-10,10S78.042,87.462,83.563,87.462z"
                                                />
                                                <path
                                                    d="M231.563,127.462c0-5.522-4.479-10-10-10h-138c-5.523,0-10,4.478-10,10s4.477,10,10,10h138 C227.086,137.462,231.563,132.984,231.563,127.462z"
                                                />
                                                <path
                                                    d="M83.563,187.462h78c5.523,0,10-4.478,10-10s-4.477-10-10-10h-78c-5.523,0-10,4.478-10,10S78.042,187.462,83.563,187.462z "
                                                />
                                                <path
                                                    d="M83.563,237.462h78c5.523,0,10-4.478,10-10c0-5.521-4.477-10-10-10h-78c-5.523,0-10,4.479-10,10 C73.563,232.984,78.042,237.462,83.563,237.462z"
                                                />
                                                <path
                                                    d="M87.796,366.694c-1.947,2.516,1.565,6.082,3.536,3.533c6.213-8.026,11.344-16.671,15.629-25.795 c2.674,1.679,6.185,1.343,9.065,0.205c4.151-1.637,7.67-4.796,11.021-7.655c1.981-1.69,4.287-4.481,7.029-4.748 c2.094-0.201,4.922,1.485,7.015,1.844c5.469,0.932,11.857-0.651,17.137-1.956c5.011-1.237,10.879-3.194,13.828-7.731 c1.763-2.712-2.568-5.216-4.317-2.521c-2.361,3.632-8.126,4.764-12.022,5.726c-4.573,1.131-9.879,2.246-14.592,1.442 c-3.552-0.604-6.425-2.752-10.077-1.125c-4.892,2.18-8.629,6.761-12.949,9.854c-1.933,1.384-4.142,2.714-6.56,2.901 c-0.995,0.077-1.806-0.288-2.48-0.896c0.532-1.234,1.06-2.474,1.563-3.725c4.876-12.104,7.081-24.396,9.344-37.146 c1.15-6.479,3.063-16.688-6.223-17.311c-8.205-0.548-15.296,11.287-17.918,17.524c-2.345,5.578-2.606,12.058-2.427,18.014 c0.111,3.712,1.447,7.566,2.432,11.404c-7.874,1.263-14.814,9.216-13.598,17.1c1.197,7.758,10.898,3.752,14.521,0.881 c3.667-2.905,4.854-6.534,4.893-10.448c0.731,1.205,1.342,2.65,1.974,4.002C99.395,349.544,94.098,358.552,87.796,366.694z M96.56,338.393c-0.74,3.298-4.913,6.554-8.199,6.858c-2.585,0.24-1.008-4.377-0.497-5.409c1.604-3.242,5.578-5.358,8.919-6.27 C96.939,335.199,96.914,336.811,96.56,338.393z M100.736,328.712c-0.851-3.976-2.032-7.969-2.338-11.583 c-0.592-6.975,0.647-14.284,4.106-20.384c2.161-3.812,6.566-9.654,11.239-10.154c4.173-0.444,1.628,9.705,1.267,11.744 c-1.117,6.294-1.914,12.541-3.471,18.763c-1.446,5.778-3.278,11.5-5.469,17.095C104.905,331.294,103.388,329.438,100.736,328.712 z"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g></svg
                            >
                        </span>
                        <p class="text-lg mx-4 my-auto font-medium">
                            Signed a purchase agreement
                        </p>
                    </label>
                </div>
        
                <div class="m-10">
                    <input
                        on:change={onChange}
                        class="hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        value="Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
                    />
                    <label
                        class="flex border border-gray-400 rounded-lg cursor-pointer"
                        for="radio_2"
                    >
                        <span class="my-auto flex"
                            ><svg
                                height="36px"
                                width="36px"
                                stroke="#0b751c"
                                viewBox="0 0 36 36"
                                aria-hidden="true"
                                fill="#017848"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                style="margin-left: 16px; margin-right: 12px;"
                                ><path
                                    d="M35.5788 13.7471L18.7031 0.246849C18.5037 0.0868839 18.2556 0 17.9999 0C17.7445 0 17.4964 0.0868903 17.2967 0.246849L0.420977 13.7471C0.177889 13.9422 0.0264575 14.2295 0.00310143 14.5404C-0.0200026 14.8516 0.0867283 15.1582 0.298173 15.3875C0.509625 15.6167 0.806708 15.7478 1.11862 15.7496H3.36872V34.875C3.36872 35.1733 3.48726 35.4596 3.6982 35.6705C3.90914 35.8815 4.19543 36 4.49377 36H31.495C31.7933 36 32.0796 35.8815 32.2905 35.6705C32.5015 35.4596 32.62 35.1733 32.62 34.875V15.7496H34.8701C35.1833 15.7508 35.4829 15.6218 35.6965 15.393C35.9105 15.1642 36.0195 14.8566 35.9971 14.5442C35.9748 14.2318 35.8231 13.943 35.5788 13.7472L35.5788 13.7471ZM31.495 13.4995C31.1967 13.4995 30.9104 13.618 30.6995 13.829C30.4885 14.0399 30.37 14.3262 30.37 14.6245V33.7499H5.6189V14.6245C5.6189 14.3262 5.50036 14.0399 5.28942 13.829C5.07847 13.618 4.79219 13.4995 4.49385 13.4995H4.32509L17.9941 2.56429L31.6631 13.4995H31.495Z"
                                    fill="#017848"
                                /><path
                                    d="M14.5 21H21.5"
                                    stroke="#017848"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                /><path
                                    d="M14.5 24H21.5"
                                    stroke="#017848"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                /><path
                                    d="M14.5 27H21.5"
                                    stroke="#017848"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                /><path
                                    clip-rule="evenodd"
                                    d="M12 11H20L26 17V29C26 30.1 25.1 31 24 31H11.99C10.89 31 10 30.1 10 29L10.01 13C10.01 11.9 10.9 11 12 11ZM12 13V29H24V18H19V13H12Z"
                                    fill="#017848"
                                    fill-rule="evenodd"
                                /></svg
                            ></span
                        >
                        <p class="text-lg flex mx-4 my-auto font-medium">
                            Property Finalised but Agreement is not signed. Need
                            Sanction Letter to see eligiblity ( Validity 3 months)
                        </p>
                    </label>
                </div>
                <div class="m-10">
                    <input
                        on:change={onChange}
                        class="hidden"
                        id="radio_3"
                        type="radio"
                        name="radio"
                        value="Need only Sanction letter (Validity 3 months)"
                    />
                    <label
                        class="flex border border-gray-400 rounded-lg cursor-pointer"
                        for="radio_3"
                    >
                        <span class="my-auto flex">
                            <svg
                                height="36px"
                                width="36px"
                                stroke="#0b751c"
                                viewBox="0 0 36 37"
                                aria-hidden="true"
                                fill="none"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                style="margin-left: 16px; margin-right: 12px;"
                                ><path
                                    d="M35.5788 13.7471L18.7031 0.246849C18.5037 0.0868839 18.2556 0 17.9999 0C17.7445 0 17.4964 0.0868903 17.2967 0.246849L0.420977 13.7471C0.177889 13.9422 0.0264575 14.2295 0.00310143 14.5404C-0.0200026 14.8516 0.0867283 15.1582 0.298173 15.3875C0.509625 15.6167 0.806708 15.7478 1.11862 15.7496H3.36872V34.875C3.36872 35.1733 3.48726 35.4596 3.6982 35.6705C3.90914 35.8815 4.19543 36 4.49377 36H31.495C31.7933 36 32.0796 35.8815 32.2905 35.6705C32.5015 35.4596 32.62 35.1733 32.62 34.875V15.7496H34.8701C35.1833 15.7508 35.4829 15.6218 35.6965 15.393C35.9105 15.1642 36.0195 14.8566 35.9971 14.5442C35.9748 14.2318 35.8231 13.943 35.5788 13.7472L35.5788 13.7471ZM31.495 13.4995C31.1967 13.4995 30.9104 13.618 30.6995 13.829C30.4885 14.0399 30.37 14.3262 30.37 14.6245V33.7499H5.6189V14.6245C5.6189 14.3262 5.50036 14.0399 5.28942 13.829C5.07847 13.618 4.79219 13.4995 4.49385 13.4995H4.32509L17.9941 2.56429L31.6631 13.4995H31.495Z"
                                    fill="#017848"
                                /><path
                                    d="M28.3945 31.999H8.39453V35.999H28.3945V31.999Z"
                                    fill="#fffdfa"
                                /><path
                                    d="M19.2258 16.0019C19.2112 16.005 19.1966 16.0095 19.1821 16.0141L11.7154 17.9549C11.5204 18.008 11.391 18.1611 11.3946 18.331V33.8578C11.3946 34.0353 11.5386 34.1899 11.7446 34.2339L19.2112 35.7866C19.3516 35.8169 19.4993 35.7911 19.6141 35.7168C19.7271 35.644 19.7946 35.5303 19.7946 35.4105V16.3901C19.7964 16.2779 19.7381 16.1718 19.6378 16.0975C19.5375 16.0232 19.4026 15.9883 19.2696 16.0019C19.255 16.0019 19.2404 16.0019 19.2258 16.0019ZM18.8612 16.9238V34.9132L12.3279 33.5546V18.6221L18.8612 16.9238ZM20.7279 17.5546V18.331H24.4612V33.4697H20.7279V34.246H24.9279C25.1849 34.246 25.3945 34.0716 25.3945 33.8578V17.9428C25.3945 17.729 25.1849 17.5546 24.9279 17.5546H20.7279Z"
                                    fill="#017848"
                                    stroke="#017848"
                                /><path
                                    d="M16.2944 25.8989V27.5489"
                                    stroke="#017848"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                /></svg
                            ></span
                        >
                        <p class="text-lg flex mx-4 my-auto font-medium">
                            Need only Sanction letter (Validity 3 months)
                        </p>
                    </label>
                </div>
            </form>
        </div>
    </div>
    <!------column3-------------hhjj-->
    <div class="md:col-start-7 md:col-end-9  text-center pt-10 ">
         <!-- <details class="  mr-2  p-2 border border-gray-400 rounded-xl">
            <summary>Help</summary>
            <p id="summarypara">hiii</p>
        </details> -->
    </div>
    
</div>








<style>
    label {
        padding: 1rem 1rem;
        text-wrap: pretty;
        
        overflow: auto;
    }
    label:hover {
        box-shadow: 0 0 0 4px #017a4e inset;

        color: #017848;
    }
    
    input:checked +label{
        
        background-color: #017a4e;
        color: white;
    }
    input:checked +label svg {
        fill: white;
        stroke: white;
    }
    input:checked +label svg path {
        fill: white;
        stroke: white;
    }
    summary{
        
        text-align: start;
    }
    #summarypara{
        text-align: left;
    }
</style>
