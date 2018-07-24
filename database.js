/**
 * Example of usage:
 * const result = await DBLogin("john@gmail.com", "1234")
 * 
 */

function IPAddress(api) {
    /**
     * Example of api is login
     */
    const target = "http://192.168.0.103:5000/api/" + api;
    console.log("Sending request to " + target);
    return target;
}

export async function DBLogin(email, password) {
    const result = await fetch(
        IPAddress("login"),
        JsonRequest("POST", { email, password })
    );
    return await result.json();
}

export async function DBFetchTask(email) {
    const result = await fetch(
        IPAddress("task/" + email),
        JsonRequest("GET")
    );
    return await result.json();
}

export async function DBDeleteTask(task_id /* number */) {
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("DELETE", {task_id})
    );
    return await result.json();
}

export async function DBUpdateTask(task_id, title, content, pinned, reminders) {
    const body = {
        task_id,   //: number;
        title,     //: string;
        content,   //: string;
        pinned,    //: number; // Either 1 or 0
        reminders //: {date: number}[]
    }
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("PUT", body)
    );
    return await result.json();
}


export async function DBCreateTask(user_id, title, content, pinned, reminders) {
    const body = {
        user_id,    //:   number;
        title,      //:   string;
        content,    //:   string;
        pinned,     //:   number; // Either 1 or 0
        reminders   //:   {date: number}[]
    };
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("POST", body)
    );
    return await result.json();
}

function JsonRequest(method /*: POST | GET | DELETE | PUT */, body) {
    console.log("Body = ");
    console.log(body);
    if(body) {
        return {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
    } else {
        return {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }
}