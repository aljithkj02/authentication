import React from "react"

interface ButtonProps {
    children: React.ReactNode,
    className?: string;
    handleClick?: () => void;
    type?: 'button' | 'submit';
}

export const Button = ({children, className, handleClick, type}: ButtonProps) => {
  return (
    <button type={type || 'button'} onClick={handleClick ?? function(){}}
        className={`px-4 py-3 bg-blue-500 text-white w-full ${className ?? ''}`}
    >
        {children}
    </button>
  )
}
