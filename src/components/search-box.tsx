import { yupResolver } from '@hookform/resolvers/yup';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextFieldElement } from 'react-hook-form-mui';
import * as yup from 'yup';

const validationSchema = yup
  .object({
    query: yup.string().max(255).required(),
  })
  .required();

interface SearchBoxProps {
  className?: string;
  onSubmit?: SubmitHandler<{ query: string }>;
}

export const SearchBox: FC<SearchBoxProps> = ({ className, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  return (
    <div id="search-box" className={className}>
      <form onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined} noValidate>
        <div
          className={clsx('flex flex-col justify-center items-center gap-2')}
        >
          <TextFieldElement
            className={clsx('w-full lg:w-3/4')}
            size="small"
            name={'query'}
            control={control}
            helperText="You can search products by name, category"
            required
          />

          <Button
            startIcon={<SearchIcon />}
            size="small"
            variant="contained"
            type={'submit'}
            color={'primary'}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
