import inspector from 'schema-inspector';
import mongoose from 'mongoose';

export const validateTitleInBody = (body) => {
  const validation = {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        minLength: 1
      },
    }
  };

  return inspector.validate(validation, body);
}

export const validateObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};