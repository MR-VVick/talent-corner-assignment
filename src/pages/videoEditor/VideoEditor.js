import { Grid, Box, Typography, Slider, Button, useMediaQuery } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import styles from './videoEditor.module.css'
import AssetCard from '../../components/assetCard/AssetCard'
import { IconAngle, IconArrowBackUp, IconArrowForwardUp, IconArrowsMaximize, IconClipboardCopy, IconColumns2, IconCopy, IconCrop, IconFlipHorizontal, IconFlipVertical, IconGrid4x4, IconHandStop, IconLayersDifference, IconList, IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled, IconPlus, IconPointer, IconResize, IconScissors, IconUpload, IconZoomIn, IconZoomOut } from '@tabler/icons-react'
import PercentageDropdown from '../../components/percentageDropdown/PercentageDropdown'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'
import ProgressRuler from '../../components/progressRuler/ProgressRuler'

const VideoEditor = () => {
    // const duration = 200;
    const [scalePercentage, setScalePercentage] = useState(50);
    const [opacityPercentage, setOpacityPercentage] = useState(65);
    const [rotation, setRotation] = useState(15);
    const [positionX, setPositionX] = useState('');
    const [positionY, setPositionY] = useState('');
    const [positionZ, setPositionZ] = useState('');
    const [position, setPosition] = useState(0);
    const [play, setPlay] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(50);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);

    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery('(max-width: 900px) and (min-width: 464px)');

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', () => {
                setDuration(Math.floor(videoElement.duration));
            });
            videoElement.addEventListener('timeupdate', () => {
                setCurrentTime(Math.floor(videoElement.currentTime));
                setPosition(Math.floor(videoElement.currentTime));
            });
        }
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', () => {
                    setDuration(Math.floor(videoElement.duration));
                });
                videoElement.removeEventListener('timeupdate', () => {
                    setCurrentTime(Math.floor(videoElement.currentTime));
                    setPosition(Math.floor(videoElement.currentTime));
                });
            }
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.currentTime = position;
            if (play) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
    }, [position, play]);

    const handlePrevTrack = () => {
        setPosition((prevPosition) => Math.max(0, prevPosition - 5)); // Move backward by 5 seconds
    };

    const handleNextTrack = () => {
        setPosition((prevPosition) => Math.min(duration, prevPosition + 5)); // Move forward by 5 seconds
    };

    const handleZoomChange = (event, newValue) => {
        setZoomLevel(newValue);
    };

    const handleScaleSliderChange = (event, newValue) => {
        setScalePercentage(newValue);
    };

    const handleScaleSliderInputChange = (event) => {
        setScalePercentage(event.target.value);
    };

    const handleOpacitySliderChange = (event, newValue) => {
        setOpacityPercentage(newValue);
    };

    const handleOpacitySliderInputChange = (event) => {
        setOpacityPercentage(event.target.value);
    };

    const handleRotationInputChange = (event) => {
        const { value } = event.target;
        const newValue = value.slice(0, 3);
        setRotation(newValue);
    };

    const handlePositionXInputChange = (event) => {
        const { value } = event.target;
        setPositionX(value);
    };

    const handlePositionYInputChange = (event) => {
        const { value } = event.target;
        setPositionY(value);
    };

    const handlePositionZInputChange = (event) => {
        const { value } = event.target;
        setPositionZ(value);
    };

    const formatDuration = (value) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const handleSliderChange = (_, value) => {
        setPosition(value);
        setCurrentTime(value);
    };

    const togglePlay = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlay(true);
      } else {
        videoRef.current.pause();
        setPlay(false);
      }
    };

    return (
        <Box>
            <Grid container height='100vh' mb={isMobile?'540px':isTablet?'200px':0}>
                <Grid 
                    item 
                    sx={{
                        borderRight: '1px solid rgb(225, 225, 227)', 
                        bgcolor: 'white', 
                        position: 'relative',
                    }} 
                    xs={12} 
                    md={3.5}>
                        <Box className={styles.header}>
                            <Typography className={styles.title}>Assets</Typography>
                        </Box>        
                        <Grid container spacing={1} p='0 1.5rem' mt='10px' sx={{pb: isMobile?'60px':0}}>
                            <Grid item sm={3} xs={5} md={5}>
                                <AssetCard />
                            </Grid>
                            <Grid item sm={3} xs={5} md={5}>
                                <AssetCard />
                            </Grid>
                        </Grid>
                        <Box 
                            display='flex' 
                            justifyContent='center'
                            position='absolute'
                            left={0}
                            right={0}
                            bottom={isMobile?0:200}
                            mb={2}>
                            <button className={styles.addButton}>
                                <IconPlus width='18px' height='16px'/>
                            </button>
                            <Box display='flex' position='absolute' right={15} gap={1} >
                                <button className={styles.addButton} style={{background: 'rgb(255, 163, 26)'}}>
                                    <IconList width='18px' height='16px'/>
                                </button>
                                <button className={styles.addButton} style={{background: '#ff4500'}}>
                                    <IconGrid4x4 width='18px' height='16px'/>
                                </button>
                            </Box>
                        </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={1} mt='14px'>
                        <IconPointer style={{cursor: 'pointer'}} width='18px' height='18px'/>
                        <IconHandStop style={{cursor: 'pointer'}} width='18px' height='18px'/>
                        <IconCrop style={{cursor: 'pointer'}} width='20px' height='20px'/>
                        <PercentageDropdown />
                    </Box>
                    <Box width='100%' display='flex' justifyContent='center' mt={2}>
                        <VideoPlayer videoRef={videoRef}/>
                    </Box>
                </Grid>
                <Grid 
                    item 
                    sx={{
                        borderLeft: '1px solid rgb(225, 225, 227)', 
                        bgcolor: 'white', 
                        position: 'relative',
                        overflow: 'auto'
                    }} 
                    xs={12} 
                    md={3.5}>
                        <Box 
                            className={styles.header} 
                            py='14px !important'
                            display='flex'
                            justifyContent='end'>
                            <button className={styles.button}>
                                Export
                                <Box className={styles.iconContainer}>
                                    <IconUpload width='20px' height='20px' style={{marginTop: '3px'}}/>
                                </Box>
                            </button>
                        </Box>
                        <Typography className={styles.subTitle}>Properties</Typography>
                        <Box p='0 16px' pb={isMobile?'30px':0}>
                            <Box className={styles.propertiesContainer}>
                                <IconResize width='30px'/>
                                <Typography className={styles.propertiesTitle}>Scale</Typography>
                                <Slider
                                    value={scalePercentage}
                                    onChange={handleScaleSliderChange}
                                    min={0}
                                    max={100}/>
                                <div className={styles.propertiesInput}>
                                    <input
                                        value={scalePercentage}
                                        onChange={(event) => handleScaleSliderInputChange(event)}
                                        style={{all: 'unset', width: '100%'}}
                                    />
                                    <span>%</span>
                                </div>    
                            </Box>
                            <Box className={styles.propertiesContainer}>
                                <IconLayersDifference width='35px'/>
                                <Typography className={styles.propertiesTitle}>Opacity</Typography>
                                <Slider
                                    value={opacityPercentage}
                                    onChange={handleOpacitySliderChange}
                                    min={0}
                                    max={100}/>
                                 <div className={styles.propertiesInput}>
                                    <input 
                                        value={opacityPercentage} 
                                        onChange={(event) => handleOpacitySliderInputChange(event)} 
                                        style={{all: 'unset', width: '100%'}}/>  
                                    <span>%</span>      
                                </div>    
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={7} md={7}>
                                    <Box className={styles.propertiesContainer}>
                                        <IconAngle width='20px'/>
                                        <Typography className={styles.propertiesTitle}>Rotation</Typography>
                                        <div 
                                            className={styles.propertiesInput} 
                                            style={{
                                                width: '35px', 
                                                marginLeft: '0px',     
                                                justifyContent: 'center',
                                                textAlign: 'center'
                                            }}>
                                            <input 
                                                value={rotation}
                                                onChange={(event) => handleRotationInputChange(event)} 
                                                style={{all: 'unset', width: '18px'}}/>  
                                            <span>°</span> 
                                        </div>         
                                    </Box>
                                </Grid>
                                <Grid item md={2.5}>
                                    <Box 
                                        className={styles.propertiesContainer}  
                                        style={{justifyContent: 'center', height: '1.9rem'}}>
                                        <IconFlipVertical width='30px'/>
                                    </Box>
                                </Grid>
                                <Grid item md={2.5}>
                                    <Box 
                                        className={styles.propertiesContainer}  
                                        style={{justifyContent: 'center', height: '1.9rem'}}>
                                        <IconFlipHorizontal width='30px'/>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box className={styles.propertiesContainer}>
                                <IconArrowsMaximize width='20px'/>
                                <Typography className={styles.propertiesTitle}>Position</Typography>
                                <div 
                                    className={styles.propertiesInput} 
                                    style={{
                                        width: '35px', 
                                        marginLeft: '0px',     
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}>
                                    <input 
                                        value={positionX}
                                        placeholder='X'
                                        onChange={(event) => handlePositionXInputChange(event)} 
                                        style={{all: 'unset', width: '18px'}}/>
                                </div> 
                                <div 
                                    className={styles.propertiesInput} 
                                    style={{
                                        width: '35px', 
                                        marginLeft: '10px',     
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}>
                                    <input 
                                        value={positionY}
                                        placeholder='Y'
                                        onChange={(event) => handlePositionYInputChange(event)} 
                                        style={{all: 'unset', width: '18px'}}/>
                                </div>
                                <div 
                                    className={styles.propertiesInput} 
                                    style={{
                                        width: '35px', 
                                        marginLeft: '10px',     
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}>
                                    <input 
                                        value={positionZ}
                                        placeholder='Z'
                                        onChange={(event) => handlePositionZInputChange(event)} 
                                        style={{all: 'unset', width: '18px'}}/>
                                </div>        
                            </Box>
                        </Box>
                </Grid>
            </Grid>
            <Box sx={{
                clear: 'both',
                position: 'absolute',
                height: '210px',
                bottom: '0',
                width: '100%',
                backgroundColor: 'white',
                zIndex: 9999,
            }}>
                <Box className={styles.playerInterfaceContainer} px={2}>
                    <Box className={styles.playerButtonContainer} onClick={handlePrevTrack}>
                        <IconPlayerTrackPrevFilled width='13px' height='13px'/>
                    </Box>  
                    <Box className={styles.playerButtonContainer} sx={{p: '8px 8px 5px 8px !important'}} onClick={togglePlay}>
                        {
                            !play?
                            <IconPlayerPlayFilled 
                                width='18px' 
                                height='18px' />:
                            <IconPlayerPauseFilled 
                                width='18px' 
                                height='18px'/>
                        }
                    </Box>  
                    <Box className={styles.playerButtonContainer} onClick={handleNextTrack}>
                        <IconPlayerTrackNextFilled width='13px' height='13px'/>
                    </Box>  
                    <Box width='10rem' display='flex' ml={1}>
                        <Slider
                            size="small"
                            value={position}
                            min={0}
                            max={duration}
                            onChange={handleSliderChange}
                            sx={{
                                color: 'rgba(0,0,0,0.87)',
                                height: 4,
                                '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&::before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 16%)`,
                                },
                                '&.Mui-active': {
                                    width: 20,
                                    height: 20,
                                },
                                },
                                '& .MuiSlider-rail': {
                                opacity: 0.28,
                                },
                            }}
                            />
                    </Box>
                    <Box display='flex' gap={1.5} ml={1}>
                        <Typography className={styles.timestamp}>{formatDuration(currentTime)}</Typography>
                        <Typography className={styles.timestamp} sx={{color: 'rgb(194, 196, 200);'}}>/</Typography>
                        <Typography className={styles.timestamp}>-{formatDuration(duration - position)}</Typography>
                    </Box> 
                </Box>
                <Box className={styles.iconButtonContainer} px={isMobile?'.5rem !important':'1rem !important'}>
                    <Box className={styles.iconButton}>
                        <IconArrowForwardUp width='16px' height='16px'/>
                    </Box>
                    <Box className={styles.iconButton}>
                        <IconArrowBackUp width='16px' height='16px'/>
                    </Box>
                    <Box className={styles.iconButton}>
                        <IconScissors width='16px' height='16px'/>
                    </Box>
                    <Box className={styles.iconButton}>
                        <IconCopy width='16px' height='16px'/>
                    </Box>
                    <Box className={styles.iconButton}>
                        <IconClipboardCopy width='16px' height='16px'/>
                    </Box>
                    <Box className={styles.iconButton}>
                        <IconColumns2 width='16px' height='16px'/>
                    </Box>
                    <Box display='flex' alignItems='center' ml={3}>
                        <IconZoomOut width='17px' height='17px'/>
                        <Slider
                            size="small"
                            value={zoomLevel}
                            onChange={handleZoomChange}
                            aria-labelledby="zoom-slider"
                            style={{ width: '100px', margin: '0 8px' }}
                        />
                        <IconZoomIn width='17px' height='17px'/>
                    </Box>
                </Box>  
                <Box >
                    <ProgressRuler />
                </Box>    
            </Box>
        </Box>
    )
}

export default VideoEditor