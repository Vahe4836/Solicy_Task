import CardsBlock from "./CardsBlock/CardsBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './MainBlock.scss';



export default function MainBlock(){
    return(
        <div className="main_block">
            <Header />
            <CardsBlock />
            <Footer />
        </div>
    )
}