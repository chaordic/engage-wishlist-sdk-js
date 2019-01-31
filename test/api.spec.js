import _ from 'lodash';
import listValidator from '../src/validators/lists';
import ListFacade from '../src/facades/lists';
import { Api } from '../src';

describe('Api', function() {
  const tests = [
    { fn: 'getList', validator: 'validateGetList', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId'] },
    { fn: 'getAllLists', validator: 'validateGetAllLists', args: ['userId', 'apiKey', 'secretKey', 'itemType'] },
    { fn: 'getListItemCount', validator: 'validateGetListItemCount', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId'] },
    { fn: 'insertItemOnList', validator: 'validateItemOperation', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId', 'itemId'] },
    { fn: 'removeItemFromList', validator: 'validateItemOperation', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId', 'itemId'] },
    { fn: 'createList', validator: 'validateCreateList', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'name'] },
    { fn: 'updateList', validator: 'validateUpdateList', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId', 'name'] },
    { fn: 'deleteList', validator: 'validateDeleteList', args: ['userId', 'apiKey', 'secretKey', 'itemType', 'listId'] },
  ];

  let validatorSpy;
  let facadeSpy;
  let server;

  before(function() {
    server = sinon.createFakeServer();
    server.respondWith([200, {}, 'OK']);
    server.respondImmediately = true;
  });

  after(function() {
    server.restore();
  });

  tests.forEach(function(test) {
    describe(test.fn, function() {
      beforeEach(function() {
        validatorSpy = sinon.spy(listValidator, test.validator);
        facadeSpy = sinon.spy(ListFacade, test.fn);
      });

      afterEach(function() {
        validatorSpy.restore();
        facadeSpy.restore();
      });

      it('should call validator and facade methods', async function() {
        const options = {
          userId: 'user123456',
          apiKey: 'apiKeyFake',
          secretKey: 'secretKeyFake',
          itemType: 'product',
          listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
          name: 'list_B',
          itemId: '10031179751',
        };

        await Api[test.fn].call(Api, _.pick(options, ...test.args));

        expect(validatorSpy).to.have.been.called;
        expect(facadeSpy).to.have.been.called;
      });
    });
  });
});
