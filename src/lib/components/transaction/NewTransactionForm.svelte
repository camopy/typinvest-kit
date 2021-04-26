<script>
	import { Transaction } from '$lib/models/Transaction';

	import { transactions } from '$lib/store/transaction';

	$: date = '';
	$: amount = 0;
	$: price = 0;
	$: validForm = !!date && !!amount && !!price;

	function addTransaction() {
		if (validForm) {
			const transaction = new Transaction(date, amount, price);
			$transactions.add(transaction);
		}
	}
</script>

<form>
	<label for="date">
		<p class="font-bold">Date</p>
		<div id="date">
			<input
				bind:value={date}
				type="date"
				class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded
        shadow appearance-none focus:outline-none focus:shadow-outline"
			/>
		</div>
	</label>

	<label for="amount">
		<p class="font-bold">Amount</p>
		<div id="amount">
			<input
				bind:value={amount}
				type="number"
				class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded
        shadow appearance-none focus:outline-none focus:shadow-outline"
			/>
		</div>
	</label>

	<label for="price">
		<p class="font-bold">Price</p>
		<div id="price">
			<input
				bind:value={price}
				type="number"
				class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded
        shadow appearance-none focus:outline-none focus:shadow-outline"
			/>
		</div>
	</label>
</form>
<div class="flex justify-start">
	<button
		class:opacity-50={!validForm}
		class:cursor-not-allowed={!validForm}
		disabled={!validForm}
		class="p-2 bg-indigo-600 rounded-lg text-white font-bold"
		on:click={addTransaction}>Add</button
	>
</div>
