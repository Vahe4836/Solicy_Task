import AddButton from './AddButton/addButton';
import SortButton from './SortButton/sortButton';
import './Header.scss';



export default function Header({ onSortArrayOfObject,onAdd }) {

    return (
        <div className="header">
            <div className='header_buttons_div'>

                <AddButton
                    onAdd={onAdd}
                />

                <SortButton
                    onSortArrayOfObject={onSortArrayOfObject}
                />

            </div>
        </div>
    )
}