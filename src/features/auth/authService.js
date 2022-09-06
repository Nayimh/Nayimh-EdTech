import axios from "axios";


const API_URL = "/user/register";
const Login_url = "/user/login"


//register user
const registeruser = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        // localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}
//Login user
const loginUser = async (userData) => {
    const response = await axios.post(
      Login_url,
      userData
    );

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
        
    }

    return response.data;
}

//logout
 const logout = () => {
    localStorage.removeItem('user');
}

//register
const authService = {
    registeruser,
    logout,
    loginUser

};

export default authService;