// import { useReducer } from 'react';
import CardsBlock from "./CardsBlock/CardsBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './MainBlock.scss';



// function reducer(state,action) {
//     if (action.type === "add") {
//         return [
//             {
//                 id: Math.random(),
//                 random_num: action.payload.random_num,
//             },
//             ...state
//         ];
//     } else if (action.type === "delete") {
//         return state.filter((card) => card.id !== action.payload.id);
//     } else if (action.type === "sort") {
//         return state.sort((a,b) => (a.random_num > b.random_num) ? 1 : -1);
//     }
// }



export default function MainBlock({cards, storedCards, onSortArrayOfObject, onAdd, onDelete}) {

    // let storedCards = JSON.parse(localStorage.getItem("cards"));

    // if (storedCards === null || storedCards === undefined) {
    //     storedCards = [];
    // }

    // const [cards,dispatch] = useReducer(reducer,storedCards);

    // localStorage.setItem("cards",JSON.stringify(cards));


    // function sortArrayOfObject(arr) {
    //     console.log("sort");
    //     return arr.sort((a,b) => (a.random_num > b.random_num) ? 1 : -1);
    // }

    return (
        <div className="main_block">

            <Header

                cards={cards}
                storedCards={storedCards}

                // onSortArrayOfObject={(filtredCards) => {
                //     dispatch({
                //         type: "sort",
                //         payload: {
                //             filtredCards: filtredCards
                //         }
                //     })
                // }}

                onSortArrayOfObject={onSortArrayOfObject}

                // onAdd={(random_num) => {
                //     dispatch({
                //         type: "add",
                //         payload: {
                //             random_num: random_num
                //         }
                //     })
                // }}
                onAdd={onAdd}

            />

            <CardsBlock
                cards={cards}

                storedCards={storedCards}

                // onDelete={(card) => {
                //     dispatch({
                //         type: "delete",
                //         payload: {
                //             id: card.id
                //         }
                //     });
                // }}

                onDelete={onDelete}
            />

            <Footer />

        </div>
    )
}