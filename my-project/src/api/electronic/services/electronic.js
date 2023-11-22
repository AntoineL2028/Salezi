'use strict';

/**
 * electronic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::electronic.electronic');
