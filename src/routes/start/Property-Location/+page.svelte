<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 21.45;
    // import data from "$lib/Indian-States-&-Cities.json";
    import Data1 from "$lib/pincode_IN.json";

    function onChange(event) {
        var inputElement = document.getElementById("state");
        var inputValue1 = inputElement.value;

        var inputElement = document.getElementById("city");
        var inputValue2 = inputElement.value;
        document.cookie = "Property Location (State)=" + inputValue1;
        document.cookie = "Property Location (City)=" + inputValue2;
        if (event.currentTarget.value == "next") {
            goto("../start/Working-Location");
        }
    }
    let newData = Data1;
    let state = [];

    for (const key in newData) {
        state.push(key);
    }
    let newState = state.sort();

    // Function to populate city options based on selected state
    function populateCities() {
        const stateSelect = document.getElementById("state");
        const citySelect = document.getElementById("city");
        const selectedState = stateSelect.value;

        // const button = document.getElementById('next');

        // Clear previous city options
        citySelect.innerHTML = "<option value=''>-- Select a City --</option>";

        if (selectedState !== "") {
            // let cities = Data1[selectedState];
            const keys = Object.keys(Data1[selectedState]);

            // for (const i in cities) {
            //     console.log(i)
            //     const option = document.createElement("option");
            //     option.value = cities[i];
            //     option.text = cities[i];
            //     citySelect.appendChild(option);
            // }
            for (const i of keys) {
                const option = document.createElement("option");
                option.value = i;
                option.text = i;
                citySelect.appendChild(option);
            }

            // for ( let i in keys[0]) {

            //     const option = document.createElement("option");
            //     option.value = i;
            //     option.text = i;

            //     citySelect.appendChild(option);
            // }
        }
        citySelect.addEventListener("change", handleNext);
    }

    function handleNext() {
        const citySelect = document.getElementById("city");
        const selectedCity = citySelect.value;
        if (selectedCity !== "") {
            document.getElementById("next").disabled = false;
        }
    }
</script>

<ProgressBar {progress} />

<div class="flex container m-auto items-center justify-center mt-3 mb-6">
    <form class="w-full font-medium p-2 max-w-screen-sm" id="form">
        <label for="state" class=" block text-center text-xl text-gray-900"
            >Select Your Property Location</label
        >
        <div class="m-3 text-md">
            <label for="state"> Select State:</label>
        </div>
        <select
            id="state"
            on:change={populateCities}
            class="p-5 mb-8 bg-gray-50 border border-gray-300 hover:border-green-700 text-green-800 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            ><option class="">Select Property State</option>

            {#each newState as item}
                <option value={item}>{item}</option>
            {/each}
        </select>
        <div class="m-3 text-md">
            <label for="state"> Select City:</label>
        </div>

        <select
            id="city"
            class="p-5 mb-8 bg-gray-50 border border-gray-300 hover:border-green-700 text-green-800 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        >
            <option value="">Select Property City</option>
        </select>
        <button
            on:click|preventDefault={onChange}
            class="w-full m-auto p-5 mb-8 bg-gray-50 rounded-full text-green-800 text-lg focus:ring-blue-500 focus:border-blue-500 block"
            id="next"
            value="next"
            disabled>Next</button
        >
    </form>
</div>
<!----test------------------>




<style>
    *:disabled {
        background-color: darkgrey;
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
    select:hover {
        box-shadow: 0 0 0 4px #017a4e inset;

        color: #017848;
    }
    #next:enabled:active {
        background: #005c53;
        color: white;
    }
</style>
