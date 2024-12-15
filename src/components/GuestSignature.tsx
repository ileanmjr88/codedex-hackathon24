import react from '@astrojs/react';

interface GuestSignatureProps {
    name: string;
    date: string;
    comment: string;
};

const GuestSignature = ({name, date, comment} : GuestSignatureProps) => {
    return (
        <div className='flex justify-center items-center py-4'>
            <h4 className='text-center text-lg text-yellow'>{name}</h4>
            <p className='text-center text-sm text-green'>{date}</p>
            <p className='text-center text-sm text-blue'>{comment}</p>
        </div>
    );
};

export default GuestSignature;