<script>
    import "../../app.css";
    import Footer from '../footer.svelte'
</script>

<section class="mb-20">
    <div
        class=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
        <h1 class="block text-center my-10 font-bold text-3xl pt-5">ऋण.In</h1>
    </div>
    <div class=" border-2 text-center border-gray-600 rounded-3xl w-2/5 m-auto py-10">
        <div>
            <p class=" font-normal text-2xl mb-2">Welcome back!</p>
            <p class="font-thin text-lg">
                Let’s pick up right where you left off.
            </p>
        </div>
        <div>
            <form  action="" method="post">
                <input
                    type="email"
                    class="block border border-gray-500 m-auto w-3/5 p-4 rounded-lg my-10 "
                    name="email"
                    placeholder="Email"
                />
                <input
                    type="passwprd"
                    class="block border border-gray-500 m-auto w-3/5 p-4 rounded-lg my-5"
                    name="pass"
                    placeholder="Password"
                />
                <button 
                    type="submit"
                    class=" transition ease-in-out delay-150 block bg-slate-500 border text-white border-gray-400 w-1/2 m-auto p-3 rounded-lg my-5 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300"
                    >Submit</button
                >
            </form>
            <a href="#" class="text-blue-400">Forgot your password?</a>
            <!-- <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Save Changes
              </button>  -->
        </div>
    </div>
</section>
<Footer />