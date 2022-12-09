'use strict';

const utils = require("@strapi/utils")
const { PolicyError } = utils.errors

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In is-owner policy.');

  const { id } = policyContext.request.params
  const user = policyContext.state.user
  const order = await strapi.entityService.findOne("api::order.order", id, {
    populate: ["owner"]
  })

  if (order.owner.id === user.id) {
    return true
  }

  throw new PolicyError("you can not access this")
};
