import food from "../../assets/food.png"
import aid from "../../assets/doctor.png"
import shelter from "../../assets/shelter.png"
import { Second } from "./styled"

export default function SecondPage(){
    return (
        <Second>
            <h2>Auxiliamos com:</h2>
            <div>
<article>
    <img src={food} alt="comida"/>
    <h3>
Alimentação
    </h3>
    <p>
Auxiliamos nos custos recorrentes de alimentação dos animais das ongs beneficiarias, de acordo com a idade, condições físicas, médicas e nutricionais.
 Provendo um valor propocional á necessidade de cada animal a cada doação.
    </p>
</article>

<article>
    <img src={aid} alt="saude"/>
    <h3>
Custos Médicos
    </h3>
    <p>
Ajudamos com as despesas médicas, tanto pontuais quanto recorrentes, de cunho básico e indispensável, como:
castrações, cuidados de rotina para animais com condições especiais, medicamentos recorrentes e cirurgias de emergência. 
Sem deixar, assim, de fora o essencial ao bem estar dos bichinhos!
    </p>
</article>
<article>
    <img src={shelter} alt="abrigo"/>
    <h3>
Abrigo
    </h3>
    <p>
Auxiliamos as ongs com as despesas básicas dos abrigos, sem deixar os animais vulneráveis aos riscos de se tornarem animais de rua. A certeza de uma moradia onde os animais poderão ficar 
e ser tratados é essencial para manter a integridade deles.
    </p>
</article>
</div>
        </Second>
    )
}