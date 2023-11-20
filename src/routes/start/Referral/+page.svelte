<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 71.5;
  let name = "";
  let mobileNumber = "";
  let isNameValid = false;
  let isMobileNumberValid = true;
  function validateName() {
    // Validate the name field
    isNameValid = name.trim() !== "";
    handleNext();
  }

  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-Contact");
    var inputValue2 = inputElement.value;
    document.cookie = "Referral Code (Name)=" + inputValue1;
    document.cookie = "Referral Code(Mobile No.)=" + inputValue2;
    if (event.currentTarget.value == "next") {
      goto("../start/details");
    }
  }
  function validateMobileNumber() {
    // Remove any non-numeric characters from the input
    mobileNumber = mobileNumber.replace(/\D/g, "");

    // Limit the input to a maximum of 10 digits
    mobileNumber = mobileNumber.slice(0, 10);

    // Validate the mobile number field
    isMobileNumberValid = mobileNumber.length === 10;
    if (isMobileNumberValid){
      handleNext();
    }
  }
  function handleNext() {
    const nameSelect = document.getElementById("inline-full-name");
    const selectedName = nameSelect.value;
    const contactSelect = document.getElementById("inline-Contact");
    const selectedContact = contactSelect.value;
    if (selectedName && selectedContact !== "") {
      document.getElementById("next").disabled = false;
    }
  }
</script>

<ProgressBar {progress} />
<div class="container mb-10 mt-8 m-auto">
  <div
    class="mx-auto sm:w-full md:w-3/5 lg:w-1/2 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7"
  >
    <div class="md:flex justify-between pb-7 md:pb-9 mt-7 md:-mt-1.5">
      <h4 class="text-2xl mx-10 2xl:text-3xl font-bold text-heading">
        Person who referred you...
      </h4>
      <label
        class="hidden md:flex text-blue-400 font-semibold border-2 py-2 px-4 hover:bg-green-600 hover:text-white rounded-md shadow-lg hover:shadow-green-200 mx-10"
      >
        <input
          on:change={onChange}
          type="radio"
          class="hidden"
          value="next"
        />Skip Now...
      </label>
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
            Your Name (required)
          </label>
          <input
            bind:value={name}
            on:blur={validateName}
            id="inline-full-name"
            type="text"
            placeholder="Enter Referral Name"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
            autoComplete="off"
            spellCheck="false"
            aria-invalid="false"
          />
        </div>
        <div class="relative">
          <label
            for="inline-Contact"
            class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
            Contact No. (required)
          </label>
          <input
            bind:value={mobileNumber}
            on:input={validateMobileNumber}
            id="inline-Contact"
            type="tel"
            placeholder="123-45-678"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
            autoComplete="off"
            spellCheck="false"
            aria-invalid="false"
          />
          {#if !isMobileNumberValid}
            <p class="text-red-300 mb-5">
              Please enter a valid 10-digit mobile number
            </p>
          {/if}
        </div>

        <div class=" gap-5">
          <!-- <button
            on:click|preventDefault={onChange}
            id="next"
            value="next"
            data-variant="flat"
            class= " text-[13px] rounded-lg md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none b text-white px-36 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
            disabled
          >
            Next
          </button> -->
          <button
            on:click|preventDefault={onChange}
            class="w-full m-auto p-5 mb-8  rounded-full  text-green-800 text-lg  focus:ring-blue-500 focus:border-blue-500 block "
            id="next"
            value="next"
            data-variant="flat"
            disabled>Next</button
        >
          
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
    background: #017a4e;
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
    box-shadow: 0 0 0 4px  #017a4e inset;

    color: #017848;
  }
  #next:enabled:active{
    background-color: #005c53;
    color: white;
  }
</style>
