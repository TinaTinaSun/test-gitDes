import './index.scss';
import Loader from'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => { 
    return(
        <div className="home-page">
            <h1> 
                <AnimatedLetters strArray={"Tina's Portfolio".split('')} startIdx={1} />
                <br />
                <AnimatedLetters strArray={"Front End Dev".split('')} startIdx={16} />
            </h1>
            <Loader type="line-scale" color="#fed002" width={500} />    
        </div>
    
    )

}

export default Home;