<script>
    import { goto } from "$app/navigation";

 function onChange(event) {
        
        let value = event.currentTarget.value;

        document.cookie = "agent_list=" + value;
        
        if (
            event.currentTarget.value ==
            "agent_buy"
        )  {
            
            
            goto("../agentlist/buy_agent");
            
            
        } else if (
            event.currentTarget.value ==
            "agent_sell"
        ) {
            
            goto("../agentlist/sell_agent");
            
            
        } else if (
            event.currentTarget.value ==
            "agent_both"
        ) 
        {
            goto("../agentlist/both_agent");
        }
    }

    

</script>





<section class="container m-auto ">
    <div class=" grid md:grid-cols-2  ">
        <div class="mt-4 md:p-8  p-4">
            <h1 class=" md:text-5xl text-3xl md:font-bold font-semibold md:p-10 px-8 text-center">What would you like an agent&#8217s help with?</h1>

        </div>
        <div class="md:mt-4 mt-0 md:py-8 py-4 md:px-8 px-4">
            <!-----change-->
            <div class="flex items-center justify-center mb-20">
    
    
                <form class="w-full max-w-screen-sm" id="form" method="Post">
                    <div class="m-10">
                        <input
                            on:change={onChange}
                            class="hidden"
                            id="radio_1"
                            type="radio"
                            name="radio"
                            value="agent_buy"
                            
                        />
                        <label
                            class="flex border-b border-gray-400 rounded-lg cursor-pointer"
                            for="radio_1" 
                        >
                        
                            <p class="text-lg mx-4 my-auto font-medium">
                                Buy
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
                            value="agent_sell"
                        />
                        <label
                            class="flex border-b border-gray-400 rounded-lg cursor-pointer"
                            for="radio_2"
                        >
                            
                            <p class="text-lg flex mx-4 my-auto font-medium">
                                Sell
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
                            value="agent_both"
                        />
                        <label
                            class="flex border-b border-gray-400 rounded-lg cursor-pointer"
                            for="radio_3">
                            <p class="text-lg flex mx-4 my-auto font-medium">
                                Both
                            </p>
                        </label>
                    </div>
                </form>
            </div>
        </div>

    </div>
</section>
<!-------------------------second form------------------------->

       





<style>
     label {
        padding: 1rem 1rem;
        text-wrap: pretty;
        
        overflow: auto;
    }
    label:hover {
        box-shadow: 0px 3px #017a4e;
        

        
    }
    
</style>



