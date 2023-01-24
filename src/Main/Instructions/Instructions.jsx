import './Instructions.scss';


export default function Instructions() {
    return (
        <div className="instructions">
            <div className="instructions_div">
                <div className='instructions_elements'>
                    <span className='span_text'>Press the "add card" button to add the new Card.</span>
                    <span className='span_text'>Use the "sort cards" button to sort the Cards by the increase.</span>
                    <span className='span_text'>Press an X icon on the top right to delete them.</span>
                </div>
            </div>

        </div>
    )
}