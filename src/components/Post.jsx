import styles from './Post.module.css'


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/vinirb.png'/>
                    <div>
                        <strong>Vinicius</strong>
                    </div>
                </div>
            </header>
        </article>
    );
}