import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}} />
      <h2 className={styles.Titulo}>{titulo}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  )
}