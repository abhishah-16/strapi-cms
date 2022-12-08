module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/employees',
            handler: 'employee.find',
            config: {
                /**
                  The `is-admin` policy found at `./src/api/restaurant/policies/is-admin.js`
                  is executed before the `find` action in the `Restaurant.js` controller.
                 */
                policies: ['api::employee.is-admin']
            }
        }
    ]
}
