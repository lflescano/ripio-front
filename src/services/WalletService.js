import Environment from "../environment";

import Api from './ApiService';
import { AuthService } from './AuthService';

export const WalletService = {
    usersWallets: (limit = '', offset = '') => {
        let user = AuthService.currentUserValue();
        return new Promise((resolve, reject) => {
            return Api.fetch(`${Environment.api}api/users/${user.id}/wallets/?limit=${limit}&offset=${offset}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    wallets: (limit = '', offset = '') => {
        return new Promise((resolve, reject) => {
            return Api.fetch(`${Environment.api}api/wallets/?limit=${limit}&offset=${offset}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
