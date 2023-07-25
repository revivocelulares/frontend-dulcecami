import pb from '../lib/pocketbase';
import { useMutation } from 'react-query';

export default function useGoogle() {
    
    async function loginGoogle() {
        const authData = await pb.collection("Cliente").authWithOAuth2({ provider: 'google' });
    }

    return useMutation(loginGoogle);
}