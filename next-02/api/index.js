import axios from "axios";

const urlBase = "https://parseapi.back4app.com/classes/Task";
const headers = {
  "X-Parse-Application-Id": "ortn41B33LH89PU5JexteP1etYzjfH6AdtSi6CHb",
  "X-Parse-REST-API-Key": "5wPkNP3a0Aq3Kbn2ddeFTQOBVDaMT0giiSGYt5Sx",
};

export const getTasks = async () => {
  return await axios.get(urlBase, {
    headers,
  });
};
