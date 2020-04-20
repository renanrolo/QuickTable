import Axios from 'axios';
import toastr from 'toastr'

export function validateToken() {
    console.log("validateToken called")
    return true;
}

export function tokenNotExists() {
    console.log("token not exists is", !localStorage.getItem(process.env.REACT_APP_LOCAL_AUTH_KEY))
    return !localStorage.getItem(process.env.REACT_APP_LOCAL_AUTH_KEY);
}

export function urlToSign() {
    const rediretToHere = window.location.href;

    return `${process.env.REACT_APP_SIGNING_URL}?redirectto='${rediretToHere}'`
}

export async function autoLoginForDevelopment() {
    const api = Axios.create({ baseURL: process.env.REACT_APP_AUTH_ENDPOINT });

    await api.post("/Login", { "Email": "dev@dev.com", "Senha": "123456789" })
        .then((response) => {
            const user = {
                email: response.data.body.email,
                token: response.data.body.accessToken,
                create: response.data.body.create,
                expiration: response.data.body.expiration
            }
            localStorage.setItem(process.env.REACT_APP_LOCAL_AUTH_KEY, JSON.stringify(user));
        })
        .catch(e => {
            if (e.response && e.response.data && e.response.data.errors) {
                e.response.data.errors.map((erro) => toastr.error(erro))
            }
            else {
                toastr.error("", "Indisponível")
            }
        });
}

export function getAllLists() {

}