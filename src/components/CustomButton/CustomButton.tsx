import React, { FC } from 'react';
import { Button } from '@mui/material';

interface IButton  {
  text: string;
  
};
const CustomButton:FC<IButton> = ({ text }) => {
  return (
    <Button type="submit" variant="contained" fullWidth>
      {text} 
    </Button>
  );
};

export {CustomButton}