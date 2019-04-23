import { ajax } from '@linx-impulse/commons-js/http/ajax';
import { getDeviceId } from '../util';
import config from '../../config';

export default {
  /**
   * Get the frequency of likes (a.k.a. how many users liked) for one or more items
   *
   * @example
   * Items.getFrequency({
   *  itemId: [123, 456, 789],
   *  userId: 'user123456',
   *  apiKey: 'some-store',
   *  secretKey: 'tis-a-secret',
   *  itemType: 'product',
   * }).then((res) => {
   *    // Print each frequency
   *    res.forEach(item => {
   *      console.log(item.frequency);
   *    });
   * }).catch((err) => {
   *    // If something goes wrong
   *    console.error(err);
   * });
   *
   * @param {Object} options
   * @param {!Array} options.itemId - An array of item ids.
   * @param {?String} options.userId - A user ID.
   * @param {!String} options.apiKey - A store api key.
   * @param {?String} options.secretKey - A store secret key.
   * @param {!String} options.itemType - The type of item, can be 'product' or 'collection'.
   * @returns {Promise}
   */
  getFrequency: ({
    itemId,
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => new Promise((resolve, reject) => {
    ajax({
      url: `${config.api.url}/items/frequency`,
      type: 'GET',
      params: {
        itemId,
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
