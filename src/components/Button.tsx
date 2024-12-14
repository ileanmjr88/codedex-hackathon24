import react from '@astrojs/react';

interface ButtonProps {
    text: string;
    className?: string;
    onClick: () => void;
};

const Button = ({ text, className, onClick }: ButtonProps) => {
    return (
        <button className={`${className ? className : 'bg-fushia justify-start items-center text-lg p-1 px-4 border hover:bg-yellow hover:text-black'}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;