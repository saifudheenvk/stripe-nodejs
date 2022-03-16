import axios from "axios";

const BASE_URL="http://localhost:3001"


export const getUsers = async (name) =>{
    return axios.get(`${BASE_URL}/users`,{params:{name}}).then(res=>{
        return res.data
    })
}

export const addUsers = async (data,id) =>{
    if(!id){
        return axios.post(`${BASE_URL}/users/create`,data).then(res=>{
            return res.data
        })
    } else{
        return axios.post(`${BASE_URL}/users/update/${id}`,data).then(res=>{
            return res.data
        })
    }
}

export const makePayments = async (data) =>{
    return axios.post(`${BASE_URL}/payment`,data).then(res=>{
        return res.data
    }) 
}

export const getCompanies = async (name)=>{
    return axios.get(`${BASE_URL}/companies`,{params:{name}}).then(res=>{
        return res.data
    })
}
