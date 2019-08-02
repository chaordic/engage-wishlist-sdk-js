import LikesFacade from '../../src/facades/likes';

describe('LikesFacade', function() {
  let server;

  describe('getLikes', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return the list of likes', function() {
      const options = {
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      const expectedResponse = [
        { id: 1, name: 'sample-item-1' },
        { id: 43, name: 'sample-item-43' },
      ];

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/likes/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = LikesFacade.getLikes(options);
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
        /\/engage\/wishlist\/v3\/likes/,
        [500, {}, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = LikesFacade.getLikes(options);
      expect(response).to.be.rejected;
    });
  });

  describe('getCount', function() {
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
      };

      const expectedResponse = {
        count: 5,
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/likes\/count/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = LikesFacade.getCount(options);
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
        /\/engage\/wishlist\/v3\/likes\/items\/count/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = LikesFacade.getCount(options);
      expect(response).to.be.rejected;
    });
  });

  describe('likeItem', function() {
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
        itemId: '10031179751',
      };

      const expectedResponse = { id: 10031179751 };

      server.respondWith(
        'POST',
        /\/engage\/wishlist\/v3\/likes\/items/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = LikesFacade.likeItem(options);
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
        /\/engage\/wishlist\/v3\/likes\/items/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = LikesFacade.likeItem(options);
      expect(response).to.be.rejected;
    });
  });

  describe('unlikeItem', function() {
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
        itemId: '10031179751',
      };

      const expectedResponse = 'Items successfully removed from list';

      server.respondWith(
        'DELETE',
        /\/engage\/wishlist\/v3\/likes\/items\/[\w-]*/,
        [200, { 'Content-Type': 'application/json' }, expectedResponse],
      );

      server.respondImmediately = true;

      const response = LikesFacade.unlikeItem(options);
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
        /\/engage\/wishlist\/v3\/likes\/items\/[\w-]*/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = LikesFacade.unlikeItem(options);
      expect(response).to.be.rejected;
    });
  });
});
