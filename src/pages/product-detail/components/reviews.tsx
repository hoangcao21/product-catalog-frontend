import { ReviewDto } from '../api';
import { ProductReview } from './product-review';
import { ReviewDialog } from './review-dialog';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { FC, useMemo, useState } from 'react';

interface ReviewsProps {
  id?: string;
  className?: string;
  reviews?: ReviewDto[];
  onReviewSent: () => Promise<void>;
}

export const Reviews: FC<ReviewsProps> = ({
  id,
  className,
  reviews,
  onReviewSent,
}) => {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

  return (
    <div id={id} className={clsx('product-reviews', className)}>
      <div className={'mb-3 flex flex-row justify-between'}>
        <Typography variant="h5">Recent Reviews</Typography>

        <Button
          startIcon={<EditIcon />}
          variant="contained"
          size="small"
          onClick={() => {
            setShouldOpenDialog(true);
          }}
        >
          Write your review
        </Button>
      </div>

      {useMemo(() => {
        return reviews?.length ? (
          reviews?.map((val, index) => {
            return (
              <ProductReview
                className={clsx(index > 0 && 'mt-5')}
                key={val.reviewId}
                userName={val.userName}
                rating={val.rating}
                comment={val.comment}
              />
            );
          })
        ) : (
          <span>Nothing to display</span>
        );
      }, [reviews])}

      <ReviewDialog
        productId="id"
        userId="userId"
        open={shouldOpenDialog}
        onClose={() => {
          setShouldOpenDialog(false);
        }}
        onSubmit={async (data) => {
          console.log('submitData', data);

          setShouldOpenDialog(false);

          await onReviewSent();
        }}
      />
    </div>
  );
};
