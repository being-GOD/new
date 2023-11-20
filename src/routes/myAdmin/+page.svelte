<script>
	import Content from '../../components/Content.svelte';
    export let data;
    let newData = JSON.parse(data.adminData);
</script>

<svelte:head>
  <title>Admin Dashboard | Rinn.in</title>
</svelte:head>
<Content title="Taxes" data={newData}/>
