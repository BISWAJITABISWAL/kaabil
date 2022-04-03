const { default: axios } = require("axios")

const BASE_URL = "https://api.piscontest.com/";
export const login =  async (email , password) => {
    const resp = await axios.post(BASE_URL + '/login'  , {email , password});
    if(resp.status == 201) {
        return true;
    }else {
        return false;
    }
}


export const logout = () => {
    
}

