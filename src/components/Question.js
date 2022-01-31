import Style from '../components/Question.module.css';

function Res({res}) {
    return  <div className={Style.resContainer}>
                <p className={Style.res}>{ res }</p>
                <a href="/" className={Style.button}> votar </a>     
            </div>
}

export default function Question({ques, res}) {
    return (
        <div className={Style.container}>
            <h2 className={Style.question}>{ques}</h2>
            {
                res.map(r => {
                    return <Res key={r.id} res={r.res}/>
                })
            }
        </div>
    )

}
