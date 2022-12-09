'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({

    //* create confirm order method
    confirmOrder: async (ctx, next) => {
        const { id } = ctx.request.params
        await strapi.entityService.update("api::order.order", id, {
            data: {
                confirmed: true,
                confirmation_date: new Date()
            }
        })
        

        //* send confirmation mail
        strapi.service("api::order.order").sendEmail(id, ctx.state.user)

        return {
            message: "confirmed"
        }
    },

    //* modify core create function
    async create(ctx, next) {
        const user = ctx.state.user
        const { products } = ctx.request.body.data
        console.log(products);

        const order = await strapi.entityService.create("api::order.order", {
            data: {
                products,
                owner: user.id
            }
        })
        return { order }
    }
}));
