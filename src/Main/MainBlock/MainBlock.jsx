// import { useReducer } from 'react';
import CardsBlock from "./CardsBlock/CardsBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './MainBlock.scss';



export default function MainBlock({cards, storedCards, onSortArrayOfObject, onAdd, onDelete}) {
    return (
        <div className="main_block">

            <Header
                cards={cards}
                storedCards={storedCards}
                onSortArrayOfObject={onSortArrayOfObject}
                onAdd={onAdd}

            />

            <CardsBlock
                cards={cards}
                storedCards={storedCards}
                onDelete={onDelete}
            />

            <Footer />

        </div>
    )
}