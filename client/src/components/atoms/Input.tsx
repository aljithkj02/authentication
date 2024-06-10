import { ChangeEvent } from "react";
import { Button } from "./Button";

interface InputProps {
    label ?: string;
    type : string;
    placeholder ?: string;
    className?: string;
    value: string;
    name: string;
    isPassword?: boolean;
    toggler?: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({label, type, placeholder, className, value, handleChange, name, isPassword, toggler}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
        { label && <label>{label}</label> }
        <div className="flex">
            <input type={type} placeholder={placeholder || ''} 
                className={`py-2 px-4 border-2 rounded-md ${isPassword ? 'w-[85%]': 'w-full'} ${className ?? ''}`}
                value={value} onChange={handleChange} name={name}
            />
            { isPassword && <Button handleClick={toggler} className="w-[15%]">{type === 'password' ? 'show': 'hide'}</Button>}
        </div>
    </div>
  )
}
