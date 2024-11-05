import axios from "axios";


export const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/apiGet");
    return response.data;
  } catch (error) {
    console.error("failed loading todos", error);
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
  } catch (error) {
    console.error("failed loading users", error);
    throw error;
  }
};

export const getUser = async (PostId: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${PostId}`);
    return response.data;
  } catch (error) {
    console.error("failed loading users", error);
    throw error;
  }
};
