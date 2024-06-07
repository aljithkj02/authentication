import { useState } from "react";

export const useShowPassword = () => {
    const [type, setType] = useState<'password' | 'text'>('password');

    const toggler = () => {
        setType(type === 'password' ? 'text': 'password');
    }

    return [type, toggler];
}