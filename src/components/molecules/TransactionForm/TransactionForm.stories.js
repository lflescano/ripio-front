import React from "react";

import TransactionForm from '.';

export default {
    title: 'Molecules/TransactionForm'
}



export const Default = () => {
    const origins = [{
      "id": 1,
      "balance": 700,
      "alias": "b'fb04570581'",
      "created_at": "2022-06-29T06:21:33.478459Z",
      "updated_at": "2022-06-30T02:47:28.298598Z",
      "currency": {
        "id": 1,
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "created_at": "2022-06-29T06:16:17.838179Z",
        "updated_at": "2022-06-29T06:16:17.838238Z"
      },
      "owner": {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com",
        "first_name": "",
        "last_name": "",
        "is_staff": true,
        "groups": []
      }
    },
    {
      "id": 2,
      "balance": 245,
      "alias": "123123123",
      "created_at": "2022-07-04T23:41:34.483239Z",
      "updated_at": "2022-07-04T23:41:34.483296Z",
      "currency": {
        "id": 2,
        "code": "INR",
        "name": "India Rupee",
        "symbol": "₹",
        "created_at": "2022-06-29T06:16:47.158211Z",
        "updated_at": "2022-06-29T06:16:47.158252Z"
      },
      "owner": {
        "id": 2,
        "username": "test",
        "email": "test@test.com",
        "first_name": "test",
        "last_name": "test",
        "is_staff": false,
        "groups": []
      }
    }];

    const destinations = [{
      "id": 1,
      "balance": 700,
      "alias": "b'fb04570581'",
      "created_at": "2022-06-29T06:21:33.478459Z",
      "updated_at": "2022-06-30T02:47:28.298598Z",
      "currency": {
        "id": 1,
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "created_at": "2022-06-29T06:16:17.838179Z",
        "updated_at": "2022-06-29T06:16:17.838238Z"
      },
      "owner": {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com",
        "first_name": "",
        "last_name": "",
        "is_staff": true,
        "groups": []
      }
    },
    {
      "id": 2,
      "balance": 245,
      "alias": "123123123",
      "created_at": "2022-07-04T23:41:34.483239Z",
      "updated_at": "2022-07-04T23:41:34.483296Z",
      "currency": {
        "id": 2,
        "code": "INR",
        "name": "India Rupee",
        "symbol": "₹",
        "created_at": "2022-06-29T06:16:47.158211Z",
        "updated_at": "2022-06-29T06:16:47.158252Z"
      },
      "owner": {
        "id": 2,
        "username": "test",
        "email": "test@test.com",
        "first_name": "test",
        "last_name": "test",
        "is_staff": false,
        "groups": []
      }
    }];
    
    return <TransactionForm origins={origins} destinations={destinations} />
}

export const Mobile = () => {
    const origins = [{
      "id": 1,
      "balance": 700,
      "alias": "b'fb04570581'",
      "created_at": "2022-06-29T06:21:33.478459Z",
      "updated_at": "2022-06-30T02:47:28.298598Z",
      "currency": {
        "id": 1,
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "created_at": "2022-06-29T06:16:17.838179Z",
        "updated_at": "2022-06-29T06:16:17.838238Z"
      },
      "owner": {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com",
        "first_name": "",
        "last_name": "",
        "is_staff": true,
        "groups": []
      }
    },
    {
      "id": 2,
      "balance": 245,
      "alias": "123123123",
      "created_at": "2022-07-04T23:41:34.483239Z",
      "updated_at": "2022-07-04T23:41:34.483296Z",
      "currency": {
        "id": 2,
        "code": "INR",
        "name": "India Rupee",
        "symbol": "₹",
        "created_at": "2022-06-29T06:16:47.158211Z",
        "updated_at": "2022-06-29T06:16:47.158252Z"
      },
      "owner": {
        "id": 2,
        "username": "test",
        "email": "test@test.com",
        "first_name": "test",
        "last_name": "test",
        "is_staff": false,
        "groups": []
      }
    }];

    const destinations = [{
      "id": 1,
      "balance": 700,
      "alias": "b'fb04570581'",
      "created_at": "2022-06-29T06:21:33.478459Z",
      "updated_at": "2022-06-30T02:47:28.298598Z",
      "currency": {
        "id": 1,
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "created_at": "2022-06-29T06:16:17.838179Z",
        "updated_at": "2022-06-29T06:16:17.838238Z"
      },
      "owner": {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com",
        "first_name": "",
        "last_name": "",
        "is_staff": true,
        "groups": []
      }
    },
    {
      "id": 2,
      "balance": 245,
      "alias": "123123123",
      "created_at": "2022-07-04T23:41:34.483239Z",
      "updated_at": "2022-07-04T23:41:34.483296Z",
      "currency": {
        "id": 2,
        "code": "INR",
        "name": "India Rupee",
        "symbol": "₹",
        "created_at": "2022-06-29T06:16:47.158211Z",
        "updated_at": "2022-06-29T06:16:47.158252Z"
      },
      "owner": {
        "id": 2,
        "username": "test",
        "email": "test@test.com",
        "first_name": "test",
        "last_name": "test",
        "is_staff": false,
        "groups": []
      }
    }];
    return <TransactionForm origins={origins} destinations={destinations} />
}