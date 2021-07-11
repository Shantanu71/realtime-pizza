// const Menu = require('../../models/menu')
function authController() {
    return {
        // async index(req, res) {
        //     const pizzas = await Menu.find()
        //     return res.render('auth', { pizzas: pizzas })
        // }
        login(req,res) {
            res.render('auth/login')
        },

        register(req,res) {
            res.render('auth/register')
        }
    }
}

module.exports = authController