import React from "react";

interface ButtonProps {
    label: string;
    onClick?: (event: React.FormEvent) => void;
    classList?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (button: ButtonProps) => {
    return (
        <button onClick={button.onClick} className={`rounded-lg py-2 px-4 ${button.classList}`} disabled={button.disabled}>
            {button.label}
        </button>
    );
}

export default Button;
