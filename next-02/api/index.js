import axios from "axios";

const urlBase = "https://parseapi.back4app.com/classes/Task";
const headers = {
  "X-Parse-Application-Id": "ortn41B33LH89PU5JexteP1etYzjfH6AdtSi6CHb",
  "X-Parse-REST-API-Key": "5wPkNP3a0Aq3Kbn2ddeFTQOBVDaMT0giiSGYt5Sx",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export const getTasks = async () => {
  const { data } = await axios.get(urlBase, {
    headers,
  });
  return data;
};

export const addTask = async (newTask) => {
  const { data } = await axios.post(urlBase, newTask, {
    headers: headersJson,
  });
  console.log("retorno da nova task vinda do back4app: ", data);
  return data;
};
