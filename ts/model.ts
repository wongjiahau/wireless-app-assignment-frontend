import { Job } from "./interface";

function createTask(data: CreateTaskJob) {
    const job: Job = {
        kind: "CreateTaskJob",
        data: data
    };
    executeJob(job);
}

function executeJob(job: Job) {
    sendJobToLocalStorage(job);
    if(canConnectToServer()) {
        sendJobToServer(job) 
    } else {
        saveJobToPendingQueue(job);
    }
}

function canConnectToServer(): boolean {
    
}

function sendJobToLocalStorage(job: Job) {

}

function sendJobToServer(job: Job) {

}

function saveJobToPendingQueue(job: Job) {

}