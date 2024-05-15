import React from 'react'
import styles from './customButton.module.css'
import { Box, Typography } from '@mui/material'

const CustomButton = ({color, background, text, icon}) => {
  return (
    <Box 
        className={styles.container}
        sx={{
            "&:hover": {
                "& .customButton_text__vzRBO": {
                    color: color,
                }
            }
        }}>
        <Box className={styles.iconContainer} sx={{color: color, bgcolor: background}}>
            {icon}
        </Box>
        <Typography 
            variant='body1' 
            className={styles.text}>{text}</Typography>
    </Box>
  )
}

export default CustomButton