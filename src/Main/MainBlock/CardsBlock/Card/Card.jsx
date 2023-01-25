import './Card.scss';



export default function Card({ card,random_num,onDelete }) {
    return (
        <div className="card">
            <div className='button_delete_div'>
                <button
                    className='button_delete'
                    onClick={() => {
                        onDelete(card);
                    }}
                >x</button>
            </div>
            <div className='random_num'>
                {random_num}
            </div>
        </div>
    )
}