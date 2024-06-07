import Hero from './componentes/Hero'
import Mision from './componentes/Mision'
import CasosExito from './componentes/CasosExito'
export default function Home (){
    return(
        <>
        <Hero />
        <Mision />
        <section className="casos">
        <CasosExito caso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a provident rem asperiores sed fuga libero delectus quia quo itaque." />
        <CasosExito caso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a provident rem asperiores sed fuga libero delectus quia quo itaque." />
        <CasosExito caso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a provident rem asperiores sed fuga libero delectus quia quo itaque." />
        <CasosExito caso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a provident rem asperiores sed fuga libero delectus quia quo itaque." /> 
        </section>
        </>
    )

}
