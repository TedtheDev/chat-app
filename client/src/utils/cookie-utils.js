import Cookies from 'js-cookie';

const getCookie = (name) => {
    Cookies.get(name, { domain: 'localhost' })
}

const setCookie = (name, value) => {
    Cookies.set(name, value, { domain: 'localhost' })
}

const removeCookie = (name) => {
    Cookies.remove(name, { domain: 'localhost' })
}

const CookieUtils = {
    getCookie,
    setCookie,
    removeCookie
}

export default CookieUtils;