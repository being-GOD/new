<script>
    import { goto } from "$app/navigation";
    import "../../../app.css";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 100;
    function onChange(event) {
        event.currentTarget.value;
        if (event.currentTarget.value == "next") {
            goto("../start/Documents");
        }
    }
</script>

<ProgressBar {progress} />
<div class=" container m-auto flex flex-row flex-wrap mb-10">
    <div class=" m-auto w-10/12 sm:w-5/12">
        <!-- Profile Card -->
        <div
            class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"
            style="
    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-repeat: no-repat;
    background-size: cover;
    background-blend-mode: multiply;
  "
        >
            <div class="md:w-1/3 w-full">
                <img
                    alt="#"
                    class="rounded-lg shadow-lg antialiased"
                    src="/img/33466.jpg"
                />
            </div>
            <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                <div
                    class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"
                >
                    <div class=" block text-2xl text-white leading-tight">
                        Anshul Singh
                    </div>
                    <div
                        class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-1"
                    >
                        <span
                            class="border-b border-dashed border-gray-500 pb-1"
                        >
                            Executive</span
                        >
                    </div>
                    <div
                        class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-1"
                    >
                        <span
                            class="border-b border-dashed border-gray-500 pb-1"
                        >
                            +91-1234567890</span
                        >
                    </div>
                    <div
                        class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer m-5"
                    >
                        <span
                            class="border rounded border-gray-500 p-1 bg-green-700"
                        >
                        <a href="tel:1234567890">Call Now</a> </span
                        >
                    </div>
                    <!-- <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> -->
                </div>
            </div>
        </div>
        <!-- End Profile Card -->
    </div>
</div>
