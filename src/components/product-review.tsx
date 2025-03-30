import clsx from 'clsx';
import { FC } from 'react';

interface ProductReviewProps {
  className?: string;
}

export const ProductReview: FC<ProductReviewProps> = ({ className }) => {
  return <div className={clsx('product-review', className)}></div>;
};
