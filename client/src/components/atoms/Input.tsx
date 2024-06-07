import { ChangeEvent } from "react";

interface InputProps {
    label ?: string;
    type : string;
    placeholder ?: string;
    className?: string;
    value: string;
    name: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({label, type, placeholder, className, value, handleChange, name}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
        { label && <label>{label}</label> }
        <input type={type} placeholder={placeholder || ''} 
            className={`p-2 border-2 rounded-md ${className ?? ''}`}
            value={value} onChange={handleChange} name={name}
        />
    </div>
  )
}
