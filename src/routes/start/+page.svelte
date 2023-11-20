<script>
    import { goto } from "$app/navigation";
    import { balance } from "./store.js";
    import { home } from "./store.js";
    import ProgressBar from "../components/ProgressBar.svelte";
    
    let progress = 0;
    function onChange(event) {
   
        let value = event.currentTarget.value;
        document.cookie = "Requirment=" + value;
        home.set(value);
       
        

        if (event.currentTarget.value == "Home Loan") {
            goto("../start/home-loan");
           
        } else if (event.currentTarget.value == "LAP") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "Balance Transfer") {
            balance.set(true);
            goto("../start/Property-Location");
        }
    }

  
    
</script>

<ProgressBar {progress} />
<div class="flex items-center justify-center ">
    <form class="w-full max-w-screen-sm" id="form" method="Post">
        <div class="m-10">
            <input
                
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                value="Home Loan"
            /> 
            <label
                class="flex flex-col  border border-gray-400 rounded-lg cursor-pointer "
                for="radio_1"
            >
                
                <span class="text-lg  flex">
                    <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36"  xmlns="http://www.w3.org/2000/svg"><path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path><path d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z" fill="#017848"></path></svg>
                    
                    <p class="ml-8 mt-2">Home  Loan</p>
            
            
                </span>

            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_3"
                type="radio"
                name="radio"
                value="Balance Transfer"
            />
            <label
                class=" flex flex-col p-4 border border-gray-400 rounded-lg cursor-pointer"
                for="radio_3"
            >
                <span class="text-lg  flex">
                    <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_142_3381)"><path d="M8.82687 17.2978C8.59026 17.1048 8.29622 17 7.9935 17C7.69052 17 7.39648 17.1048 7.16013 17.2978L0.493464 22.7266C0.180069 22.9854 -0.00147667 23.3743 9.04835e-06 23.7851V34.6428C9.04835e-06 35.0027 0.140489 35.3481 0.390485 35.6025C0.640481 35.857 0.979772 36 1.33334 36H14.6667C15.0202 36 15.3595 35.857 15.6095 35.6025C15.8595 35.3481 16 35.0027 16 34.6428V23.7851C15.9982 23.3722 15.8116 22.9826 15.4935 22.7266L8.82687 17.2978ZM13.3334 33.2857H10.6667V29.2141C10.6667 28.8542 10.5262 28.5088 10.2762 28.2544C10.0262 27.9999 9.68695 27.8569 9.33338 27.8569H6.66672C6.31315 27.8569 5.97386 27.9999 5.72386 28.2544C5.47386 28.5088 5.33338 28.8542 5.33338 29.2141V33.2857H2.66672V24.4367L8.00005 20.0936L13.3334 24.4367V33.2857Z" fill="#017848"></path><path clip-rule="evenodd" d="M14.5121 6.07143V9.71429L19.3571 4.85714L14.5121 0V3.64286H6V6.07143H14.5121ZM30.2857 10.9285H21.7736V7.28569L16.9286 12.1428L21.7736 17V13.3571H30.2857V10.9285Z" fill="#017848" fill-rule="evenodd"></path><path d="M36.1429 29.6986C36.1429 28.6642 35.7275 27.6725 34.9882 26.9411C34.2486 26.2099 33.2459 25.7991 32.2 25.7991H26.9429C26.4732 25.7991 26.0393 25.5513 25.8046 25.1491C25.5699 24.747 25.5699 24.2514 25.8046 23.8493C26.0393 23.4472 26.4732 23.1994 26.9429 23.1994H32.2C32.5485 23.1994 32.883 23.3363 33.1294 23.58C33.3758 23.8238 33.5143 24.1545 33.5143 24.4992H36.1429C36.1429 23.4648 35.7275 22.4732 34.9882 21.7417C34.2486 21.0105 33.2459 20.5997 32.2 20.5997H30.8857V18H28.2571V20.5997H26.9429C25.5341 20.5997 24.2324 21.343 23.5283 22.5495C22.824 23.7559 22.824 25.2426 23.5283 26.449C24.2324 27.6554 25.5341 28.3987 26.9429 28.3987H32.2C32.6697 28.3987 33.1036 28.6465 33.3382 29.0487C33.5729 29.4508 33.5729 29.9464 33.3382 30.3485C33.1036 30.7506 32.6697 30.9984 32.2 30.9984H26.9429C26.5943 30.9984 26.2599 30.8615 26.0135 30.6178C25.767 30.374 25.6286 30.0433 25.6286 29.6986H23C23 30.733 23.4154 31.7246 24.1547 32.4561C24.8943 33.1873 25.897 33.5981 26.9429 33.5981H28.2571V36.1978H30.8857V33.5981H32.2C33.2459 33.5981 34.2486 33.1873 34.9882 32.4561C35.7275 31.7247 36.1429 30.733 36.1429 29.6986Z" fill="#017848"></path></g><defs><clipPath id="clip0_142_3381"><rect fill="white" height="36" width="36"></rect></clipPath></defs></svg>
                    <p class="ml-8 mt-2">Balance Transfer</p>
                </span>
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value="LAP"
            />
            <label
                class="flex flex-col p-2 border border-gray-400 rounded-lg cursor-pointer"
                for="radio_2"
            >
                <span class="text-lg flex">
                    <svg fill="transparent" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path>
                        <path d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z" fill="#017848"></path><path d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z" fill="#017848"></path>
                    </svg>
                    <p class="ml-8 mt-2">LAP</p>
                </span>
            </label>
        </div>
        
    </form>
</div>
<style>
     label {
        padding: 1rem 1rem;
        text-wrap:pretty;
        /* height: 100px; */
        overflow: auto;
    }
    label:hover {
        
        box-shadow: 0 0 0 4px  #017a4e inset;

        color: #017848;
    }
    label:active {
        background-color: #017a4e;
        color:white;
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
