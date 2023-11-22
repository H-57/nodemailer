export const checkAccount = (req, res, next) => {
    
    if (req.cookies.email && req.cookies.password && req.cookies.name) {
        next();
    } else {
        res.redirect("/Account");
    }

}