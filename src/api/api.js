import * as axios from 'axios';
import { follow,unfollow } from "../redux/users-reducer"

const instance = axios.create({
    withCredential: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, PageSize = 10){
        return instance.get( `users?page=${currentPage}&count=${PageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                                    withCredential: true
                                })

    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}


export const getUsers2 = (currentPage, PageSize =10)=>{
    return instance.get(`follow?page=${currentPage}&count=${PageSize}`,)
    .then (response => {
        return response.data;
    })
}


