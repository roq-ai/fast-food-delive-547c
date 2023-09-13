import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  delivery_date: yup.date().nullable(),
  status: yup.string().required(),
  total_price: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
