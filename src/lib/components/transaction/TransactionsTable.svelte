<script>
	import { transactionsStore } from '$lib/store/transactions';
	const { transactions } = transactionsStore;
</script>

<table class="w-full">
	<thead>
		<tr>
			<th>DATE</th>
			<th>AMOUNT</th>
			<th>PRICE</th>
			<th>VOLUME</th>
		</tr>
	</thead>
	{#if $transactions}
		<tbody>
			{#each $transactions as transaction}
				<tr>
					<th>{transaction.date}</th>
					<th>{transaction.amount}</th>
					<th>{transaction.price}</th>
				</tr>
			{/each}
		</tbody>
	{/if}
	<tfoot />
</table>
