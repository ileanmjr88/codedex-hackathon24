import react from '@astrojs/react';
import Button from './Button';
interface HeaderProps {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <header className='flex justify-between items-center p-4'>
            <a href='/'>
                <Button text="Home" onClick={() => window.location.href = '/'} />
            </a>
            <h1 className='flex-grow text-center text-2xl'>{title}</h1>
        </header>
    );
};

export default Header;