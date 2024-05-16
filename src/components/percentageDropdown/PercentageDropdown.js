import React, { useState } from 'react';
import { Slider, Typography, Box, Button, Popper, Paper, ClickAwayListener } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';

const PercentageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const anchorRef = React.useRef(null);

  const handleSliderChange = (event, newValue) => {
    setPercentage(newValue);
  };

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Button ref={anchorRef} variant="outlined" onClick={handleToggle}>
        {percentage}% <IconChevronDown style={{marginLeft: '8px'}} width='16px' height='16px'/>
      </Button>
      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8], // Adjust vertical offset (top, left) as needed
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <Box sx={{ p: 2, minWidth: '200px' }}>
                <Slider
                  value={percentage}
                  onChange={handleSliderChange}
                  aria-labelledby="percentage-slider"
                  min={0}
                  max={100}
                />
              </Box>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </Box>
  );
};

export default PercentageDropdown;
