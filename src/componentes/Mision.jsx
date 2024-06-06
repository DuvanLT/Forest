import icono from '../images/jardineria.png'
export default function mision() {
    return(
        <>  
        <div className="mision">
        <div className="mision_text">
        <h2>Nuestra Mision con la Naturaleza</h2>
        <p>Nuestra mision es concientizar sobre los árboles que se encuentran en nuestro territorio Colombiano, conocer sobre ellos y cuidarlos, son mas de 1250 especies de árboles de los cuales el 45% lamentablemente estan en riesgo de extinción.</p>
        <div className="mision_icono">
            <img src={icono} alt="" />
        </div>
        <button>Leer más</button>
        </div>
        </div>
        </>
    )
}