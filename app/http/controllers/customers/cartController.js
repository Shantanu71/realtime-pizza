// const Menu = require('../../models/menu')
function cartController() {
    return {
        // async index(req, res) {
        //     const pizzas = await Menu.find()
        //     return res.render('home', { pizzas: pizzas })
        // }
        index(req,res) {
            res.render('customers/cart')
        }
    }
}

module.exports = cartController