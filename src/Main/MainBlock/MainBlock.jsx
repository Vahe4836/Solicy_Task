import CardsBlock from "./CardsBlock/CardsBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";



export default function MainBlock({cards, storedCards, onSortArrayOfObject, onAdd, onDelete}) {
    return (
        <div className="main_block">

            <Header
                onSortArrayOfObject={onSortArrayOfObject}
                onAdd={onAdd}
            />

            <CardsBlock
                cards={cards}
                onDelete={onDelete}
            />

            <Footer />

        </div>
    )
}