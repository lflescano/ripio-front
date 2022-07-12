import Environment from "../environment";

import Api from './ApiService';

export const TransactionService = {
    usersTransactions: (walletId, limit = 1, offset = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetch(`${Environment.api}api/wallets/${walletId}/transactions/?limit=${limit}&offset=${offset}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    postTransaction: (data) => {
        return new Promise((resolve, reject) => {
                return Api.fetch(`${Environment.api}api/transactions/`, 'POST', data
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
