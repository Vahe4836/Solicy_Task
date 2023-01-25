import { useState } from 'react';
import '../Header.scss';



export default function SortButton({cards, onSortArrayOfObject}) {

    const [filtredCards, setFiltred] = useState(0);

    return (
        <button
            className='header_button'
            onClick={(event) => {
                event.preventDefault();
                onSortArrayOfObject(cards);
                // console.log("current",cards);
            }}
        >
            Sort cards
        </button>
    )
}