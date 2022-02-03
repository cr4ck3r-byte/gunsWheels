import Style from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faInstagram, faTelegram, faTiktok, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return  <footer className={Style.footer}>
                <ul className={Style.containerElements}>
                    <a href="https://t.me/gunswheels" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                        <li className={Style.elements}><FontAwesomeIcon icon={faTelegram} color='#fff' size='2x'/></li>
                    </a>
                    <a href="https://discord.gg/v7RddAAxcT" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                        <li className={Style.elements}><FontAwesomeIcon icon={faDiscord} color='#fff' size='2x'/></li>
                    </a>
                    <a href="https://twitter.com/GunsWheels" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                        <li className={Style.elements}><FontAwesomeIcon icon={faTwitter} color='#fff' size='2x'/></li>
                    </a>
                    <a href="https://instagram.com/gunswheels" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                        <li className={Style.elements}><FontAwesomeIcon icon={faInstagram} color='#fff' size='2x'/></li>
                    </a>
                    <a href="https://vm.tiktok.com/ZMLF2rYXf" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                        <li className={Style.elements}><FontAwesomeIcon icon={faTiktok} color='#fff' size='2x'/></li>
                    </a>
                </ul>
                <h2 className={Style.copy}>©2022 GunsWheels Nft</h2>
            </footer>;
}
