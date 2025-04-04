import { Page } from '../../components/page';
import { EntryPointContextProvider } from '../../shared/contexts/entry-point';
import { ProductDto } from '../home/api';
import { getProductDetail } from './api';
import { Description } from './components/description';
import { Information } from './components/information';
import { Navigation } from './components/navigation';
import { Reviews } from './components/reviews';
import { Divider } from '@mui/material';
import clsx from 'clsx';
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

interface ProductDetailPageProps {
  id?: string;
  className?: string;
}

export const ProductDetailPage: FC<ProductDetailPageProps> = () => {
  const [productDetail, setProductDetail] = useState<ProductDto | undefined>(
    undefined,
  );

  const { setLoading } = useContext(EntryPointContextProvider);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.productId) {
      setLoading(true);

      getProductDetail(params.productId).then((respBody) => {
        setProductDetail(respBody.result);

        setLoading(false);
      });
    }
  }, [params.productId, setLoading]);

  return (
    <Page id="product-detail">
      <Navigation
        className={clsx('mb-5')}
        onClickBack={() => {
          navigate('/home');
        }}
      />

      {useMemo(() => {
        return productDetail ? (
          <Information
            category={productDetail.category}
            name={productDetail.name}
            imageUrl={productDetail.imageUrl}
            price={productDetail.price.toString()}
          />
        ) : (
          <span>Nothing to display</span>
        );
      }, [productDetail])}

      <Divider />

      <Description
        className={clsx('mt-5 mb-5')}
        value={productDetail?.description}
      />

      <Divider />

      {useMemo(() => {
        return (
          <Reviews
            className={clsx('mt-5')}
            onReviewSent={async () => {}}
            reviews={productDetail?.reviews}
          />
        );
      }, [productDetail?.reviews])}
    </Page>
  );
};
