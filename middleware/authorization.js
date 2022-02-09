const authorization = ( roles = []) => {

    return (req, res, next ) => {
        const { userInfo } = req
        const { roles: currentRoles } = userInfo

        const check = (element) => roles.includes(element)
        if(currentRoles.some(check)){
            next()
        }else{
            res.status(403).json({ error: "Forbiden", status: 403, message: 'Forbiden' })
        }
    }
}

module.exports = authorization