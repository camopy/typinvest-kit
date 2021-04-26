<script>
	import '../app.postcss';
	import moment from 'moment';
	import Notification from '$lib/components/Notification.svelte';

	moment.locale('pt-br');
</script>

<div class="max-w-screen-xl mx-auto">
	<Notification />
	<slot />
</div>
