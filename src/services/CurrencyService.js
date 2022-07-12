import Environment from "../environment";

import Api from './ApiService';

export const CurrencyService = {
    currencies: (limit = '', offset = '') => {
        return new Promise((resolve, reject) => {
            return Api.fetch(`${Environment.api}api/currencies/?limit=${limit}&offset=${offset}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    postCurrency: (data) => {
        return new Promise((resolve, reject) => {
                return Api.fetch(`${Environment.api}api/currencies/`, 'POST', data
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
