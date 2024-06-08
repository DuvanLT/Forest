import React from 'react'
import arbol1 from './images/Abarco.jpg';
import arbol2 from './images/Antioquesis.jpeg';
import arbol3 from './images/Cofolloi.jpg';
import arbol4 from './images/Duguetia.jpg';
import arbol5 from './images/Espitanas.jpg';
import arbol6 from './images/Matasia.webp';
import arbol7 from './images/Melicoccus.jpeg';
import arbol8 from './images/Simira.jpg';
import Card from './componentes/Card'
import Accordion from './componentes/Accordion';
export default function Arboles() {
    return (
        <>
            <section className='trees'>

                <section className="trees_container">
                    <h1>Arboles</h1>
                    <div className='tree-card-container'>
                        <Card title="Cariniana pyriformis" img={arbol1} text="Cariniana pyriformis, o abarco, es un árbol amenazado de las selvas de Colombia, valorado por su madera dura y fruto comestible. Crece en climas húmedos tropicales." link='https://colombia.inaturalist.org/taxa/190298-Cariniana-pyriformis'>
                        </Card>
                        <Card title="R antioquensis" img={arbol2} text="El chupo colorado o laurel es un árbol de 15 m en bosque húmedo tropical, en Peligro Crítico (CR) por extracción de rocas, deforestación y ganadería.">
                        </Card>
                        <Card title="Cybianthus cogolloi" img={arbol3} text="Es un árbol de hasta 12 metros de alto y se incluyó en Lista Roja de la UICN como En Peligro (EN), debido a la reducción de su población por la ampliación de la frontera agropecuaria.">
                        </Card>
                        <Card title="Duguetia colombiana" img={arbol4} text="Crece en altitudes entre los 100 a 400 msnm. La fruta tiene un agradable sabor dulce similar al del zapote y cada sección que la compone tiene una semilla adentro.">
                        </Card>
                        <Card title="Pseudoxandra sclerocarpa" img={arbol5} text="Se utiliza en la medicina tradicional como un antiparasitario. Desde el punto de vista farmacológico y también tienen actividad espasmolítica.">
                        </Card>
                        <Card title="Matisia serpicostata" img={arbol6} text="Está en el listado de la UICN en categoría de Peligro Crítico (CR), debido a actividades antrópicas, es decir transformaciones del ser humano, como deforestación.">
                        </Card>
                        <Card title="Melicoccus antioquensis" img={arbol7} text="Es un árbol de hasta 26 metros de alto, categorizado en Peligro Crítico (CR) en la Lista Roja de la UICN, principalmente por deforestación para ampliación de frontera agrícola">
                        </Card>
                        <Card title="Simira hirsuta" img={arbol8} text="Son árboles de hasta 25 metros de alto con tallos hirsutos y hojas ligeramente oblanceoladas. Está categorizada como En Peligro (EN) en la Lista Roja de la UICN">
                        </Card>
                    </div>
                </section>
                <Accordion title1="hola" descripcion1="hola" title2="hola" descripcion2="hola" title3="hola" descripcion3="hola" />
            </section>

        </>
    )

}
