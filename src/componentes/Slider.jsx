import frailejon from '../images/Frailejon.webp'
import Cera from '../images/palmaCera.jpg'
import Roble from '../images/Elrobleandino.jpg'
import Nogal from '../images/Nogal.jpg'

export default function Slider() {
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={frailejon} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>El mundo Frailejon</h5>
        <p>Los frailejones absorben la humedad de la niebla y la conducen al suelo por medio de sus tallos.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Cera} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>La palma de cera</h5>
        <p>El arbol nacional de Colombia</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Roble} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>El Roble andino</h5>
        <p>El roble se halla principalmente en zonas andinas de Colombia como Boyacá y Santander.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Nogal} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>El Nogal</h5>
        <p>Un árbol de nogal adulto puede llegar a producir hasta 5 millones de flores anualmente.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}