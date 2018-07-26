import { LoginParam, LogoutParam, DeleteTaskParam, CreateTaskParam, UpdateTaskParam, Param } from "./interface";

/**
 * Example of usage:
 * const result = await DBLogin("john@gmail.com", "1234")
 * 
 */

export function serverAddress(): string {
    return "http://192.168.1.103:5000";
}

type API = "login" | "logout" | "task";


function IPAddress(api: API) {
    /**
     * Example of api is login
     */
    const target = `${serverAddress()}/api/${api}`;
    console.log("Sending request to " + target);
    return target;
}

export async function DBLogin(param: LoginParam) {
    const result = await fetch(
        IPAddress("login"),
        JsonRequest("POST", param)
    );
    return await result.json();
}

export async function DBLogout(param: LogoutParam) {
    const result = await fetch(
        IPAddress("logout"),
        JsonRequest("POST", param)
    );
    return await result.json();
}

export async function DBFetchTask(session_id: number) {
    const result = await fetch(
        IPAddress("task/" + session_id),
        JsonRequest("GET")
    );
    return await result.json();
}

export async function DBDeleteTask(param: DeleteTaskParam) {
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("DELETE", param)
    );
    return await result.json();
}

export async function DBUpdateTask(param: UpdateTaskParam) {
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("PUT", param)
    );
    return await result.json();
}


export async function DBCreateTask(param: CreateTaskParam) {
    const result = await fetch(
        IPAddress("task"),
        JsonRequest("POST", param)
    );
    return await result.json();
}

function JsonRequest(method : "POST" | "GET" | "DELETE" | "PUT", body: Param) {
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