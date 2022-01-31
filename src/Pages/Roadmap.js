import bg from '../assets/backg_roadmap.jpg';
import Style from '../styles/Roadmap.module.css';
import roadmap from '../assets/ROADMAP.png';
export default function Roadmap() {
    return <>
                <img
                src={bg}
                alt="background"
                style={{
                    width: "100%",
                    position: "absolute",
                    zIndex: -1
                }}/>
                <div className={Style.Container}>
                <img src={roadmap} alt="roadmap" className={Style.roadmap} />
                </div>
          </>;
}
