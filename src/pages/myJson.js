import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { postData } from '../lib/fetchMyAPI';

export default function myJson() {
    const [postedDataArray, setPostedDataArray] = useState([]);

    useEffect(() => {
        async function postMultipleData() {
            const post1 = await postData(1, 'Alien', 'Another satisfied client 👍', 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/453204202_903797045115879_7609125770462496487_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEpMkUTXtTTxnbGn168M9SHilto8QwB5riKW2jxDAHmuDJl_PBtfVPrv43IcfWBJUYhSKzl1zK_xQAREkIZmZpH&_nc_ohc=oVVOe1-lZSkQ7kNvgEV589a&_nc_ht=scontent.fbkk5-5.fna&oh=00_AYCXlPxyr0sJepmV9xELL95oyX8zoFbbRzRlc4EhE9OCjA&oe=66C7574A', 'https://www.facebook.com/share/p/URDkX3ouUE1ym1Bq/');
            const post2 = await postData(2, 'Ford', 'แนบรูปเด็กปี1 😂😂', 'https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/354241472_3524180704533156_5129452644407664655_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeG8_idjc5KGZYS2VgzNf0jyUXnrThYcS6FReetOFhxLodVScXJwIXFO3NMSTY9VRr_xtTkygN3ZLWRIZQOR92Gu&_nc_ohc=IZ-w_tb6q8sQ7kNvgHm0APA&_nc_ht=scontent.fbkk5-6.fna&oh=00_AYAPokFbTHe19Z17KAyhrOWX69MPv6HNb8B6vh1162v9fg&oe=66C753CF', 'https://www.facebook.com/share/p/YZfzTSrU68CA5VsX/');
            const post3 = await postData(3, 'Yusuf Dikec', 'This man won with no fancy equipment.', 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/453315837_1026116895541051_1778649723594364416_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwMnFvmMV5L1QzYQOYagy6pToJox4I9qilOgmjHgj2qI69GFRK1krvyBhBqiOZRurRCrLRJy-jbBsFgmGDsdUe&_nc_ohc=PqAPM08zwXsQ7kNvgEpN96A&_nc_ht=scontent.fbkk5-3.fna&oh=00_AYC6saozWpOWKqYXpDs-YPs7Q7GaXuboUw3qz0IN35AzJg&oe=66C747D8', 'https://www.facebook.com/cnew.official/posts/pfbid0xciHdKFk8nJ62m17dKUF4LyWnJZhm6p9bgKzGGtdpsG4MUbNhiNt1EGC8frK6ckGl');
            const post4 = await postData(4, 'Internet Culture', 'What to Know About the Allegations Against MrBeast and His Company', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/1200px-MrBeast_2023_%28cropped%29.jpg', 'https://time.com/7010441/mrbeast-accusations-explained/');
            const post5 = await postData(5, 'Mr. Younggu', 'He knew your location.', 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/185559486_372471664237277_2003680330556314284_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5HB30m__5oGBIsKf5je52qkR2xzfJRHiqRHbHN8lEeHxMvn7G938S6RIcUBsi8xz7mYLhZpEcAGY4Id5RSrSo&_nc_ohc=exF9GkDAY9kQ7kNvgHxx5Mc&_nc_ht=scontent.fbkk5-3.fna&oh=00_AYD1rNEmew9FdX6PoQLHNIhb5u0hcFnBqeLC0wUXvN7U0A&oe=66C74E96', 'https://www.sanook.com/music/2418617/');
            const post6 = await postData(6, 'เตือนภัยไข้เลือกออก', 'ในช่วงหน้าฝนแบบนี้กลุ่มโรคที่จะไม่พูดถึงไม่ได้ คือ “กลุ่มโรคที่มากับยุงลาย” ซึ่งกลุ่มโรคเหล่านี้จะมียุงลายเป็นพาหะนำโรค และไม่ติดต่อจากคนสู่คน โดยโรคที่พบบ่อยในประเทศไทย ได้แก่ โรคไข้เลือดออก (Dengue Fever) โรคไข้ชิคุนกุนยา (Chikungunya Fever) และโรคไข้ซิกา (Zika Fever)', 'https://www.sikarin.com/wp-content/uploads/2022/07/16381980692639-1024x1024.jpg', 'https://www.sikarin.com/doctor-articles/%e0%b9%84%e0%b8%82%e0%b9%89%e0%b9%80%e0%b8%a5%e0%b8%b7%e0%b8%ad%e0%b8%94%e0%b8%ad%e0%b8%ad%e0%b8%81-%e0%b8%ad%e0%b8%b1%e0%b8%99%e0%b8%95%e0%b8%a3%e0%b8%b2%e0%b8%a2');

            setPostedDataArray([post1, post2, post3, post4, post5, post6]);
        }

        postMultipleData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>API from My JSON</h1>
                <Link legacyBehavior href="/" passHref>
                        <a className={styles.topButton}>Go back </a>
                </Link>
            </div>
            <div className={styles.grid}>
                {postedDataArray.length > 0 ? (
                    postedDataArray.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.cardBody}>{post.body}</p>
                            {post.imageURL && (
                                <img
                                    src={post.imageURL}
                                    alt={post.title}
                                    className={styles.image}
                                />
                            )}
                            <a href={post.URL} className={styles.button}>Read More</a>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

