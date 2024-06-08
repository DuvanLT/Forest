import Hero from './componentes/Hero'
import Mision from './componentes/Mision'
import CasosExito from './componentes/CasosExito'
import Vision from './componentes/Vision'
import Accordion from './componentes/Accordion'
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
        <Vision />
        <Accordion title1="hola" descripcion1="hola" title2="hola" descripcion2="hola" title3="hola" descripcion3="hola" />
        </>
    )

}
