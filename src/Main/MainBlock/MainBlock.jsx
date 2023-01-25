import { useReducer } from 'react';
import CardsBlock from "./CardsBlock/CardsBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './MainBlock.scss';


function reducer(state,action) {
    if (action.type === "add") {
        return [
            {
                id: Math.random(),
                random_num: action.payload.random_num,
            },
            ...state
        ];
    } else if (action.type === "delete") {
        return state.filter((card) => card.id !== action.payload.id);
    }
}



export default function MainBlock() {

    let storedCards = JSON.parse(localStorage.getItem("cards"));

    if(storedCards === null || storedCards === undefined){
        storedCards = [];
    }

    const [cards, dispatch] = useReducer(reducer, storedCards);

    localStorage.setItem("cards", JSON.stringify(cards));


    function sortArrayOfObject(arr) {
        console.log("sort");
        return arr.sort((a,b) => (a.random_num > b.random_num) ? 1 : -1);
    }

    return (
        <div className="main_block">

            <Header
                cards={cards}

                sortArrayOfObject={sortArrayOfObject}

                onAdd={(random_num) => {
                    dispatch({
                        type: 'add',
                        payload: {
                            random_num: random_num
                        }
                    })
                }}

            />

            <CardsBlock
                cards={cards}

                // onChange={(newTodo) => {
                //     dispatch({
                //         type: "update",
                //         payload: {
                //             updatedTodo: newTodo
                //         }
                //     });
                // }}

                onDelete={(card) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: card.id
                        }
                    });
                }}
            />

            <Footer />

        </div>
    )
}