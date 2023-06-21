import React, { FC } from 'react';
import { Button } from '@mui/material';

type Button = {
  text: string;
  
};
const CustomButton = ({ text }: Button) => {
  return (
    <Button type="submit" variant="contained" fullWidth>
      {text} 
    </Button>
  );
};

export {CustomButton}