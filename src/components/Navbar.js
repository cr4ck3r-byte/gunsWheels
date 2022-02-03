import React, { useEffect, useState } from 'react'
import BtnLink from './BtnLink'
import Style from './Navbar.module.css'
import btnStyle from './BtnLink.module.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import { faBars, faHome, faFile, faMap, faCoins, faUser } from '@fortawesome/free-solid-svg-icons'
import LogoMobile from '../assets/logo_gunswheels.png';
import {faInstagram, faTelegram, faTiktok, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'


const whitepaperLink = "https://guns-wheels.gitbook.io/gunswheels-whitepaper/";

export default function Navbar() {

    
    const [menu, setMenu] = useState({ style: Style.menu_off, active: false});
    const handleMenu = () => {
        if (menu.active) {
            setMenu({ ...menu, style: Style.menu_off, active: false});
        } else {
            setMenu({ ...menu, style: Style.menu_on, active: true });
        }
    }
    const localtion = useLocation();
    const [locateOfUrl, setLocateOfUrl] = useState('/home');
    useEffect(() => {
        setLocateOfUrl(localtion.pathname);
    },[localtion])

    return (
        <div className={Style.navContainer} id="up">
            <div className={Style.navMobile} >
                <div className={Style.btnBars}>
                <FontAwesomeIcon icon={faBars} size='2x' color='#FCBE03' onClick={handleMenu} />
                </div>
                
                <Link to="/home" className={Style.logoLink}>
                    <img className={Style.logoNavMobile} src={LogoMobile} alt="logo" />
                </Link>

                <div className={Style.btnUser}>
                    <FontAwesomeIcon icon={faUser} size='2x' color='#FCBE03'/>
                </div>                                


                <div className={menu.style}>
                    <Link to="/home" className={Style.elementMenuLink} onClick={handleMenu}>
                        <div className={Style.menuElement}>
                            <div className={Style.iconMenuContainer}>
                            <FontAwesomeIcon icon={faHome} size='lg' color='#FCBE03'/>
                            </div>
                            <div className={Style.textContainer}>
                                <h2 className={Style.textMenu}>Home</h2>
                            </div>
                        </div>
                    </Link>
                    <a target="_blank" rel="noreferrer" href={whitepaperLink} className={Style.elementMenuLink} onClick={handleMenu}>
                        <div className={Style.menuElement}>
                            <div className={Style.iconMenuContainer}>
                            <FontAwesomeIcon icon={faFile} size='lg' color='#FCBE03'/>
                            </div>
                            <div className={Style.textContainer}>
                                <h2 className={Style.textMenu}>Whitepaper</h2>
                            </div>
                        </div>
                    </a>
                    <Link to="/roadmap" className={Style.elementMenuLink} onClick={handleMenu}>
                        <div className={Style.menuElement}>
                            <div className={Style.iconMenuContainer}>
                            <FontAwesomeIcon icon={faMap} size='lg' color='#FCBE03'/>
                            </div>
                            <div className={Style.textContainer}>
                                <h2 className={Style.textMenu}>Roadmap</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/home" className={Style.elementMenuLink} onClick={handleMenu}>
                        <div className={Style.menuElement}>
                            <div className={Style.iconMenuContainer}>
                            <FontAwesomeIcon icon={faCoins} size='lg' color='#FCBE03'/>
                            </div>
                            <div className={Style.textContainer}>
                                <h2 className={Style.textMenu}>Tokenomic</h2>
                            </div>
                        </div>
                    </Link>
                    <div className={Style.links}>
                        <a href="https://t.me/gunswheels" target="_blank" rel='noreferrer' className={Style.elementsLinks}>
                            <FontAwesomeIcon icon={faTelegram} color='#FCBE03' size='2x'/>
                        </a>
                        <a href="https://discord.gg/v7RddAAxcT" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                            <FontAwesomeIcon icon={faDiscord} color='#FCBE03' size='2x'/>
                        </a>
                        <a href="https://twitter.com/GunsWheels" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                            <FontAwesomeIcon icon={faTwitter} color='#FCBE03' size='2x'/>
                        </a>
                        <a href="https://instagram.com/gunswheels" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                            <FontAwesomeIcon icon={faInstagram} color='#FCBE03' size='2x'/>
                        </a>
                        <a href="https://vm.tiktok.com/ZMLF2rYXf" target="_blank" rel='noreferrer' className={Style.elementsLink}>
                            <FontAwesomeIcon icon={faTiktok} color='#FCBE03' size='2x'/>
                        </a>
                    </div>
                </div>
            </div>



            <div className={Style.nav}>
                <Link to="/home">
                    <Logo width="190"/>
                </Link>
                <div className={Style.nav_slider}>
                    <BtnLink text="Home" to="/home" color={locateOfUrl === '/home' || locateOfUrl === '/' ? btnStyle.btn_primary : btnStyle.btn_neutral}/>
                    <a target="_blank" rel="noreferrer" href={whitepaperLink} className={btnStyle.btn_neutral}>Whitepaper</a>
                    <BtnLink text="Roadmap" to="/roadmap" color={locateOfUrl === '/roadmap' ? btnStyle.btn_primary : btnStyle.btn_neutral}/>
                    <BtnLink text="Tokenomic" to="/home" color={locateOfUrl === '/tokenomic' ? btnStyle.btn_primary : btnStyle.btn_neutral}/>
                </div>
                <div className={Style.btn_container}>
                    <BtnLink text='Presale' to="/home" color={btnStyle.btn_secondary} />
                    <BtnLink text='Sign Up' to="/home" color={btnStyle.btn_primary}/>
                </div>
            </div>
        </div>
    )
}
