'use strict'

const Product = use('App/Models/Product');
const User = use('App/Models/User');

class ProductController {
    async addProduct({ auth, response, request }) {

        try {
            const user = await auth.getUser();

            /*
            * "product_name":"CIMOVIL",
            * "product_control_id":"1234567890",
            * "product_user":"neuro123",
            * "product_pass":"12345678",
            * "product_mail":"luis@mail.com",
            * "product_cel":"1234567890"
            */

            const { product_name, product_control_id, product_user, product_pass, product_mail, product_cel } = request.all();

            const producto = new Product();//.create(request.all());
            producto.product_name = product_name;
            producto.sa_id = user.id;
            producto.product_control_id = product_control_id;
            producto.product_user = product_user;
            producto.product_pass = product_pass;
            producto.product_mail = product_mail;
            producto.product_cel = product_cel;

            await producto.save();

            return response.status(201).json({
                message: 'Producto agregado correctamente'
            });

        } catch (error) {
            console.log(error);
        }

    }


    async myProducts({ auth, response }) {

        try {
            const userID = await auth.getUser();
            // const user = User.find(userID.id);

            const products = await Product.query()
                .where('sa_id', userID.id)
                .fetch()

            return response.status(200).json(products);

        } catch (error) {
            console.log(error);
            return response.status(401).json({
                message: 'Token caducado',
                resultCode: 1002,
            });
        }
    }

}

module.exports = ProductController
