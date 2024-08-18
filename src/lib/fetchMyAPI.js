export async function postData(userId, title, body, imageURL, URL) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body,
                imageURL: imageURL,
                URL: URL
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await response.json();
        console.log('Posted Data:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}