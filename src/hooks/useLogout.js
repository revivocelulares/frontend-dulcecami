import pb from '../lib/pocketbase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
    const [dummy, setDummy] = useState(0);
    const navigate = useNavigate();

    function logout() {
        pb.authStore.clear();
        setDummy(Math.random());
        navigate('/');
    }

    return logout;
}