<script>
  import Modal from "../../components/modalcom.svelte";

  let showModal = false;
</script>

<!------------------------modal start------------------------------>
<Modal bind:showModal>
  <h2 slot="header" class=" text-base font-bold">rinn.in</h2>

  <div class=" p-8 bg-slate-50">
    
    
    <p>Please Wait for some hours, We will contact you</p>
    <p>and We will give you better information according to your requirment..</p>
    <h1 class=" text-center py-8 font-bold text-xl text-green-800">Thankyou...</h1>
    
    
  </div>

  
</Modal>
<!----------------------------modal End------------------------------>
<section class=" container m-auto md:px-12 px-0">
  <div class=" grid md:grid-cols-2 p-8">
    <!-----first grid---------------------------------------------->
    <div class=" md:mt-4 mt-0 p-4 md:p-8">
      <h1 class=" text-center md:font-bold md:text-5xl text-3xl font-semibold">
        Add a few details to get matched with an agents
      </h1>
    </div>
    <!----------second grid----------------------------------->
    <div>
      <div class=" md:mt-4 mt-1 p-4 md:p-8">
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
                Full name.
              </label>
              <input
                id="inline-full-name"
                type="text"
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
                Email id.
              </label>
              <input
                id="inline-Contact"
                type="tel"
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
                Phone No.
              </label>
              <input
                id="inline-Contact"
                type="tel"
                class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
            <p class="text-sm px-3">
              By clicking ”Submit”, I confirm that I have read and agree to
              rinn.in's Terms of Use and Privacy Policy. I understand that I am
              providing my prior express written consent for Better Real Estate,
              LLC to deliver calls or text messages to my phone number provided
              above, including for marketing purposes and using an automated
              telephone dialing system, even if my telephone number is currently
              listed on a federal, state, internal, or corporate Do-Not-Call
              list. To opt out, you can reply "stop" at any time or click the
              unsubscribe link in the emails. Message and data rates may apply.
              I understand that my consent is not required to make a purchase.
            </p>
            <div class=" gap-5">
              <button
                on:click={() => (showModal = true)}
                class="w-full m-auto p-3 rounded-full text-green-800 text-lg focus:ring-blue-500 focus:border-blue-500 block"
                id="next"
                value="next">Submit</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  input {
    padding: 1.5rem 1.5rem;
    text-wrap: pretty;
    /* height: 100px; */
    overflow: auto;
  }
  input:hover {
    box-shadow: 0 0 0 4px #017a4e inset;

    color: #017848;
  }
  #next {
    border: 2px solid gray;
  }
</style>
