import pb from '../lib/pocketbase';
import { useQuery } from "react-query";

export default function useVerified() {
    const id = pb.authStore.model?.id;
    
    async function checkVerified() {
        const userdata = await pb.collection("Cliente").getOne(id);
        return userdata.verified;
    }

    return useQuery({ queryFn: checkVerified, queryKey: ['check-verified', id] });
}

export async function requestVerificationMail() {
    const email = pb.authStore.model.email;
    const res = await pb.collection("Cliente").requestVerification(email);
    if (res) alert("Mail de verificación enviado!! Revise su Bandeja de Entrada!!");
}