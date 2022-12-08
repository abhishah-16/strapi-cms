'use strict';

/**
 * `is-admin` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  if (policyContext.state.user.role.name === 'Administrator') {
    // Go to next policy or will reach the controller's action.
    console.log(policyContext.state);
    return false;
  }

  return false;
};
