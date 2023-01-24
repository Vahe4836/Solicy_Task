import './Card.scss';



export default function Card({ random_num }) {
    return (
        <div className="card">
            <div className='button_delete_div'>
                <button className='button_delete'>x</button>
            </div>
            <div className='random_num'>
                {random_num}
            </div>
        </div>
    )
}