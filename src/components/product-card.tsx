import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { FC } from 'react';

export interface ProductCardProps {
  className?: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  price: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  className,
  name,
  category,
  imageUrl,
  description,
  price,
}) => {
  return (
    <Card className={clsx('product-card', className)}>
      <div className={clsx('p-[16px]')}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">{category}</Typography>
      </div>

      <CardMedia
        className={clsx('max-h-[200px] md:max-h-[100px]')}
        component="img"
        image={imageUrl}
        alt="Paella dish"
      />

      <CardContent>
        <Typography
          className={clsx('max-h-[80px] line-clamp-4')}
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions className={clsx('flex flex-row justify-between p-[16px]!')}>
        <Typography className={clsx('text-3xl!')}>{`$${price}`}</Typography>

        <Button variant="outlined">View details</Button>
      </CardActions>
    </Card>
  );
};
