<script>
  import { goto } from "$app/navigation";

  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 57.2;
  let name = "";
  let isNameValid = false;
  function validateName() {
    isNameValid = name.trim() !== "";
    handleNext();
  }
  


  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-ROI");
    var inputValue3 = inputElement.value;
    document.cookie = "Current Financial Name=" + inputValue1;
    document.cookie = "Current Financial ROI=" + inputValue3;
    event.currentTarget.value;
    if (event.currentTarget.value == "next") {
      goto("../start/Referral");
    }
  }
  function handleNext(){
        const nameSelect = document.getElementById("inline-full-name");
        const selectedName = nameSelect.value;
        const roiSelect = document.getElementById("inline-ROI");
        const selectedRoi = roiSelect.value;
        
        if (selectedName && selectedRoi !== "") {
            document.getElementById("next").disabled = false;
        }
        
    }
</script>

<ProgressBar {progress} />
<!-- 
<section class="w-full max-w-xl m-auto md:border mb-20 p-10">
  <label
    for="state"
    class="  block mb-8 text-center text-xl font-medium text-gray-900"
    >Your Financial Institute...
  </label>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        Bank Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input
      bind:value={name}
        on:blur={handleNext}
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-full-name"
        type="text"
        placeholder=""
      />
    </div>
  </div>
  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-ROI"
      >
        Current ROI
      </label>
    </div>
    <div class="md:w-2/3">
      <input
      on:input={handleNext}
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-ROI"
        type="number"
        placeholder=""
      />
    </div>
  </div>
  
  <div class="md:flex md:items-center">
    
    <button
  on:click={onChange}
  class="m-auto w-2/3 my-8 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
  id="next"
  value="next" disabled>Next</button
>
 
</div>
</section>

<style>
  *:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
#next:enabled{
background: rgb(82, 150, 82);
color: black;
opacity: 1;
}

</style> -->


<div class="container mb-10 m-auto">
  <div
    class="mx-auto sm:w-full md:w-3/5 lg:w-1/2 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7"
  >
    <div class="md:flex justify-between pb-7 md:pb-9 mt-7 md:-mt-1.5">
      <h4 class="text-2xl mx-10 2xl:text-3xl font-bold text-heading">
        Your Financial Institute...
      </h4>
      
    </div>
    <div />
    <form
      class="w-11/12 mx-auto flex flex-col justify-center"
      noValidate
      id="form"
      
    >
      <div class="flex flex-col px-5 space-y-5">
        <div class="relative">
          <label
            for="inline-full-name"
            class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
          Bank Name (required)
          </label>
          <input
            bind:value={name}
            on:blur={validateName}
            id="inline-full-name"
            type="text"
            placeholder="Enter Bank Name"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border-4 border-gray-400 rounded-lg cursor-pointer"
            autoComplete="off"
            spellCheck="false"
            aria-invalid="false"
          />
        </div>
        <div class="relative">
          <label
          for="inline-ROI"
            class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
          Current ROI (required)
          </label>
          <input
          on:input={handleNext}
            id="inline-ROI"
            type="number"
            placeholder="123-45-678"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border-4 border-gray-400 rounded-lg cursor-pointer"
            autoComplete="off"
            spellCheck="false"
            aria-invalid="false"
          />
          
        </div>

        <div class="relative md:m-auto justify-center gap-5">
          <button
            on:click|preventDefault={onChange}
            id="next"
            value="next"
            data-variant="flat"
            class="text-[13px] rounded-lg md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none b text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
            disabled
          >
            Next
          </button>
          <label
            class=" md:hidden text-[13px] rounded-lg md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
          >
            <input
              on:change={onChange}
              type="radio"
              class="hidden"
              value="next"
            />Skip Now
          </label>
        </div>
      </div>
    </form>
  </div>
</div>

<style>
  *:disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
  }
  #next:enabled {
    background: rgb(82, 150, 82);
    color: black;
    opacity: 1;
  }
  input {
    padding: 2rem 2rem;
    text-wrap: pretty;
    /* height: 100px; */
    overflow: auto;
  }
  input:hover {
    border-color: green;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
