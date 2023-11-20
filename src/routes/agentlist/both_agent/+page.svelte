<script>

</script>
<section class=" container m-auto md:px-12 px-0">
    <div class=" grid md:grid-cols-2 p-8">
        <!-----first grid---------------------------------------------->
        <div class=" md:mt-4 mt-0 p-4">
            <h1 class=" text-center md:font-bold md:text-5xl text-3xl font-semibold  ">First Up,where is the propety you're <span class=" text-green-800">selling</span></h1>
        </div>
        <!----------second grid----------------------------------->
        <div>
            <div class=" md:mt-4 mt-1 p-4">
                <form
                    class="w-11/12 mx-auto flex flex-col justify-center"
                    noValidate
                    id="form">
                    <div class="flex flex-col px-5 space-y-5">
                    <div class="relative">
                        <label
                          for="inline-full-name"
                          class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                          State
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
                          City
                        </label>
                        <input
                         
                          id="inline-Contact"
                          type="tel"
                        
                          class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="false"/>
                    </div>
                    <div class="relative">
                        <label
                          for="inline-Contact"
                          class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                        >
                          Pin code
                        </label>
                        <input
                         
                          id="inline-Contact"
                          type="tel"
                        
                          class="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white focus:outline-none focus:border-heading h-11 md:h-12 flex border border-gray-400 rounded-lg cursor-pointer"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="false"/>
                    </div>
                    <div class=" gap-5">
                        
                        <a href="/agentlist/buy_agent">
                            <button
                          
                          class="w-full m-auto p-3   rounded-full  text-green-800 text-lg  focus:ring-blue-500 focus:border-blue-500 block "
                          id="next"
                          >Next</button>
                        </a>
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
      box-shadow: 0 0 0 4px  #017a4e inset;
  
      color: #017848;
    }
    #next{
        border: 2px solid gray;
    }
  </style>