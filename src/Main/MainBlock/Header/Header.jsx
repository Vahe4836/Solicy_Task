// import { useState } from 'react';
import AddButton from './AddButton/addButton';
import './Header.scss';
import SortButton from './SortButton/sortButton';



export default function Header({ cards,storedCards, onSortArrayOfObject,onAdd }) {

    // const [random_num,setRandom_num] = useState(Math.ceil(Math.random() * 10));

    // console.log("prevent",cards);

    return (
        <div className="header">
            <div className='header_buttons_div'>

                <AddButton
                    onAdd={onAdd}
                />

                <SortButton
                    cards={cards}
                    storedCards={storedCards}
                    onSortArrayOfObject={onSortArrayOfObject}
                />

            </div>
        </div>
    )
}