<script>
	import { notification } from '$lib/store/notification';
	const { message, type } = notification;
</script>

{#if $message}
	<div
		class:bg-green-500={$type == 'success'}
		class:bg-yellow-500={$type == 'warning'}
		class:bg-red-500={$type == 'error'}
		class="max-w-sm top-0 z-50 bg-white m-2 p-2 right-0 fixed shadow-xl
    rounded-lg"
	>
		<span class="text-lg text-white">
			{$message}
		</span>
	</div>
{/if}
