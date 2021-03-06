import { ajax } from '@linx-impulse/commons-js/http/ajax';
import { getDeviceId } from '../util';
import config from '../../config';

/**
 * @module Likes
 */

export default {
  /**
   * Get all user likes
   *
   * @example
   * Likes.getLikes({
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the array of likes
   *    console.log(res.likes);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?String} options.productFormat - The format in which the lists products
   * should be returned.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * omitted from the response.
   * @returns {Promise} An array of objects
   */
  getLikes: ({
    userId,
    apiKey,
    secretKey,
    itemType,
    productFormat,
    showOnlyAvailable,
    filter,
    offset,
    limit,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/likes`,
      type: 'GET',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
        productFormat,
        showOnlyAvailable,
        filter,
        offset,
        limit,
      },
      success: resolve,
      error: reject,
    });
  }),

  /**
   * Get the number of likes for a combination of store and user.
   *
   * @example
   * Likes.getCount({
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the number of items
   *    console.log(res.count);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * used toward the total.
   * @returns {Promise}
   */
  getCount: ({
    userId,
    apiKey,
    secretKey,
    itemType,
    showOnlyAvailable,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/likes/count`,
      type: 'GET',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
        showOnlyAvailable,
      },
      success: resolve,
      error: reject,
    });
  }),

  /**
   * Like an item
   *
   * @example
   * Likes.likeItem({
   *  itemId: '1234567890',
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the information of the item that was inserted
   *    console.log(res);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!String} options.itemId - An item ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?String} options.productFormat - The format in which the lists products
   * should be returned.
   * @returns {Promise} - The information on the item that was just liked.
   */
  likeItem: ({
    itemId,
    userId,
    apiKey,
    secretKey,
    itemType,
    productFormat,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/likes/items`,
      type: 'POST',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
        productFormat,
      },
      data: {
        id: itemId,
      },
      success: resolve,
      error: reject,
    });
  }),

  /**
   * Unlike an item
   *
   * @example
   * Likes.unlikeItem({
   *  itemId: '1234567890',
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the message of success
   *    console.log(res);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!String} options.itemId - An item ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise} - A message of success
   */
  unlikeItem: ({
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/likes/items/${itemId}`,
      type: 'DELETE',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
      },
      success: resolve,
      error: reject,
    });
  }),
};
