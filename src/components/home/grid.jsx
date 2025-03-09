import { Box, Grid, Typography, Button, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';


export default function PhotoGrid({ photos, onPhotoClick, title = 'Collection Gallery', onBackClick }) {
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{ width: '100%', padding: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                {onBackClick && (
                    <Button onClick={onBackClick} sx={{ marginRight: '20px' }}>
                        Back
                    </Button>
                )}
                <Typography variant="h6" align="center" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <span className='font'>{title}</span>
                </Typography>
                {onBackClick && <Box sx={{ width: '64px' }} />} {/* Placeholder to balance the space */}
            </Box>
            <Box className="hide-scrollbar" sx={{ height: isSmallScreen ? '57vh' : 'calc(90vh - 160px)', overflow: 'auto' }}> {/* Adjust height as needed */}
                <Grid container spacing={4}> {/* Increased spacing to 4 (32px) */}
                    {photos.map((photo, index) => (
                        <Grid item xs={12} sm={6} key={index}> {/* xs={12} for small screens, sm={6} for larger screens */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box
                                    component="img"
                                    src={photo.url}
                                    alt={photo.title}
                                    sx={{ width: '100%', height: 'auto', cursor: onPhotoClick ? 'pointer' : 'default' }}
                                    onClick={onPhotoClick ? () => onPhotoClick(photo.title) : null}
                                />
                                <Typography variant="subtitle1" align="center" sx={{ marginTop: '8px' }}>
                                    <span className='font'>{photo.title}</span>
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

PhotoGrid.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    onPhotoClick: PropTypes.func,
    title: PropTypes.string,
    onBackClick: PropTypes.func
};