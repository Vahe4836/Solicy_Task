import { useState } from 'react';
import './Header.scss';



export default function Header({ cards,onAdd,sortArrayOfObject }) {

    const [random_num,setRandom_num] = useState(Math.ceil(Math.random() * 10));

    console.log("prevent",cards);

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
                        sortArrayOfObject(cards);
                        console.log("current",cards);
                    }}
                >
                    Sort cards
                </button>

            </div>
        </div>
    )
}