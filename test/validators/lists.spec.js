import _ from 'lodash';
import listValidator from '../../src/validators/lists';

describe('List param validator', function() {
  describe('validateGetAllLists', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
    };

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateGetAllLists(options);
      }).to.not.throw();
    });

    _.keys(options).forEach(function(key) {
      it(`should throw when ${key} is omitted`, function() {
        expect(() => {
          listValidator.validateGetAllLists(_.omit(options, key));
        }).to.throw();
      });
    });
  });

  describe('validateGetList', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      productFormat: 'onlyIds',
      showOnlyAvailable: true,
      filter: 'category:TWFzY3VsaW5v',
      offset: 3,
      limit: 3,
    };

    const required = ['userId', 'apiKey', 'secretKey', 'itemType', 'listId'];
    const optional = ['productFormat', 'showOnlyAvailable', 'filter', 'offset', 'limit'];

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateGetList(options);
      }).to.not.throw();
    });

    required.forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateGetList(_.omit(options, key));
        }).to.throw();
      });
    });

    optional.forEach(function(key) {
      it(`should not throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateGetList(options);
        }).to.not.throw();
      });
    });

    it('should throw when \'productFormat\' is not valid', function() {
      options.productFormat = 'some-random-value';

      expect(() => {
        listValidator.validateGetList(options);
      }).to.throw();
    });
  });

  describe('validateGetListItemCount', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      showOnlyAvailable: true,
    };

    const required = ['userId', 'apiKey', 'secretKey', 'itemType', 'listId'];
    const optional = ['showOnlyAvailable'];

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateGetListItemCount(options);
      }).to.not.throw();
    });

    required.forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateGetListItemCount(_.omit(options, key));
        }).to.throw();
      });
    });

    optional.forEach(function(key) {
      it(`should not throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateGetListItemCount(options);
        }).to.not.throw();
      });
    });
  });

  describe('validateItemOperation', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      itemId: '10032490428',
    };

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateItemOperation(options);
      }).to.not.throw();
    });

    _.keys(options).forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateItemOperation(_.omit(options, key));
        }).to.throw();
      });
    });
  });

  describe('validateCreateList', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      name: 'list 1',
      extras: {
        someExtras: 'some-important-value',
      },
    };

    const required = ['userId', 'apiKey', 'secretKey', 'itemType', 'name'];
    const optional = ['extras'];

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateCreateList({ ...options, extras: {} });
      }).to.not.throw();
    });

    it('should not throw when "extras" is omitted', function() {
      expect(() => {
        listValidator.validateCreateList(options);
      }).to.not.throw();
    });

    required.forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateCreateList(_.omit(options, key));
        }).to.throw();
      });
    });

    optional.forEach(function(key) {
      it(`should not throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateCreateList(_.omit(options, key));
        }).to.not.throw();
      });
    });

    it('should throw when \'extras\' is invalid', function() {
      options.extras = 1;

      expect(() => {
        listValidator.validateCreateList(options);
      }).to.throw();
    });
  });

  describe('validateUpdateList', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
      name: 'list 1',
      extras: {
        someExtras: 'some-important-value',
      },
    };

    const required = ['userId', 'apiKey', 'secretKey', 'itemType', 'listId', 'name'];
    const optional = ['extras'];

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateUpdateList({ ...options, extras: {} });
      }).to.not.throw();
    });

    it('should not throw when "extras" is omitted', function() {
      expect(() => {
        listValidator.validateUpdateList(options);
      }).to.not.throw();
    });

    required.forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateUpdateList(_.omit(options, key));
        }).to.throw();
      });
    });

    optional.forEach(function(key) {
      it(`should not throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateUpdateList(_.omit(options, key));
        }).to.not.throw();
      });
    });

    it('should throw when \'extras\' is invalid', function() {
      options.extras = 1;

      expect(() => {
        listValidator.validateUpdateList(options);
      }).to.throw();
    });
  });

  describe('validateDeleteList', function() {
    const options = {
      userId: 'user123456',
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      itemType: 'product',
      listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
    };

    it('should not throw when all parameters are valid', function() {
      expect(() => {
        listValidator.validateDeleteList(options);
      }).to.not.throw();
    });

    _.keys(options).forEach(function(key) {
      it(`should throw when '${key}' is omitted`, function() {
        expect(() => {
          listValidator.validateDeleteList(_.omit(options, key));
        }).to.throw();
      });
    });
  });
});
