import Link from "next/link";
import styles from "./home.module.css";

export default async function Home() {


    const res = await fetch("https://jsonplaceholder.typicode.com/albums ")

    const albums = await res.json()


    return (

        <div className={styles["home-container"]}>
            <h1 className={styles.title}>Anasayfa- click on an album</h1>

            {albums.map((album) => (
                <div className={`${styles.flex} ${styles["flex-col"]} ${styles["gap-3"]} ${styles["mt-4"]}`}
                     key={album.id}>
                    <h3 className={styles["album-title"]}>{album.title}</h3>
                    <Link href={`albums/${album.id}`} className={styles["link-button"]}>View album!</Link>
                </div>))}

        </div>

    )
}