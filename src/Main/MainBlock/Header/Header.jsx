import { useState } from 'react';
import './Header.scss';



export default function Header({ storedCards,onAdd,sortArrayOfObject }) {

    const [random_num,setRandom_num] = useState(Math.ceil(Math.random() * 10));
    // setRandom_num(Math.ceil(Math.random() * 1000));

    console.log("prevent", storedCards);

    return (
        <div className="header">
            <div className='header_buttons_div'>

                <button
                    className='header_button'
                    onClick={(evt) => {
                        evt.preventDefault();
                        setRandom_num(Math.ceil(Math.random() * 10));
                        onAdd(random_num);
                        console.log("Hello");
                    }}
                >
                    Add card
                </button>

                <button
                    className='header_button'
                    onClick={(evt) => {
                        evt.preventDefault();
                        sortArrayOfObject(storedCards);
                        console.log("current", storedCards);
                    }}
                >
                    Sort cards
                </button>

            </div>
        </div>
    )
}