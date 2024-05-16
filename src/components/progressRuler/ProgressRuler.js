import { Box, Typography, Slider } from '@mui/material';
import { useState } from 'react';

const ProgressRuler = ({ maxSeconds = 100, intervalSeconds = 10 }) => {
  const rulerItems = [];

  for (let i = 0; i <= maxSeconds; i += intervalSeconds) {
    rulerItems.push(
      <Typography
        key={i}
        fontSize='10px'
        fontWeight='600'
        sx={{
          color: '#a5a7ad',
          marginLeft: `${(100 / (maxSeconds / intervalSeconds)) / 6.1}%`, // Adjust the margin based on the number of intervals
        }}
      >
        {`${i}s`}
      </Typography>
    );

    if (i < maxSeconds) {
      for (let j = 1; j <= 4; j++) {
        rulerItems.push(
          <Typography
            key={`dot-${i}-${j}`}
            fontSize='10px'
            fontWeight='600'
            sx={{
              color: '#a5a7ad',
              marginLeft: `${(100 / (maxSeconds / intervalSeconds) / 6.1)}%`, // Adjust the margin for dots
            }}
          >
            .
          </Typography>
        );
      }
    }
  }

  const [value, setValue] = useState(0); // State to manage slider value

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-label='Progress Slider'
        sx={{
          position: 'absolute',
          width: '100%',
          zIndex: 99,
          top: 33,
          ml: `${(100 / (maxSeconds / intervalSeconds)) / 5.5}%`,
          '& .MuiSlider-rail': {
            display: 'none'
          },
          '& .MuiSlider-track': {
            display: 'none'
           },
           '& .MuiSlider-thumb': {
            display: 'inline-block', 
            width: 2,
            height: '87px',
            backgroundColor: 'none',
            borderRadius: 0,
            boxShadow: 'none',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -1,                
                width: 0,
                height: 0,
                borderRadius: '1px',
                borderTop: '10px solid #007bff',
                borderRight: '10px solid transparent', 
                borderLeft: '10px solid transparent',
              },
            '&:hover': {
              backgroundColor: 'none', 
              boxShadow: 'none',
            },
            '&:focus': {
                backgroundColor:'none',
                boxShadow: 'none',
            },
          },
        }}
      />
      <Box display='flex' sx={{ borderBottom: '2px solid #e1e1e3', mt: 2, pb: 1, flexGrow: 1, zIndex: 1 }}>
        {rulerItems}
      </Box>
    </Box>
  );
};

export default ProgressRuler;
