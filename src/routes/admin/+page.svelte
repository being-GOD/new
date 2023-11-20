<script lang="ts">
	import type { ActionData } from "./$types";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import { navigate } from "svelte-navigator";
	import '../../app.css';

	export let form: ActionData;
	$: console.log($page.form, $page.status);
</script>
<!-- 
{#if form?.success}
	<p style="color:aquamarine">You are loged In!</p>
	{window.location.href = '/myAdmin'}
{/if}
{#if form?.notFound}
	<p style="color: red">Invalid Credentials!</p>
{/if}

<form method="POST" use:enhance>
	<label for="username">Username</label><br />
	<input id="username" name="username" placeholder="Username" />
	<br />
	{#if form?.usernameMissing}
		<p style="color: red; margin-bottom: 0">Username is Required!</p>
	{/if}
	<br /><br />

	<label for="password">Password</label><br />
	<input
		id="password"
		name="password"
		placeholder="Password"
		type="password"
	/>
	<br />
	{#if form?.passwordMissing}
		<p style="color: red; margin-bottom: 0">Password is Required!</p>
	{/if}

	<br /><br />

	<button type="submit">Login</button>
</form> -->
{#if form?.notFound}
<div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500">
	<span class="text-xl inline-block mr-5 align-middle">
	  <i class="fas fa-bell"></i>
	</span>
	<span class="inline-block align-middle mr-8">
	  <b class="capitalize">Username & Password Not Found!
	</span>
	<button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
	  <span>×</span>
	</button>
  </div>
	
{/if}
{#if form?.success}
<div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-300">
	<span class="text-xl inline-block mr-5 align-middle">
	  <i class="fas fa-bell"></i>
	</span>
	<span class="inline-block align-middle mr-8">
	  <b class="capitalize">login Successfully...
	</span>
	<button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
	  <span>×</span>
	</button>
  </div>
<div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-300">
	<span class="text-xl inline-block mr-5 align-middle">
	  <i class="fas fa-bell"></i>
	</span>
	<span class="inline-block align-middle mr-8">
	  <b class="capitalize">Redirection to DashBoard...
	</span>
	<button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
	  <span>×</span>
	</button>
  </div>
  {window.location.href = '/myAdmin'}
{/if}

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	  <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
	</div>
  
	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	  <form class="space-y-6" method="POST" use:enhance>
		<div>
		  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
		  <div class="mt-2">
			<input id="email" name="username" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
		  </div>
		</div>
  
		<div>
		  <div class="flex items-center justify-between">
			<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
			<div class="text-sm">
			  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
			</div>
		  </div>
		  <div class="mt-2">
			<input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
		  </div>
		</div>
  
		<div>
		  <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
		</div>
	  </form>
  
	  <p class="mt-10 text-center text-sm text-gray-500">
		Not a member?
		<a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp Now</a>
	  </p>
	</div>
  </div>