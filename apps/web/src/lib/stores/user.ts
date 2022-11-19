import { auth } from '$lib/firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { writable } from 'svelte/store';

export const user = writable<User | null>(null);
export const isSignedIn = (user: User | null): user is User => user !== null;

onAuthStateChanged(auth, (newUser) => user.set(newUser));
