import * as config from '../config/config.js';


export async function sendRequest(method, toDo, body) {
    const REQBODY = {
        method: `${method}`,
        toDo: `${toDo}`,
        body: body
    }
    console.log('sending request');
    if (method !== 'GET') {
        const result = await fetch(`${config.setupData.host}:${config.setupData.proxyPort}/proxy`, {
            method: REQBODY.method,
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                authorization: body.data.user.req_JWT || '',
            },
            body: JSON.stringify(REQBODY)
        });
        const response = {
            response: await result.json(),
            status: result.status,
        }
        console.log(`${method} :request successful`)
        return response
    } else if (method === 'GET') {
        console.log(`${method}: ${config.setupData.host}:${config.setupData.proxyPort}/home`)
        const result = await fetch(`${config.setupData.host}:${config.setupData.proxyPort}/home`, {
            method: 'GET',
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                authorization: ''
            },
        });
        const response = {
            response: await result.text(),
            status: result.status,
        }
        console.log(`${method} :request successful`)
        return response
    }
}

export async function sendGetRequest(method, jwt) {
    try {
        console.log(`${method}: ${config.setupData.host}:${config.setupData.proxyPort}/home`)
        console.log(`header set to: ${jwt}`);
        const result = await fetch(`${config.setupData.host}:${config.setupData.proxyPort}/home`, {
            method: 'GET',
            credentials: 'include',
            mode: "cors",
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'authorization': jwt
            },
        });
        const response = {
            response: await result.text(),
            status: result.status,
        }
        console.log(`${method} :request successful`)
        console.log(response);
        if (response.status === 201) {
            // window.location.href = 'http://localhost:9000/home.html'
            console.log('Ok');

        } else {
            // alert(response);
        }
        return response
    } catch (error) {

    }
}

// Needs many debugging especially CORS and response.status
export async function proxyAuthenticate(method, toDo, body) {
    const REQBODY = {
        method: `${method}`,
        toDo: `${toDo}`,
        body: body
    }
    console.log('sending request');
    if (method !== 'GET') {
        const result = await fetch(`${config.setupData.host}:${config.setupData.proxyPort}/proxy/authenticate`, {
            method: REQBODY.method,
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                authorization: body.data.user.req_JWT || '',
            },
            body: JSON.stringify(REQBODY)
        });
        const response = {
            response: await result.json(),
            status: result.status,
        }
        console.log(`${method} :authentication request successful`)
        return response
    } else if (method === 'GET') {
        console.log(`${method}: ${config.setupData.host}:${config.setupData.proxyPort}/home`)
        const result = await fetch(`${config.setupData.host}:${config.setupData.proxyPort}/home`, {
            method: 'GET',
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                authorization: ''
            },
        });
        const response = {
            response: await result.text(),
            status: result.status,
        }
        console.log(`${method} :request successful`)
        return response
    }
}
