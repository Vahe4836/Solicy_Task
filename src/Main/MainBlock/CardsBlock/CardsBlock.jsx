import Card from './Card/Card';
import './CardsBlock.scss';


export default function CardsBlock({cards, onDelete}) {

    // const sortArrayOfObject = (arr) => {
    
    //     return arr.sort((a, b) => (a.random_num > b.random_num) ? 1 : -1)
        
    //   }
  
    //   sortArrayOfObject(cards);


    return (
        <div className="cards_block">
            <div className='cards_block_div'>
                <div className='cards_block'>
                    <div className='cards_div'>
                        {cards.map((card) => {
                            return(
                                <>
                                    <Card 
                                        key={card.id}
                                        card={card}
                                        random_num={card.random_num}
                                        onDelete={onDelete}
                                    />
                                </>
                            )
                        })}
                    </div>
                </div> 
            </div> 
        </div>
    )
}