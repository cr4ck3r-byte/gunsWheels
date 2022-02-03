import BinanceLogo from '../assets/BinanceLogo';
import Logo from '../assets/zyro-image.png';
import Style from '../styles/Home.module.css';
import bg from "../assets/background web page FINAL.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faPoll } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    return (
        <div>
            <img
                className={Style.bgImg}
                src={bg}
                alt="background"
            />
            <div className={Style.container}>
                <img src={Logo} alt="logo" className={Style.logo}/>
                <h2 className={Style.text}>PVP Battle Game</h2>
                <BinanceLogo id="down" className={ Style.BinanceLogo}/>
            </div>
            

            <div className={Style.containerPoll}>
                <a target="_blank" rel="noreferrer" className={Style.btnLinkPoll}href="https://docs.google.com/forms/d/e/1FAIpQLScZf8To9GcT13gz_i_RR1mTmTtd4mW6uumIXItNsexJXyNkRw/viewform?usp=pp_url">
                    <FontAwesomeIcon icon={faPoll} color="#fff" size='2x'/>
                    <h2 className={Style.textPoll}>Encuesta</h2>
                </a>
            </div>
        </div>
    )
}
