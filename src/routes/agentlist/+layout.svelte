<script >
    import Footer from "../footer.svelte";
    import Menu from "../menu.svelte";
    import { browser } from "$app/environment";

    function undo_operation_2() {
        
        if(browser){
            history.back();
            
        }
        
    }
    
</script>
<Menu  data/>
<div class=" container m-auto px-12 pt-8">
    <button class=" hover:bg-gray-200 p-2 hover:rounded" on:click={undo_operation_2}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          
    </button>

</div>
<slot />
<Footer />