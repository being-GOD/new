
<script >
    import Formfooter from "../components/formfooter.svelte";
    
    import Whatsapp from "../components/whatsapp.svelte";


    
    // if (browser){

        
    //     let output = {};
    //     document.cookie.trim(.split(';')).forEach(function(pair) {
    //     pair = pair.split('=');
    //     console.log(pair)
    //     output[pair[0]] = pair.splice(1).join();
    //     });
    //     let json_123 = JSON.stringify(output);
    //     let newJson = JSON.parse(json_123);
    //     console.log(newJson)

    // }

    
</script>


<slot />
<Whatsapp />


<Formfooter />