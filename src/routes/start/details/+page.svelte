<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 78.65;
  function onChange(event) {
    var inputElement1 = document.getElementById("inline-full-name");
    var inputValue1 = inputElement1.value;
    var inputElement2 = document.getElementById("inline-contact");
    var inputValue2 = inputElement2.value;
    var inputElement3 = document.getElementById("inline-email");
    var inputValue3 = inputElement3.value;
    document.cookie = "User (Name)=" + inputValue1;
    document.cookie = "User (Mobile)=" + inputValue2;
    document.cookie = "User (Email)=" + inputValue3;
    console.log(event.currentTarget.value == "next")
    if (event.currentTarget.value == "next") {
    console.log(inputValue1,inputValue3);
      
      goto("../start/employment");
    }
  }

  let name = "";
  let mobileNumber = "";
  let email = "";
  let isNameValid = false;
  let isMobileNumberValid = true;
  let isEmailValid = true;
  function validateName() {
    isNameValid = name.trim() !== "";
  }

  function validateMobileNumber() {
    // Remove any non-numeric characters from the input
    mobileNumber = mobileNumber.replace(/\D/g, "");

    // Limit the input to a maximum of 10 digits
    mobileNumber = mobileNumber.slice(0, 10);

    // Validate the mobile number field
    isMobileNumberValid = mobileNumber.length === 10;
  }

  function validateEmail() {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isEmailValid = emailPattern.test(email.trim());
    if (isEmailValid) {
      handleButton();
    }
  }
  let nextButton = true;
  let handleButton = function handleNext() {
    if (isNameValid && isMobileNumberValid && isEmailValid) {
      nextButton = false;
    }
  };
</script>

<ProgressBar {progress} />
<div class="container mb-6 mt-3 m-auto">
  <div
    class="mx-auto sm:w-full md:w-3/5 lg:w-1/2 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7"
  >
    <div class="md:flex justify-between pb-7 md:pb-9 mt-2 md:-mt-1.5">
      <h4 class="text-2xl mx-10 2xl:text-3xl font-bold text-heading">
        Enter Your Details...
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
            Your Name (required)
          </label>
          <input
            bind:value={name}
            on:blur={validateName}
            id="inline-full-name"
            type="text"
            placeholder="Enter Your Name"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
          />
        </div>
        <div class="relative">
          <label
            for="inline-contact"
            class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
            Your Contact No. (required)
          </label>
          <input
            bind:value={mobileNumber}
            on:input={validateMobileNumber}
            id="inline-contact"
            type="tel"
            placeholder="123-45-678"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
          />
          {#if !isMobileNumberValid}
            <p class="text-red-300 mb-5">
              Please enter a valid 10-digit mobile number
            </p>
          {/if}
        </div>
        <div class="relative">
          <label
            for="inline-email"
            class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
          >
            Your Email. (required)
          </label>
          <input
            bind:value={email}
            on:input={validateEmail}
            id="inline-email"
            type="email"
            placeholder="abc@domain.com"
            class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
          />
          {#if !isEmailValid}
            <p class="text-red-300 mb-5">Please enter a valid Email Address.</p>
          {/if}
        </div>

        <div class=" gap-5">
          
          <button
            on:click|preventDefault={onChange}
            class="w-full m-auto p-5  rounded-full  text-green-800 text-lg  focus:ring-blue-500 focus:border-blue-500 block "
            id="next"
            value="next"
            disabled={nextButton}
            >
            Next</button
        >
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
    color: white;
    opacity: 1;
  }
  #next:enabled:active{
    background-color: #005c53;
    color: white;
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
</style>
