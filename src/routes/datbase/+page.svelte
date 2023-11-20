<script>
import { onMount } from "svelte";
  import "../../app.css";
  let cookies = [];
  
  onMount(() => {
    cookies = document.cookie.split("; ").map((cookieString) => {
      const [name , value] = cookieString.split("=");
      console.log([name , value])
      
      return { name, value };
    });
  });
</script>
<form action="" method="post">
    <button type="submit">Submit</button>
</form>
<style>

</style>