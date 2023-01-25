import '../Header.scss';


export default function SortButton({ onSortArrayOfObject }) {

    return (
        <button
            className='header_button'
            onClick={onSortArrayOfObject}
        >
            Sort cards
        </button>
    )
}