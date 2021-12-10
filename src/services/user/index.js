import { BASE_URL } from "../index";
import * as METHODS from "../methods";

const URL = `${BASE_URL}/user`;

const token =
  "...";

export const list = async () => {
  try {
    const response = await fetch(`${URL}/users`, METHODS.GET(token));
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};