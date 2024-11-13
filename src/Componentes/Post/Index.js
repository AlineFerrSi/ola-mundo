import styles from './Post.module.css'

export default function Post({post}){
    return (
        <div className={styles.Post}>
            <img 
            className={styles.capa}
            src={`/assets/posts/${post.id}/capa.png`}
            alt='Imagem de Capa Do Post'
            />
            
        </div>
    )
}