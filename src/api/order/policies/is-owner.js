'use strict';

/**
 * `is-owner` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-owner policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
