<script>
	import { Transaction } from '$lib/models/Transaction';
	import moment from 'moment';

	let date = moment().format('x'),
		amount = 0,
		price = 0;

	function addTransaction() {
		const transaction = new Transaction(date, amount, price);
		console.log(transaction);
	}
</script>

<button on:click={addTransaction}>Test</button>
