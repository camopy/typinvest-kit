<script>
	import NewTransactionForm from '$lib/components/transaction/NewTransactionForm.svelte';
	import TransactionsTable from '$lib/components/transaction/TransactionsTable.svelte';
</script>

<div class="flex flex-col">
	<h1 class="font-bold text-3xl mx-auto m-4">Transactions</h1>
	<NewTransactionForm />
	<div class="m-2">
		<TransactionsTable />
	</div>
</div>
