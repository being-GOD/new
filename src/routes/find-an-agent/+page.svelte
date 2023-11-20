<script>
    import Menu from '../menu.svelte';
    import Footer from '../footer.svelte'
   
</script>

<Menu data/>

<section>
    <div class="container m-auto">
        <div class="grid lg:grid-cols-2 py-8">
            <div class=" px-5">
                <p class=" text-xl font-semibold text-green-800 py-12">Better Real Estate</p>
                <p class=" text-5xl font-bold py-8">Get an agent who can help

                 you make the right offer
                </p>
                <div class=" inline-flex py-8">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#017a4e" class="w-6 h-6 m-auto mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                          

                    </div>
                    <p class=" text-2xl font-semibold px-8 ">Use data-driven insights to find out exactly how
                        much to offer</p>
                </div>
                   
                    
                <a href="agentlist"><button class="px-12 rounded-xl text-xl text-white font-bold py-6 bg-green-600 hover:bg-green-800">Get Start</button>    
                </a>
            </div>
            <div class="place-self-end p-5 ">
                <img src="/img/welcome-step-hero.png">
            </div>

        </div>
        
    


</section>



<Footer />



