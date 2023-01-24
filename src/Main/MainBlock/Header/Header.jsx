import { useState } from 'react';
import './Header.scss';



export default function Header({ onAdd }) {

    const [random_num, setRandom_num] = useState(Math.ceil(Math.random() * 1000));

    // setRandom_num(Math.ceil(Math.random() * 1000));

    return (
        <div className="header">
            <div className='header_buttons_div'>
                <button
                    className='header_button'
                    onClick={(evt) => {
                        evt.preventDefault();
                        setRandom_num(Math.ceil(Math.random() * 1000));
                        onAdd(random_num);
                        console.log("Hello");
                    }}
                >
                    Add card
                </button>
                <button className='header_button'>Sort cards</button>
            </div>
        </div>
    )
}