import ListFacade from '../../src/facades/lists';

describe('ApiFacade', function() {
  let server;

  describe('getList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the requested list', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const res = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_1',
        items: [],
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(res)],
      );

      server.respondImmediately = true;

      const response = await ListFacade.getList(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, {}, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.getList(options);
      expect(res).to.deep.equal({});
    });
  });

  describe('getAllLists', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return an array of lists', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      const res = {
        lists: [],
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(res)],
      );

      server.respondImmediately = true;

      const response = await ListFacade.getAllLists(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty array when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.getAllLists(options);
      expect(res).to.be.an('array');
      expect(res.length).to.equal(0);
    });
  });

  describe('getListItemCount', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the item count', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const response = {
        count: 5,
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*\/count/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(response)],
      );

      server.respondImmediately = true;

      const res = await ListFacade.getListItemCount(options);
      expect(res).to.deep.equal(response);
    });

    it('should return null when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'GET',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*\/count/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.getListItemCount(options);
      expect(res).to.equal(null);
    });
  });

  describe('insertItemOnList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return a message when successful', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      const res = 'Items successfully inserted on list';

      server.respondWith(
        'POST',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*\/items/,
        [200, { 'Content-Type': 'application/json' }, res],
      );

      server.respondImmediately = true;

      const response = await ListFacade.insertItemOnList(options);
      expect(response).to.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      server.respondWith(
        'POST',
        /\/api\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.insertItemOnList(options);
      expect(res).to.equal(null);
    });
  });

  describe('removeItemFromList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return a message when successful', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      const res = 'Items successfully removed from list';

      server.respondWith(
        'DELETE',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*\/items\/[0-9]*/,
        [200, { 'Content-Type': 'application/json' }, res],
      );

      server.respondImmediately = true;

      const response = await ListFacade.removeItemFromList(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      server.respondWith(
        'DELETE',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*\/items\/[0-9]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = await ListFacade.removeItemFromList(options);
      expect(response).to.equal(null);
    });
  });

  describe('createList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the new list when successful', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        name: 'list_2',
      };

      const res = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_2',
        items: [],
      };

      server.respondWith(
        'POST',
        /\/api\/v3\/lists/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(res)],
      );

      server.respondImmediately = true;

      const response = await ListFacade.createList(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        name: 'list_2',
      };

      server.respondWith(
        'POST',
        /\/api\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.createList(options);
      expect(res).to.deep.equal({});
    });
  });

  describe('updateList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the updated list when successful', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_B',
      };

      const res = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_B',
        items: [],
        extras: {
          extra_field: 'extra_value',
        },
      };

      server.respondWith(
        'PUT',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(res)],
      );

      server.respondImmediately = true;

      const response = await ListFacade.updateList(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_2',
      };

      server.respondWith(
        'PUT',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.updateList(options);
      expect(res).to.deep.equal({});
    });
  });

  describe('deleteList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return a message when successful', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const res = 'List successfully deleted';

      server.respondWith(
        'DELETE',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, res],
      );

      server.respondImmediately = true;

      const response = await ListFacade.deleteList(options);
      expect(response).to.deep.equal(res);
    });

    it('should return an empty object when the server returns an error', async function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'DELETE',
        /\/api\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const res = await ListFacade.deleteList(options);
      expect(res).to.equal(null);
    });
  });
});
