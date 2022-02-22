// use ENV variable from ./.env file
// prefixed with REACT_APP for client side usage
// https://create-react-app.dev/docs/adding-custom-environment-variables/
export const API_URL = process.env.REACT_APP_API_URL || "";
