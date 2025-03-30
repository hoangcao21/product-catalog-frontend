import { Page } from '../../components/page';
import { Description } from './components/description';
import { Information } from './components/information';
import { Navigation } from './components/navigation';
import { Reviews } from './components/reviews';
import { Divider } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';
import { useNavigate } from 'react-router';

interface ProductDetailPageProps {
  id?: string;
  className?: string;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Page id="product-detail">
      <Navigation
        className={clsx('mb-5')}
        onClickBack={() => {
          navigate('/home');
        }}
      />

      <Information />

      <Divider />

      <Description className={clsx('mt-5 mb-5')} />

      <Divider />

      <Reviews
        className={clsx('mt-5')}
        onReviewSent={async () => {}}
        reviews={[
          {
            comment:
              'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
            productId: 'x',
            rating: 5,
            reviewId: 'zzzzz',
            userId: 'zzzz',
            userName: 'zzzz',
          },
          {
            comment:
              'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
            productId: 'x',
            rating: 5,
            reviewId: 'zzzzz',
            userId: 'zzzz',
            userName: 'zzzz',
          },
        ]}
      />
    </Page>
  );
};
