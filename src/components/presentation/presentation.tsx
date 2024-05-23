import s from "./presentations.module.scss";
import imgBk from "../../assets/images/bk.jpg";
import { Link } from "react-router-dom";
import { useContextAuth } from "../../contexts/hooks/useContextAuth";

export default function Presentation() {
  const contextAuth = useContextAuth();

  return (
    <div
      className={s.container}
      style={{ top: contextAuth?.statusUser ? "70px" : undefined }}
    >
      <img src={imgBk} alt="background" />
      <div className={s.containerText}>
        <h2 className={s.containerBigText}>
          Comercial
          <br /> <span>PARQUE PATRICIOS</span>
        </h2>
        <p>
          Ud. encontrara Información útil, anuncios y eventos del barrio...
          <br />
          {/* todo para hacer de nuestro barrio cada dia mejor... */}
        </p>
        <Link to="/contact" className={s.button}>
          PUBLICITE AQUI
        </Link>
      </div>
    </div>
  );
}
