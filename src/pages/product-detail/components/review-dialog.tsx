import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC, Fragment, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextareaAutosizeElement } from 'react-hook-form-mui';
import * as yup from 'yup';

interface ReviewDialogProps {
  id?: string;
  className?: string;
  productId: string;
  userId: string;
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: SubmitHandler<{ review: string }>;
}

const validationSchema = yup
  .object({
    review: yup.string().max(255).required(),
  })
  .required();

export const ReviewDialog: FC<ReviewDialogProps> = ({
  id,
  className,
  productId,
  userId,
  open,
  onClose,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const formSubmitBtnRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <Dialog id={id} className={className} maxWidth="sm" open={open}>
        <DialogTitle>Write your review</DialogTitle>

        <DialogContent>
          <DialogContentText className={'mb-5!'}>
            Please help us to serve you better by providing us feedback
          </DialogContentText>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
              <TextareaAutosizeElement
                name={'review'}
                control={control}
                helperText="Write your review here"
                required
                minRows={3}
                maxRows={5}
              />

              <input
                ref={formSubmitBtnRef}
                style={{ display: 'none' }}
                type="submit"
              />
            </Stack>
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={(e) => {
              if (onClose) {
                onClose(e);
              }
            }}
            autoFocus
          >
            Close
          </Button>

          <Button
            onClick={() => {
              formSubmitBtnRef.current?.click();
            }}
            autoFocus
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
