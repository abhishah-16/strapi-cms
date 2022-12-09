'use strict';

const utils = require("@strapi/utils")
const { PolicyError } = utils.errors

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  strapi.log.info('In is-owner policy.');

  //* get id from params
  const { id } = policyContext.request.params

  //* get user from context
  const user = policyContext.state.user

  //* get order from param-id
  const order = await strapi.entityService.findOne("api::order.order", id, {
    populate: ["owner"]
  })

  //* checking owner.id and user.id
  if (order.owner.id === user.id) {
    return true
  }

  throw new PolicyError("you can not access this")
};
