import Banner from "Componentes/Banner/Index";
import styles from "./Inicio.module.css"
import posts from 'json/posts.json'
import Post from "Componentes/Post/Index";

export default function Inicio(){
    return(
        <main>
           <Banner />
            <ul className={styles.posts}></ul>
            {posts.map((post) => (
                <li key={post.id}> 
                <Post post={post} />
                </li>
            ))}
        </main>
        
    )
}