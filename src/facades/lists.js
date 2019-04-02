import axios from 'axios';
import qs from 'query-string';
import config from '../../config';

const client = axios.create({
  baseURL: config.api.url,
});

const { error } = console;

export default {
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
  }) => {
    try {
      return client.get(`/lists/${listId}`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
          productFormat,
          showOnlyAvailable,
          filter,
          offset,
          limit,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  getAllLists: ({
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => {
    try {
      return client.get('/lists', {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return [];
    }
  },

  getListItemCount: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    showOnlyAvailable,
  }) => {
    try {
      return client.get(`/lists/${listId}/count`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
          showOnlyAvailable,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  insertItemOnList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => {
    try {
      return client.post(`/lists/${listId}/items?${qs.stringify({
        userId,
        apiKey,
        secretKey,
        itemType,
      })}`, { id: itemId }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  removeItemFromList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => {
    try {
      return client.delete(`/lists/${listId}/items/${itemId}?${qs.stringify({
        userId,
        apiKey,
        secretKey,
        itemType,
      })}`).then(res => res.data);
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  createList: ({
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => {
    try {
      return client.post('/lists', {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
        data: {
          name,
          extras,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  updateList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => {
    try {
      return client.put(`/lists/${listId}`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
        data: {
          name,
          extras,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  deleteList: ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => {
    try {
      return client.delete(`/lists/${listId}`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
      }).then(res => res.data);
    } catch (err) {
      error(err.message);
      return null;
    }
  },
};
