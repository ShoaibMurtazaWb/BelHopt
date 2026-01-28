import clsx from 'clsx';
import type React from 'react';
import { useEffect } from 'react';

interface Props {
    type?: "warning" | "error" | "success" | "info",
    children: React.ReactNode;
    duration?: number
    heading?: string;
    variant?: "solid" | "light"
    onClose: () => void;
    autoClose?: boolean
}

export default function Alert({ type = "info", children, duration = 3000, heading, variant, onClose, autoClose = false }: Props) {

    if (!children)
        return null;

    useEffect(() => {
        if (!autoClose)
            return;
        setTimeout(() => {
            onClose();
        }, duration)
    }, [])

    return (
        <div className={`w-70
      sm:max-w-md
      lg:max-w-lg
      mx-auto
      px-4 py-2
      rounded-md
      font-inter
      border-l-3
      border-transparent
      flex
      justify-between
      
      ${clsx(
            type === "warning" && (variant === "solid" ? "bg-amber-400" : "bg-amber-200 border-l-amber-400"),
            type === "error" && (variant === "solid" ? "bg-red-400" : "bg-red-200 border-l-red-400"),
            type === "success" && (variant === "solid" ? "bg-green-400" : "bg-green-200 border-l-green-400"),
            type === "info" && (variant === "solid" ? "bg-blue-400" : "bg-blue-200 border-l-blue-400"),
        )}

`}>
            {heading && <h2 className="font-primary">{heading}</h2>}


            <h2 className="font-primary">{children}</h2>
            <div className="text-blue" onClick={onClose}>
            </div>
        </div>
    );
}
