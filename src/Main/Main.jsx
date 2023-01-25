import { useReducer } from 'react';
import Instructions from './Instructions/Instructions';
import MainBlock from './MainBlock/MainBlock';
import './Main.scss';

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
    } else if (action.type === "sort") {
        return state.sort((a,b) => (a.random_num > b.random_num) ? 1 : -1);
    }
}



export default function Main() {

    let storedCards = JSON.parse(localStorage.getItem("cards"));

    console.log("1", storedCards);

    if (storedCards === null || storedCards === undefined) {
        storedCards = [];
    }


    const [cards,dispatch] = useReducer(reducer,storedCards);

    console.log("2", storedCards);

    localStorage.setItem("cards",JSON.stringify(cards));

    return (
        <div className='main'>
            <MainBlock
                cards={cards}
                storedCards={storedCards}

                onSortArrayOfObject={(filtredCards) => {
                    dispatch({
                        type: "sort",
                        payload: {
                            filtredCards: storedCards
                        }
                    })
                }}
                // onSortArrayOfObject={onSortArrayOfObject}

                onAdd={(random_num) => {
                    dispatch({
                        type: "add",
                        payload: {
                            random_num: random_num
                        }
                    })
                }}
                // onAdd={onAdd}

                onDelete={(card) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: card.id
                        }
                    });
                }}
                // onDelete={onDelete}

            />
            <Instructions />
        </div>
    )
}