import axios from 'axios';
import qs from 'query-string';
import config from '../../config';

const client = axios.create({
  baseURL: config.api.url,
});

const { error } = console;

export default {
  getList: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    productFormat,
    showOnlyAvailable,
  }) => {
    try {
      const res = await client.get(`/lists/${listId}`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
          productFormat,
          showOnlyAvailable,
        },
      });
      return res.data;
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  getAllLists: async ({
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => {
    try {
      const res = await client.get('/lists', {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
      });
      return res.data;
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
      const res = await client.get(`/lists/${listId}/count`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
          showOnlyAvailable,
        },
      });
      return res.data;
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  insertItemOnList: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => {
    try {
      const res = await client.post(`/lists/${listId}/items?${qs.stringify({
        userId,
        apiKey,
        secretKey,
        itemType,
      })}`, { id: itemId });
      return res.data;
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  removeItemFromList: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    itemId,
  }) => {
    try {
      const res = await client.delete(`/lists/${listId}/items/${itemId}?${qs.stringify({
        userId,
        apiKey,
        secretKey,
        itemType,
      })}`);
      return res.data;
    } catch (err) {
      error(err.message);
      return null;
    }
  },

  createList: async ({
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => {
    try {
      const res = await client.post('/lists', {
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
      });
      return res.data;
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  updateList: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
    name,
    extras,
  }) => {
    try {
      const res = await client.put(`/lists/${listId}`, {
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
      });
      return res.data;
    } catch (err) {
      error(err.message);
      return {};
    }
  },

  deleteList: async ({
    listId,
    userId,
    apiKey,
    secretKey,
    itemType,
  }) => {
    try {
      const res = await client.delete(`/lists/${listId}`, {
        params: {
          userId,
          apiKey,
          secretKey,
          itemType,
        },
      });
      return res.data;
    } catch (err) {
      error(err.message);
      return null;
    }
  },
};
