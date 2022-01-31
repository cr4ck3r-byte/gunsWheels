import Question from "./Question";
import Style from "./Poll.module.css"

const Questions = [
    {
        id: 1,
        question: "¿Cuál es el ROI mínimo que debería de tener el juego?",
        res: [
            {
                id: 1,
                res: "Roi corto (1 mes)"
            },
            {   
                id: 2,
                res: "Mediano (2 meses)"
            },
            {   
                id: 3,
                res: "Largo (3 meses)"
            }
        ]
    },
    {
        id: 2,
        question: "¿Qué piensa usted que sería más factible respecto a los usos de los NFT's?",
        res: [
            {   
                id: 1,
                res: "Un límite de uso por cada NFT y al llegar al límite se quema"
            },

            {
                id: 2,
                res: "Sin un límite de uso, pero si estaría limitado su uso diario.(Tenga en cuenta que la segunda opción no quemaría los NFTs)"
            }
        ]
    },
    {
        id: 3,
        question: "¿Quiere usted que el juego tenga ORACULO?",
        res: [
            {
                id: 1,
                res: "Si"
            },
            {
                id: 2,
                res: "No",
            },
            {
                id: 3,
                res: "Tal vez"
            }
        ]
    },
    {
        id: 4,
        question: "¿Qué tipo de oráculo te gustaría que aplicáramos en el juego?",
        res: [
            {
                id: 1,
                res: "opción a"
            },
            {
                id: 2,
                res: "opción b",
            }
        ]
    }
]

export default function Poll() {

    return  <div className={Style.containerQuestions}>
                {
                    Questions.map(q=>{
                        return <Question key={q.id} ques={q.question} res={q.res}/>
                    })
                }
            </div>;
}
