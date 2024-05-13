'use strict'

const User = use('App/Models/User')


class AuthUserController {




    async registerUser({ response, request }) {

        /*
           * "sa_user":"neuro",
           * "sa_name_pat":"Ramirez",
           * "sa_name_mat":"Garcia",
           * "sa_name_nom":"Luis",
           * "sa_mail":"luis@mail.com",
           * "sa_cel":"1234567890"
        +*/

        try {
            const { sa_user, sa_name_pat, sa_name_mat, sa_name_nom, sa_mail, sa_cel } = request.all();



            const user = await User.create({
                sa_user,
                sa_name_pat,
                sa_name_mat,
                sa_name_nom,
                sa_mail,
                sa_cel,
            });

            response.status(201).json({
                id: user.id
            });
        } catch (error) {
            console.log(error);
            return response.status(409).json({
                message: 'este usuario o email ya existe'
            });
        }
    }

    async setPassword({ auth, response, request }) {

        // const user = await auth.getUser();
        const { sa_pass, sa_user } = request.all();

        if (sa_user == '') {
            return response.status(401).json({
                message: 'Usuario actualizado exitosamente',
                resultCode: 1002,
            });
        }

        const updateUser = await User.findBy('sa_user', sa_user);
        updateUser.password = sa_pass;

        await updateUser.save();

        return response.status(201).json({
            message: 'Usuario actualizado exitosamente',
            resultCode: 0,
        });
    }


    async loginApiUser({ auth, response, request }) {

        try {
            // const email = 'giorey@gmail.com';
            // const password = '123456';
            const { sa_user, sa_pass } = request.all();
            console.log(sa_user);
            console.log(sa_pass);
            const password = sa_pass;
            const user = await auth.attempt(sa_user, password);
            console.log(user);
            // console.log(user.token);
            // const myUser = auth.getUser();

            const jsonData = {
                access_token: user.token

            };


            return response.status(200).json(jsonData);
        } catch (error) {
            console.log(error);
            return response.status(400).json(
                error
            );
        }
    }


    async loginUser({ auth, request, response }) {

        try {
            const firstUser = await auth.getUser();
            console.log(firstUser.id);

            const cadena = generarCadenaAleatoria(97);


            const jsonData = {
                "message": "Autenticación exitosa",
                "resultCode": 0,
                "sa_cel": firstUser.sa_cel,
                "sa_id": firstUser.sa_id,
                "sa_mail": firstUser.sa_mail,
                "sa_name_nom": firstUser.sa_name_nom,
                "sa_ticket": cadena,
            };

            return response.status(200).json(jsonData);

        } catch (error) {
            console.log(error);

        }


        function generarCadenaAleatoria(longitud) {
            let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let cadenaAleatoria = '';
            for (let i = 0; i < longitud; i++) {
                const indice = Math.floor(Math.random() * caracteres.length);
                cadenaAleatoria += caracteres.charAt(indice);
            }
            return cadenaAleatoria;
        }



    }


    async getUserData({ /*auth,*/ response }) {
        try {

            // const userRaw = await auth.getUser();
            // const user = userRaw.toJSON();
            // delete user.password;

            const jsonData = {

                productos: [
                    {
                        producto: {
                            sa_nombre: 'Luis Antonio Ramirez Garcia',
                            sa_app: 'superapp',
                            sa_usuario: 'Luis1234',
                            sa_contrasenia: 'Pwd12345',
                            sa_correo: 'luis@yahoo.com',
                            sa_telefono: '5510203040',
                            sa_no_cliente: '12345678',
                            sa_nombre_producto: 'Super App',
                        },
                    },
                    {
                        producto: {
                            sa_nombre: 'Luis Antonio Ramirez Garcia',
                            sa_app: 'cimovil',
                            sa_usuario: 'Luis1234',
                            sa_contrasenia: 'Otr12345',
                            sa_correo: 'luis@yahoo.com',
                            sa_telefono: '5510203040',
                            sa_no_cliente: '12345678',
                            sa_nombre_producto: 'CIMóvil',
                        },
                    },
                    {
                        producto: {
                            sa_nombre: 'Luis Ramirez',
                            sa_app: 'cicash',
                            sa_usuario: 'LuisCi01',
                            sa_contrasenia: 'CiCa12341',
                            sa_correo: 'luis_r@gmail.com',
                            sa_telefono: '5545237872',
                            sa_no_cliente: '',
                            sa_nombre_producto: 'Tarjeta Premier',
                        },
                    },
                ],
            };


            return response.status(200).json(jsonData);
        } catch (error) {

            return response.status(401).json({
                message: 'Token caducado'
            });
        }

    }


    async logOut({ auth, response, request }) {

        try {
            // const user = await auth.getUser();
            const { sa_user, sa_ticket } = request.all();

            return response.status(201).json({
                message: 'Cierre de sesión correcto',
                resultCode: 0,
            });

        } catch (error) {
            console.log(error);
        }
    }


    async getLLaves({ response, request }) {


        // const { sa_user } = request.all();

        if (Object.keys(request.post()).length === 0) {

            return response.status(500).json({
                "message": "Error en la consulta",
                "resultcode": 1,
            });
        }

        return response.status(200).json(
            {
                "k": "521a7d8d81375e6cd337e688d0fe326c",
                "message": "Consulta exitosa",
                "resultcode": 0,
                "v": "d3e03ca6cf657190"
            }
        );
    }

}

module.exports = AuthUserController
