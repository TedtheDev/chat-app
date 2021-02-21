import Cookies from 'js-cookie';

const getCookie = (name) => {
    Cookies.get(name)
}

const setCookie = (name, value) => {
    Cookies.set(name, value)
}

const removeCookie = (name) => {
    Cookies.remove(name)
}

const CookieUtils = {
    getCookie,
    setCookie,
    removeCookie
}

export default CookieUtils;