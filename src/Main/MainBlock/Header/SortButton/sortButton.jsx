import { useState } from 'react';
import '../Header.scss';



export default function SortButton({cards, onSortArrayOfObject}) {
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