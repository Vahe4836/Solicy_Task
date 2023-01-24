import Instructions from './Instructions/Instructions';
import MainBlock from './MainBlock/MainBlock';
import './Main.scss';


export default function Main(){
    return(
        <div className='main'>
            <MainBlock />
            <Instructions />

            

        </div>
    )
}