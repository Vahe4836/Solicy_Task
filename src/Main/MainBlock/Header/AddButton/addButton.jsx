import { useState } from 'react';
import '../Header.scss';



export default function AddButton({ onAdd }) {

    const [random_num,setRandom_num] = useState(Math.ceil(Math.random() * 1000));

    const ButtonDelete = (evt) => {
        evt.preventDefault();
        setRandom_num(Math.ceil(Math.random() * 1000));
        onAdd(random_num);
    }

    
    return (
        <button
            className='header_button'
            onClick={ButtonDelete}
        >
            Add card
        </button>
    )
}