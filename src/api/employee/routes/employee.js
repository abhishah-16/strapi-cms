'use strict';

/**
 * employee router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee.employee', {
    routes: [
        {
            method: 'GET',
            path: '/employees',
            handler: 'employee.find',
            config: {
                policies: ['api::employee.is-admin']
            }
        }
    ]
});
