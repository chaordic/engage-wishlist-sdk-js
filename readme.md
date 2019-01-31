# engage-wishlist-sdk-js

Wishlist SDK for Linx Impulse Wishlist API customers

## Usage

### Content
* [getAllLists](#getAllLists)
* [getList](#getList)
* [getListItemCount](#getListItemCount)
* [insertItemOnList](#insertItemOnList)
* [removeItemFromList](#removeItemFromList)
* [createList](#createList)
* [updateList](#updateList)
* [deleteList](#deleteList)


<a name="getAllLists"></a>

### getAllLists
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID

PS: *options* parameter and all of its properties are required.

#### Example
```javascript
wishlist.getAllLists({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
})
.then((res) => {
  console.log(`Lists: ${res}`);
  /* Expected output:
  Lists: [
    {
        id: "94170ed7-2569-5499-96bc-62b3c35d0533",
        name: "Favoritos",
        isDefault: true,
        created: 1547587097766
    },
    {
        id: "c65da160-890f-52bb-906d-66694ac20eb7",
        name: "new_list",
        created: 1547588890391
    }
  ]
  */
});
```

<a name="getList"></a>

### getList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.
    * **productFormat** (string): Format that determines which properties each product object will have, can be one of three: 'onlyIds', 'compact', 'complete'. Defaults to 'compact'.
    * **showOnlyAvailable** (boolean or number): In case of a list with detailed products, show only products which are available in stock. Will be ignore if productFormat is 'onlyIds'. Can be true, false, 1 or 0. Defaults to false.

#### Example
```javascript
wishlist.getList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
  productFormat: 'onlyIds',
})
  .then((res) => {
    console.log(`List: ${res}`);
    /* Expected output:
    List: {
      id: '94170ed7-2569-5499-96bc-62b3c35d0533',
      name: 'Favoritos',
      isDefault: true,
      created: 1547587097766,
      items: [
        id: '10032490428',
      ],
    },
    */
  });
```

<a name="getListItemCount"></a>

### getListItemCount
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.
    * **showOnlyAvailable** (boolean or number): Will count only products which are available in stock. Can be true, false, 1 or 0. Defaults to false.

#### Example
```javascript
wishlist.getListItemCount({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
})
.then((res) => {
  console.log(`Count: ${res}`);
  /* Expected output:
  Count: 1
  */
});
```

<a name="insertItemOnList"></a>

### insertItemOnList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.
    * **itemId** (string): ID of the item that will be inserted on the list.
    * **skuList** (array): ID of the skus (if any) that will be inserted on the list (optional).

#### Example
```javascript
wishlist.insertItemOnList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
  itemId: '10032490428',
})
.then((res) => {
  console.log(`${res}`);
  /* Expected output:
  Items successfully inserted on list
  */
});
```

<a name="removeItemFromList"></a>

### removeItemFromList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.
    * **itemId** (string): ID of the item that will be removed from the list.

#### Example
```javascript
wishlist.removeItemFromList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
  itemId: '10032490428',
})
.then((res) => {
  console.log(`${res}`);
  /* Expected output:
  Items successfully removed from list
  */
});
```

<a name="createList"></a>

### createList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **name** (string): Name of the list to be created.
    * **extras** (object): Object containing any properties to be added to the list (optional).


#### Example
```javascript
wishlist.createList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  name: 'My list',
})
.then((res) => {
  console.log(`My list: ${res}`);
  /* Expected output:
  My List: {
    id: '94170ed7-2569-5499-96bc-62b3c35d0533',
    name: 'My list',
    created: 1547587097766,
    items: [],
  },
  */
});
```

<a name="updateList"></a>

### updateList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.
    * **name** (string): The new name for the list being updated.
    * **extras** (object): Object containing any properties to be added to the list (optional).


#### Example
```javascript
wishlist.updateList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
  name: 'Wedding list',
  extras: {
    categories: ['appliances', 'decoration'],
  },
})
.then((res) => {
  console.log(`Wedding list: ${res}`);
  /* Expected output:
  Wedding list: {
    id: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
    name: 'Wedding list',
    created: 1547587097766,
    items: [
      {
        id: '1314112124',
      }
    ],
    extras: {
      categories: ['appliances', 'decoration'],
    },
  },
  */
});
```

<a name="deleteList"></a>

### deleteList
#### Parameters
  * options (object)
    * **apiKey** (string): API key unique to each store.
    * **secretKey** (string): Secret key unique to each store.
    * **itemType** (string): Type of item that can be included on the list, may be either 'product' or 'collection'.
    * **userId** (string): User ID.
    * **listId** (string): List ID.


#### Example
```javascript
wishlist.deleteList({
  apiKey: 'apiKeyFake',
  secretKey: 'secretKeyFake',
  itemType: 'product',
  userId: 'user123456',
  listId: 'c15ca47b-a980-5ba9-af14-ad38a6b043d6',
})
.then((res) => {
  console.log(res);
  /* Expected output:
  List deleted successfully
  */
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

PS: Do not forget the tests ;)
