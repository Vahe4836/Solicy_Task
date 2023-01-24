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
        return state.filter((t) => t.id !== action.payload.id);
    } 
}



export default function MainBlock(){

    const [cards, dispatch] = useReducer(reducer, [
        {
            id: Math.random(),
            random_num: Math.ceil(Math.random() * 1000),
        },
        {
            id: Math.random(),
            random_num: Math.ceil(Math.random() * 1000),
        }
    ]);


    return(
        <div className="main_block">

            <Header 
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
            />

            <Footer />

        </div>
    )
}