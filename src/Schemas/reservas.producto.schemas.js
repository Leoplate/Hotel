const Joi = require("joi")

const reservaProductoSchema = Joi.object().keys(
   {
      
      Precio: Joi.number().integer().min(10000).required().messages({
         "number.min": "Precio min 10000",
         "number.empty":"No puede ser vacio",
         "any.required":"Campo es requerido"
      }),

          


   CantPersonas: Joi.number().integer().min(1).max(10).required().messages({
      "number.max": "Cantidad max personas 10",
      "number.min": "Cantidad min personas 1",
      "number.empty":"No puede ser vacio",
      "any.required":"Campo es requerido"
   }),

   

   FechaReserva: Joi.date().required().messages({
      "date.empty":"No puede ser vacio",
      "any.required":"Campo es requerido"
   }) 
  
   

}

   

)

module.exports = reservaProductoSchema