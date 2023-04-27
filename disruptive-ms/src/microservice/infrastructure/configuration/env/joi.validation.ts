import * as Joi from 'joi';

export const JoiValidationEnv = Joi.object({
  PORT: Joi.required(),
});
