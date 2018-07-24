function IPAddress(api) {
    /**
     * Example of api is login
     */
    return "http://192.168.0.103:5000/api/" + api;
}
export async function DBLogin(email, password) {
    const result = await fetch(
        IPAddress("login"),
        POST_REQUEST(JSON.stringify({ email, password }))
    );
    return await result.json();
}

function POST_REQUEST(body) {
    return {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    };
}