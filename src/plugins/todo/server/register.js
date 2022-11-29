// server/register.js
'use strict';

module.exports = ({ strapi }) => {
  // Iterating on every content-types
  Object.values(strapi.contentTypes).forEach(contentType => {
    // Add tasks property to the content-type
    contentType.attributes.tasks = {
      type: 'relation',
      relation: 'morphMany',
      target: 'plugin::todo.task', // internal slug of the target
      morphBy: 'related', // field in the task schema that is used for the relation
      private: false, // false: This will not be exposed in API call
      configurable: false,
    };
  });
};