import ItemsFacade from '../../src/facades/items';

describe('ItemsFacade', function() {
  let server;

  describe('getFrequency', function() {
    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    afterEach(function() {
      server.restore();
    });

    it('should return an array of item frequencies', function() {
      const options = {
        itemId: ['123', '456', '789'],
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      const expectedResponse = [
        { id: 123, frequency: 98 },
        { id: 456, frequency: 76 },
        { id: 789, frequency: 54 },
      ];

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/items\/frequency/,
        [200, { 'Content-Type': 'application/json' }, JSON.stringify(expectedResponse)],
      );

      server.respondImmediately = true;

      const response = ItemsFacade.getFrequency(options);
      expect(response).to.eventually.deep.equal(expectedResponse);
    });

    it('should reject when the server returns an error', function() {
      const options = {
        itemId: ['123', '456', '789'],
        userId: 'user123456',
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        itemType: 'product',
      };

      server.respondWith(
        'GET',
        /\/engage\/wishlist\/v3\/items\/frequency/,
        [500, { 'Content-Type': 'application/json' }, 'Internal server error'],
      );

      server.respondImmediately = true;

      const response = ItemsFacade.getFrequency(options);
      expect(response).to.be.rejected;
    });
  });
});
