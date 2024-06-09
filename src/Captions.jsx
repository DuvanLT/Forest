import Card from "./componentes/Card";
import Slider from "./componentes/Slider";
import Cambulo from './images/cambulo.jpg'

export default function Captions (){
    return(
        <>
        <Slider />
        <section className='trees'>
        <section className="trees_container">
        <h1>Arboles Florales</h1>
        <div className='tree-card-container'>
        <Card  title="Q" text="Q" img={Cambulo}/>
        <Card  title="Q" text="Q" img={Cambulo}/>
        <Card  title="Q" text="Q" img={Cambulo}/>
        <Card  title="Q" text="Q" img={Cambulo}/>
        </div>
        </section>
        </section>
        
        </>
    )

}
