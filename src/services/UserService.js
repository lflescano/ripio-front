import Environment from "../environment";

import Api from './ApiService';
import { AuthService } from './AuthService';

export const UserService = {
    users: (page = '', perPage = '') => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/users?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    putUser: (data) => {
        let user = AuthService.currentUserValue();
        return new Promise((resolve, reject) => {
            return Api.fetch(`${Environment.api}api/users/${user.id}/`, 'PUT', data
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
