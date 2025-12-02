import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

interface CustomRatingProps {
  value?: number;
  precision?: number;
  readOnly?: boolean;
  onChange?: (event: React.SyntheticEvent, newValue: number | null) => void;
}

const CustomRating: FC<CustomRatingProps> = ({
  value = 0,
  precision = 0.5,
  readOnly = false,
  onChange,
}) => {
  return (
    <Stack spacing={1}>
      <Rating
        name="custom-rating"
        value={value}
        precision={precision}
        readOnly={readOnly}
        onChange={onChange}
      />
    </Stack>
  );
};

export default CustomRating;
