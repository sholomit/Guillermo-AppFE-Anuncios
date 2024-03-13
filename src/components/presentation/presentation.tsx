import s from "./presentations.module.scss";
import imgBk from "../../assets/images/bk.jpg";

export default function Presentation() {
  return (
    <div className={s.container}>
      <img src={imgBk} alt="background" />
      <div className={s.containerText}>
        <h2 className={s.containerBigText}>
          Esta es la pagina comercial de <br />
          <span>PARQUE PATRICIOS</span>
        </h2>
        <p>
          Ud. encontrara informacion, datos, puntos de interes, anunciantes
          <br />
          todo para hacer de nuestro barrio cada dia mejor...
        </p>
        <button>PUBLICITE AQUI</button>
      </div>
    </div>
  );
}
