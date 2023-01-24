import Card from './Card/Card';
import './CardsBlock.scss';


export default function CardsBlock({cards}) {



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
                                        random_num={card.random_num}
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