import isBrowser from 'is-in-browser';

//Grab variables from process.env or window
export const {
    APP_WEB_BASE_PATH,
    API_HOST
} = isBrowser ? window.__APP_ENV_VARS__ : process.env;
