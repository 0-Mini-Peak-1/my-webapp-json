import { fetchPosts } from '../lib/fetchPosts';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home({ posts }) {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>API from JSON Placeholder</h1>
                <Link legacyBehavior href="/myJson" passHref>
                        <a className={styles.topButton}>Next page</a>
                </Link>
            </div>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.card}>
                        <img src={post.imageURL} alt={post.title} className={styles.image} />
                        <h2 className={styles.cardTitle}>{post.title}</h2>
                        <p className={styles.cardBody}>{post.body}</p>
                        <a href={post.URL} className={styles.button}>Click Here</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await fetchPosts();
    return {
        props: {
            posts,
        },
    };
}