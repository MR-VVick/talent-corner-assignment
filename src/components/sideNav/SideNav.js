import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './sideNav.module.css'
import logo from '../../assets/logo/logo.png'
import { IconHome, IconPlus } from '@tabler/icons-react'
import { MENU_ITEMS } from './data'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <Box className={styles.mainContainer}>
        <Box className={styles.container}>
            <Box display='flex' justifyContent='flex-start' sx={{p: '24px 3px 30px 0px'}}>
                <img className={styles.logo} src={logo} alt="logo"/>
            </Box>
            <Box display='flex' flexDirection='column' gap={1}>
                <Box className={styles.newVideoButton}>                  
                    <Typography>New Video</Typography>                   
                    <IconPlus width='20px' height='20px'/>
                </Box>
                {
                    MENU_ITEMS.map((item) => (
                        <Link to={item.link} style={{all: 'unset'}}>
                            <Box className={styles.menuItem}>                  
                                {item.icon}
                                <Typography>{item.label}</Typography>                   
                            </Box>
                        </Link>
                        )
                    )
                }
            </Box>
        </Box>
    </Box>
  )
}

export default SideNav