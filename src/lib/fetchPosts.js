export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
    const posts = await response.json();


    return posts.map((post, index) => ({
        ...post,
        imageURL: `https://via.placeholder.com/600/4f5b8d`,
        URL: 'https://www.facebook.com/profile.php?id=100022601572097',
    }));
}


