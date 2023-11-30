<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import '$lib/dashboard/styles/app.css'
	// import '../../app.css'
	
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<nav >
	{#if !$page.data.user}
	

	
		<a href="/dashboard/login">Login</a>
		<!-- <a href="/dashboard/register">Register</a> -->
	
	{/if}

	{#if $page.data.user}
		<a href="/dashboard/admin">Admin</a>

		<form class="logout" action="/dashboard/logout" method="POST" use:enhance>
			<button type="submit">Log out</button>
		</form>
	{/if}
</nav>

<main>
	<slot />
</main>
<style>
	nav{
		margin: auto;
		text-align: center;
		border: 2px solid red;
		display: inline;
		float: right;
	}
</style>