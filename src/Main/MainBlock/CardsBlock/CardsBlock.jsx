import Card from './Card/Card';
import './CardsBlock.scss';


export default function CardsBlock({cards, onDelete}) {

    return (
        <div className="cards_block">
            <div className='cards_block_div'>
                <div className='cards_block'>
                    <div className='cards_div'>
                        {cards.map((card) => {
                            return(
                                <div key={card.id}>
                                    <Card 
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