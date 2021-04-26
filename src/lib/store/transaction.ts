import { writable } from 'svelte/store';
import { Transactions } from '$lib/models/Transactions';

export const transactions = writable<Transactions | null>(new Transactions());