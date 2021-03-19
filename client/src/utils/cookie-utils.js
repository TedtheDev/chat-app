import Cookies from 'js-cookie';
import config from '../config/config'

const getCookie = (name) => {
    return Cookies.get(name, { domain: config.cookieDomain });
}

const setCookie = (name, value) => {
    return Cookies.set(
        name,
        value,
        {
            domain: config.cookieDomain,
            sameSite: 'Strict',
            httpOnly: true,
            secure: true
        }
    );
}

const removeCookie = (name) => {
    return Cookies.remove(name, { domain: config.cookieDomain });
}

const CookieUtils = {
    getCookie,
    setCookie,
    removeCookie
}

export default CookieUtils;