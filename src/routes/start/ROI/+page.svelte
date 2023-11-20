<script>
    import { goto } from "$app/navigation";
        let selected = "";
        import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 64.35;
    function onChange(event) {
        var inputElement = document.getElementById("myInput1");
        var inputValue1 = inputElement.value;
        document.cookie = "Current ROI="+inputValue1;
        if (event.currentTarget.value == "next") {
            goto("../start/Referral");
        }
    }
</script>
<ProgressBar {progress} />
<main>
    <form class="form-container">
        <label for="state"
            >Current ROI:
            <input type="number"  id="myInput1" placeholder="Enter Your ROI " />
        </label>
        <label class="next">
            <input
                on:change={onChange}
                type="radio"
                value="next"
            />Next
        </label>
    </form>
</main>
