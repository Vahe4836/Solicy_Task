import { useState } from 'react';
import '../Header.scss';



export default function AddButton({onAdd}) {

    const [random_num,setRandom_num] = useState(Math.ceil(Math.random() * 10));


    return (
        <button
            className='header_button'
            onClick={(evt) => {
                evt.preventDefault();
                setRandom_num(Math.ceil(Math.random() * 10));
                onAdd(random_num);
                // console.log("Hello");
            }}
        >
            Add card
        </button>
    )
}