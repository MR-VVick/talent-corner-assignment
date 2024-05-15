import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './videoCard.module.css'

const VideoCard = () => {
  return (
    <Box>
      <Box className={styles.container}>
        <Box className={styles.thumbnailContainer}>
          <img 
            className={styles.thumbnail}
            src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
            alt='thumbnail'/>
          <Box className={styles.chipContainer}>
            <Box className={styles.chip}>
              <span>Draft</span>
            </Box>
          </Box>    
          <span className={styles.timestamp}>00:04</span>
        </Box>
      </Box>
      <Box display='flex' alignItems='flex-start' flexDirection='column'>
        <Typography variant='h1' className={styles.title}>Project Name</Typography>
        <Typography className={styles.caption}>10 minutes ago</Typography>
      </Box>
    </Box>
  )
}

export default VideoCard