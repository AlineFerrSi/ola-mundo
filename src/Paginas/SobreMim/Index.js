import styles from './SobreMim.module.css'

import PostModelo from "Componentes/PostModelo/Index";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo 
        fotoCapa={fotoCapa} 
        titulo = "Sobre Mim" 
        >
            
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
        </PostModelo>
    )
}