import {signOut} from '@/auth';

export async function signOutClient() {
    'use server';
    await signOut(); // Call the signOut function
}
