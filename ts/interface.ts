export type Job 
    = CreateTaskJob
    // | RetrieveTaskJob
    // | UpdateTaskJob
    // | DeleteTaskJob
    ;

export interface CreateTaskJob {
    kind: "CreateTaskJob";
    data: CreateTaskParam;
}

export type Param 
    = CreateTaskParam
    | UpdateTaskParam
    | DeleteTaskParam
    | LoginParam
    | LogoutParam
    ;

export interface CreateTaskParam {
	session_id:     number;
	title:          string;
	content:        string;
	pinned:         number; // Either 1 or 0
	reminders:      Reminder[];
}

export interface UpdateTaskParam {
    session_id: number;
	task_id:    number;
	title:      string;
	content:    string;
	pinned:     number; // Either 1 or 0
	reminders:  Reminder[];
}

export interface Reminder {
	date: number; // Epoch time in seconds
}

export interface LoginParam {
    email: string;
    password: string;
}

export interface LogoutParam {
    session_id: number;
}

export interface DeleteTaskParam {
	session_id: number;
	task_id: 	number;
}

export function hello() {
    return "heyyo";
}