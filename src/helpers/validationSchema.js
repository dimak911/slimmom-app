//Packages
import * as yup from 'yup';

const productSchema = yup.object().shape({
  product: yup.string().required('Виберіть необхідний продукт'),
  weight: yup
    .number()
    .min(1, 'мінімальна вага 1 грам')
    .required('Введіть вагу продукту'),
});

export { productSchema };
