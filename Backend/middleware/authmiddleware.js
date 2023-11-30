
const checkAuth = (re, res, next) => {

    console.log("Desde mi Middleware");

    next();
};

export default checkAuth;