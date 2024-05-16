import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './assetCard.module.css'
import { IconMusic } from '@tabler/icons-react'

const AssetCard = () => {
  return (
    <Box>
        <Box 
            sx={{
                height: '80px', 
                borderRadius: '0.625rem',
                bgcolor: '#f7f7f8',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {/* <img width='100%' height='80px' style={{objectFit: 'cover', borderRadius: '0.625rem'}} src="https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-006-too-much.jpg" alt="thumbnail"/> */}
            <IconMusic />
            <div className={styles.timestamp}>0.29</div>
        </Box>
        <Typography className={styles.caption}>vid-01020304.mpg</Typography>
    </Box>
  )
}

export default AssetCard