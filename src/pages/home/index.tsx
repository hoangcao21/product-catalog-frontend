import { Page } from '../../components/page';
import { ProductCard } from '../../components/product-card';
import { SearchBox } from '../../components/search-box';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <Page id="home-page">
      <SearchBox className={clsx('mb-5 h h-[100px]')} />

      <Divider />

      <div
        className={clsx('mt-5 overflow-auto max-h-[calc(100%-100px-2.5rem)]')}
      >
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl=""
          price="10"
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl=""
          price="10"
          className={clsx('mt-3')}
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl=""
          price="10"
          className={clsx('mt-3')}
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl=""
          price="10"
          className={clsx('mt-3')}
        />
      </div>
    </Page>
  );
};
