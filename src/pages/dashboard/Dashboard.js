import React from 'react'
import SideNav from '../../components/sideNav/SideNav'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import SearchBar from '../../components/searchBar/SearchInput'
import styles from './dashboard.module.css'
import CustomButton from '../../components/customButton/CustomButton'
import { IconBrandYoutubeFilled, IconScissors, IconVideo } from '@tabler/icons-react'

const Dashboard = () => {
  return (
    <Grid container sx={{height: '100vh'}}>
        <Grid item xs={12} md={2.4}>
            <SideNav />
        </Grid>
        <Grid item xs={12} md={9.6}>
            <Box display='flex' gap={3} p={2} justifyContent='flex-end'>
                <SearchBar />
                <Avatar />
            </Box>
            <Box sx={{margin: '2.5rem 2.5rem 0px'}}>
                <Typography variant="h2" className={styles.subtitle}>Create your first <strong>video!</strong></Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3.9}>
                        <CustomButton 
                            color='rgb(157, 69, 255)'
                            background='rgba(157, 69, 255, 0.1)'
                            text='Create Project'
                            icon={<IconScissors />}/>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                        <CustomButton 
                            color='rgb(255, 100, 106)'
                            background='rgba(255, 106, 112, 0.1)'
                            text='Record Video'
                            icon={<IconVideo />}/>
                    </Grid>
                    <Grid item xs={12} md={3.9}>
                        <CustomButton 
                            color='rgb(86, 102, 245)'
                            background='rgb(235, 237, 255)'
                            text='All Videos'
                            icon={<IconBrandYoutubeFilled />}/>
                    </Grid>   
                </Grid>
            </Box>   
        </Grid>
    </Grid>
  )
}

export default Dashboard