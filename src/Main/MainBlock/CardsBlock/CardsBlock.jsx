import Card from './Card/Card';
import './CardsBlock.scss';


export default function CardsBlock({cards, storedCards, onDelete}) {

    // const sortArrayOfObject = (arr) => {
    
    //     return arr.sort((a, b) => (a.random_num > b.random_num) ? 1 : -1)
        
    //   }
  
    //   sortArrayOfObject(cards);

    // console.log("cards", cards);


    return (
        <div className="cards_block">
            <div className='cards_block_div'>
                <div className='cards_block'>
                    <div className='cards_div'>
                        {storedCards.map((card) => {
                            return(
                                <div key={card.id}>
                                    <Card 
                                        // key={card.id}
                                        card={card}
                                        random_num={card.random_num}
                                        onDelete={onDelete}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div> 
            </div> 
        </div>
    )
}