const { celebrate, Segments, Joi } = require('celebrate');
 
module.exports = celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		lastName: Joi.string().required(),
	})
},{abortEarly:false});
