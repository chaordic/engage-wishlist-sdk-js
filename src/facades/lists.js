import { ajax } from '@linx-impulse/commons-js/http/ajax';
import { getDeviceId } from '../util';
import config from '../../config';

/**
 * @module Lists
 */

export default {
  /**
   * Get a specific list
   *
   * @example
   * Api.getList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the list
   *    console.log(res.list);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!String} options.listId - A list ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?String} options.productFormat - The format in which the lists products
   * should be returned.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * omitted from the response.
   * @returns {Promise}
   */
  getList: ({
    listId,
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
      url: `${config.api.url}/lists/${listId}`,
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
   * Get all lists from a certain user
   *
   * @example
   * Api.getAllLists({
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print the array of lists
   *    console.log(res);
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
   * @returns {Promise}
   */
  getAllLists: ({
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists`,
      type: 'GET',
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

  /**
   * Get a certain list item count
   *
   * @example
   * Api.getListItemCount({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
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
   * @param {!String} options.listId - A list ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * used toward the total.
   * @returns {Promise}
   */
  getListItemCount: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    showOnlyAvailable,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists/${listId}/count`,
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
   * Insert an item on a list
   *
   * @example
   * Api.insertItemOnList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
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
   * @param {!String} options.listId - A list ID.
   * @param {!String} options.itemId - An item ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?String} options.productFormat - The format in which the lists products
   * should be returned.
   * @returns {Promise}
   */
  insertItemOnList: ({
    listId,
    itemId,
    userId,
    apiKey,
    secretKey,
    itemType,
    productFormat,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists/${listId}/items`,
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
   * Remove an item from a list
   *
   * @example
   * Api.removeItemFromList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
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
   * @param {!String} options.listId - A list ID.
   * @param {!String} options.itemId - An item ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  removeItemFromList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists/${listId}/items/${itemId}`,
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

  /**
   * Create a new list for a user
   *
   * @example
   * Api.createList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   *  name: 'birthday party list',
   *  extras: {
   *    favoriteColours: ['blue', 'green'],
   *  }
   * }).then((res) => {
   *    // Print the new list.
   *    console.log(res);
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
   * @param {!String} options.name - The name of the list that will be created.
   * @param {?Object} options.extras - An object containing any addional information that
   * should be stored alongside the list.
   * @returns {Promise}
   */
  createList: ({
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists`,
      type: 'POST',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
      },
      data: {
        name,
        extras,
      },
      success: resolve,
      error: reject,
    });
  }),

  /**
   * Update an existing list
   *
   * @example
   * Api.updateList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   *  name: 'surprise party list',
   *  extras: {
   *    presentSugestions: ['clothing', 'shoes'],
   *  }
   * }).then((res) => {
   *    // Print the new list.
   *    console.log(res);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!String} options.listId - A list ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {!String} options.name - The name of the list that will be created.
   * @param {?Object} options.extras - An object containing any addional information that
   * should be stored alongside the list.
   * @returns {Promise}
   */
  updateList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists/${listId}`,
      type: 'PUT',
      params: {
        userId,
        deviceId: getDeviceId(),
        apiKey,
        secretKey,
        itemType,
      },
      data: {
        name,
        extras,
      },
      success: resolve,
      error: reject,
    });
  }),

  /**
   * Delete a specific list
   *
   * @example
   * Api.deleteList({
   *  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
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
   * @param {!String} options.listId - A list ID.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  deleteList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/lists/${listId}`,
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
