import AxiosHelper from "../utils/axios.helper.js";

const apiUrl = import.meta.env.VITE_API_URL;

export class AuthService {

  async createAccount({email, password, name, avatar}) {
    try {
      const data = { 
        FullName: name,
        Email: email,
        Password: password,
        Avatar: avatar
       };
      return await AxiosHelper(`${apiUrl}/user/register`, data, "post");
    } catch (error) {
      console.error("error while creating user:", error);
    }
  }


  async login({email, password}) {
    try {
      const data = { 
        Email: email,
        Password: password
       };
      return await AxiosHelper(`${apiUrl}/user/login`, data, "post");
    } catch (error) {
      console.error("error while logging in:", error);
    }
}


  async getCurrentUser(){
    try {
      const data = {};
       return await AxiosHelper(`${apiUrl}/user/current-user`, data, "get");
    } catch (error) {
      console.error("Error fetching user:", error);
    }
    return null;
  }

  async logout(){
    try {
      const data = { 

       };
       return await AxiosHelper(`${apiUrl}/user/logout`, data, "post");
    } catch (error) {
      console.error("Error while logging out user:", error);
    }
  }
}
const authService = new AuthService();
export default authService;
