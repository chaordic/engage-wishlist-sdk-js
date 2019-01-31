import Joi from 'joi-browser';

const mainSchema = {
  userId: Joi.string().required(),
  apiKey: Joi.string().required(),
  secretKey: Joi.string().required(),
  itemType: Joi.string().valid(['product', 'collection']).required(),
};

function handleJoiError(err) {
  if (err) {
    throw err;
  }
}

export default {
  validateGetList(params) {
    Joi.validate(params, {
      ...mainSchema,
      listId: Joi.string().required(),
      productFormat: Joi.string().valid('onlyIds', 'compact', 'complete'),
      showOnlyAvailable: [Joi.boolean(), Joi.any().valid('1', '0')],
      filter: Joi.string(),
    }, handleJoiError);
  },

  validateGetAllLists(params) {
    Joi.validate(params, mainSchema, handleJoiError);
  },

  validateGetListItemCount(params) {
    Joi.validate(params, {
      ...mainSchema,
      listId: Joi.string().required(),
      showOnlyAvailable: [Joi.boolean(), Joi.any().valid('1', '0')],
    }, handleJoiError);
  },

  validateItemOperation(params) {
    Joi.validate(params, {
      ...mainSchema,
      listId: Joi.string().required(),
      itemId: Joi.string().required(),
    }, handleJoiError);
  },

  validateCreateList(params) {
    Joi.validate(params, {
      ...mainSchema,
      name: Joi.string().required(),
      extras: Joi.object(),
    }, handleJoiError);
  },

  validateUpdateList(params) {
    Joi.validate(params, {
      ...mainSchema,
      listId: Joi.string().required(),
      name: Joi.string().required(),
      extras: Joi.object(),
    }, handleJoiError);
  },

  validateDeleteList(params) {
    Joi.validate(params, {
      ...mainSchema,
      listId: Joi.string().required(),
    }, handleJoiError);
  },
};
