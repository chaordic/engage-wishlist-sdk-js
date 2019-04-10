import ListFacade from '../../src/facades/lists';

describe('ListsFacade', function() {
  let server;

  describe('getList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the requested list', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const expectedResponse = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_1',
        items: [],
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.getList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, {}, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.getList(options);
      expect(response).to.be.rejected;
    });
  });

  describe('getAllLists', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return an array of lists', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      const expectedResponse = {
        lists: [],
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.getAllLists(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.getAllLists(options);
      expect(response).to.be.rejected;
    });
  });

  describe('getListItemCount', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the item count', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const expectedResponse = {
        count: 5,
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*\/count/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.getListItemCount(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*\/count/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.getListItemCount(options);
      expect(response).to.be.rejected;
    });
  });

  describe('insertItemOnList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the info on the item if successful', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      const expectedResponse = { id: 10031179751 };

      server.respondWith(
        'POST',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*\/items/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.insertItemOnList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
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
        /\/engage\/wishlist\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.insertItemOnList(options);
      expect(response).to.be.rejected;
    });
  });

  describe('removeItemFromList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return a message when successful', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        itemId: '10031179751',
      };

      const expectedResponse = 'Items successfully removed from list';

      server.respondWith(
        'DELETE',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*\/items\/[0-9]*/,
        [200, { 'Content-Type': 'application/json' }, expectedResponse],
      );

      server.respondImmediately = true;

      const response = ListFacade.removeItemFromList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
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
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*\/items\/[0-9]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.removeItemFromList(options);
      expect(response).to.be.rejected;
    });
  });

  describe('createList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the new list when successful', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        name: 'list_2',
      };

      const expectedResponse = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_2',
        items: [],
      };

      server.respondWith(
        'POST',
        /\/engage\/wishlist\/v3\/lists/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.createList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject the server returns an error', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        name: 'list_2',
      };

      server.respondWith(
        'POST',
        /\/engage\/wishlist\/v3\/lists/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.createList(options);
      expect(response).to.be.rejected;
    });
  });

  describe('updateList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the updated list when successful', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_B',
      };

      const expectedResponse = {
        id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
        name: 'list_B',
        items: [],
        extras: {
          extra_field: 'extra_value',
        },
      };

      server.respondWith(
        'PUT',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ListFacade.updateList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
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
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.updateList(options);
      expect(response).to.be.rejected;
    });
  });

  describe('deleteList', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return a message when successful', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      const expectedResponse = 'List successfully deleted';

      server.respondWith(
        'DELETE',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [200, { 'Content-Type': 'application/json' }, expectedResponse],
      );

      server.respondImmediately = true;

      const response = ListFacade.deleteList(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
        listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      };

      server.respondWith(
        'DELETE',
        /\/engage\/wishlist\/v3\/lists\/[A-Za-z0-9-]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ListFacade.deleteList(options);
      expect(response).to.be.rejected;
    });
  });
});
