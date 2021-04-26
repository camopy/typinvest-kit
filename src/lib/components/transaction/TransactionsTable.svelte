<script>
	import { transactions } from '$lib/store/transactions';
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
			{#each $transactions.toArray() as transaction}
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
