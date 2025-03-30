import { Page } from '../../components/page';
import { ProductCard } from '../../components/product-card';
import { SearchBox } from '../../components/search-box';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import { FC } from 'react';

export const HomePage: FC = () => {
  // const entryPointContext = useContext(EntryPointContext);

  return (
    <Page id="home-page">
      <SearchBox className={clsx('mb-5 h h-[100px]')} />

      <Divider />

      <div
        className={clsx(
          'mt-5 overflow-auto max-h-[calc(100%-100px-2.5rem)] md:flex md:flex-row md:flex-wrap md:gap-3',
        )}
      >
        {/* TODO: Use "useMemo" here */}

        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          price="10"
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />

        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />

        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />

        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />
        <ProductCard
          name="Fish"
          category="Food"
          description="Description"
          imageUrl="https://cdn.pixabay.com/photo/2020/02/25/17/54/illustration-4879559_640.png"
          price="10"
          className={clsx('mt-3 md:mt-0')}
        />
      </div>
    </Page>
  );
};
