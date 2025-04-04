import { axiosInstance } from '../../shared/axios';
import { StandardResponseBody } from '../../shared/dto';
import { ProductDto } from '../home/api';

export const getProductDetail = (
  productId: string,
): Promise<StandardResponseBody<ProductDto>> => {
  return axiosInstance.get<unknown, StandardResponseBody<ProductDto>>(
    `products/${productId}`,
  );
};
