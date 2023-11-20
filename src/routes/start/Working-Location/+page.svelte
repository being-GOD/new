<script>
    import { goto , beforeNavigate ,afterNavigate} from "$app/navigation";    
    import { path } from '../store.js';
    import ProgressBar from "../../components/ProgressBar.svelte";
    import Data1 from "$lib/pincode_IN.json";
    let progress = 28.6;
    let countValue;

	path.subscribe(value => {
		countValue = value;
	});
    function onChange(event) {
        var inputElement = document.getElementById("state");
        var inputValue1 = inputElement.value;
        var inputElement = document.getElementById("city");
        var inputValue2 = inputElement.value;
        document.cookie = "Working Location (State)="+inputValue1;
        document.cookie = "Working Location (City)="+inputValue2;
        if (countValue == true )
        goto("../start/Referral");
        if (event.currentTarget.value == "next" && countValue == false ) {
            goto("../start/Master-plan");
        }
    }
    let newData = Data1;
    let state = [];
    for (const key in newData) {
        state.push(key);
    }
    let newState = state.sort();

    


    function populateCities() {
        const stateSelect = document.getElementById("state");
        const citySelect = document.getElementById("city");
        const selectedState = stateSelect.value;

        
        citySelect.innerHTML = "<option value=''>-- Select a City --</option>";
        if (selectedState !== "") {
            
            const keys = Object.keys(Data1[selectedState]);
            
           
            for (const i of keys) {
                console.log(i);
                const option = document.createElement("option");
                option.value = i;
                option.text = i;
                citySelect.appendChild(option);
            }



            
        }
        citySelect.addEventListener("change", handleNext);
    }
    
    function handleNext(){
        const citySelect = document.getElementById("city");
        const selectedCity = citySelect.value;
        if (selectedCity !== "") {
            document.getElementById("next").disabled = false;
        }
        
    }
</script>

<ProgressBar {progress} />

<div class="flex container m-auto items-center justify-center mt-6 mb-6">
    <form class="w-full font-medium max-w-screen-sm" id="form" >
            <label
                for="state"
                class=" block mb-4 text-center text-xl text-gray-900"
                >Select Your Working Location</label
            >
        <div class="m-3 text-md">
            <label for="state">
                Select State:</label>
        </div>
        <select
            id="state"
            on:change={populateCities}
            class="p-5 mb-8 bg-gray-50 border border-gray-300 text-green-800 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        ><option class="">Select Working State</option>
        
            {#each newState as item}
                <option value={item}>{item}</option>
            {/each}
        </select>
        <div class="m-3 text-md">
            <label for="state">
                Select City:</label>
        </div>
        
        <select
            id="city"
            class="p-5 mb-8 bg-gray-50 border border-gray-300  text-green-800 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        >
            <option value="">Select Working City</option>
        </select>
        <button
            on:click|preventDefault={onChange}
            class="w-full m-auto p-5 mb-8  rounded-full  text-green-800 text-lg  focus:ring-blue-500 focus:border-blue-500 block "
            id="next"
            value="next"
            disabled>Next</button
        >
    </form>
</div>

            
<style>
    *:disabled {
        background-color: darkgray;
        color: linen;
        opacity: 1;
    }
    #next:enabled {
        background: #017a4e;
        color: white;
        opacity: 1;
        
    }
    select {
	appearance: none;
    }
    select:hover{
        box-shadow: 0 0 0 4px  #017a4e inset;

        color: #017848;
    }
    #next:enabled:active{
        background: #005c53;
        color: white;

    }
    
   

</style>
