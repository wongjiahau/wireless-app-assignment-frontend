import { AsyncStorage } from "react-native"

export async function saveSessionId(session_id) {
  console.log(session_id);
  await storeData("session_id", session_id);
}

export async function retrieveSessionId(session_id) {
  return await retrieveData("session_id");
}

function appId() {
  return "@task_reminder:";
}

async function storeData(key /*string*/, value /*string*/) {
  try {
    await AsyncStorage.setItem(appId() + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
    alert("error saving data")
  }
}

async function retrieveData(key /*string*/) {
  try {
    const data = await AsyncStorage.getItem(appId() + key);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    alert("Can't fetch data");
  }
}