import listValidator from './validators/lists';
import ListFacade from './facades/lists';

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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?String} options.productFormat - The format in which the lists products
   * should be returned.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * omitted from the response.
   * @returns {Promise}
   */
  getList(options) {
    listValidator.validateGetList(options);
    return ListFacade.getList(options);
  },

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
    * @param {!String} options.userId - A user ID.
    * @param {!String} options.apiKey - A store ID.
    * @param {!String} options.secretKey - A store secret key.
    * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
    * @returns {Promise}
    */
  getAllLists(options) {
    listValidator.validateGetAllLists(options);
    return ListFacade.getAllLists(options);
  },

  /**
   * Get a certain list's item count
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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {?Boolean} options.showOnlyAvailable - Whetever unavailable items should be
   * used toward the total.
   * @returns {Promise}
   */
  getListItemCount(options) {
    listValidator.validateGetListItemCount(options);
    return ListFacade.getListItemCount(options);
  },

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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  insertItemOnList(options) {
    listValidator.validateItemOperation(options);
    return ListFacade.insertItemOnList(options);
  },

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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  removeItemFromList(options) {
    listValidator.validateItemOperation(options);
    return ListFacade.removeItemFromList(options);
  },

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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {!String} options.name - The name of the list that will be created.
   * @param {?Object} options.extras - An object containing any addional information that
   * should be stored alongside the list.
   * @returns {Promise}
   */
  createList(options) {
    listValidator.validateCreateList(options);
    return ListFacade.createList(options);
  },

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
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @param {!String} options.name - The name of the list that will be created.
   * @param {?Object} options.extras - An object containing any addional information that
   * should be stored alongside the list.
   * @returns {Promise}
   */
  updateList(options) {
    listValidator.validateUpdateList(options);
    return ListFacade.updateList(options);
  },

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
   *    // Print the message of success
   *    console.log(res);
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!String} options.listId - A list ID.
   * @param {!String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store ID.
   * @param {!String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  deleteList(options) {
    listValidator.validateDeleteList(options);
    return ListFacade.deleteList(options);
  },
};
