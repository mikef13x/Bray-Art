import  { useState } from 'react';
import Home from "../components/home/home";
import PhotoGrid from "../components/home/grid";
import { Box, useMediaQuery } from '@mui/material';

// Import photos
import photo1 from '../assets/images/2025-01Batman01.jpg';
import photo2 from '../assets/images/2025-01Batman01.jpg';
import photo3 from '../assets/images/2025-01Batman01.jpg';
import photo4 from '../assets/images/2025-01Batman01.jpg';
import photo5 from '../assets/images/2025-01Batman01.jpg';
import photo6 from '../assets/images/2025-01Batman01.jpg';
import photo7 from '../assets/images/2025-01Batman01.jpg';
import photo8 from '../assets/images/2025-01Batman01.jpg';
// Import more photos as needed

export default function HomePage() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const isMediumScreen = useMediaQuery('(max-width:1200px)');

    // Initial photos
    const initialPhotos = [
        { url: photo1, title: 'Collection 1' },
        { url: photo2, title: 'Collection 2' },
        { url: photo3, title: 'Collection 3' },
        { url: photo4, title: 'Collection 4' },
    ];

    // Collections
    const collection1 = [
        { url: photo5, title: 'Collection 1 - Photo 1' },
        { url: photo6, title: 'Collection 1 - Photo 2' },
        { url: photo7, title: 'Collection 1 - Photo 3' },
        { url: photo8, title: 'Collection 1 - Photo 4' },
        { url: photo5, title: 'Collection 1 - Photo 1' },
        { url: photo6, title: 'Collection 1 - Photo 2' },
        { url: photo7, title: 'Collection 1 - Photo 3' },
        { url: photo8, title: 'Collection 1 - Photo 4' },
    ];


    const collection2 = [
        { url: photo5, title: 'Collection 2 - Photo 1' },
        { url: photo6, title: 'Collection 2 - Photo 2' },
        { url: photo7, title: 'Collection 2 - Photo 3' },
        { url: photo8, title: 'Collection 2 - Photo 4' },
    ];

    const collection3 = [
        { url: photo5, title: 'Collection 3 - Photo 1' },
        { url: photo6, title: 'Collection 3 - Photo 2' },
        { url: photo7, title: 'Collection 3 - Photo 3' },
        { url: photo8, title: 'Collection 3 - Photo 4' },
    ];

    const collection4 = [
        { url: photo5, title: 'Collection 4 - Photo 1' },
        { url: photo6, title: 'Collection 4 - Photo 2' },
        { url: photo7, title: 'Collection 4 - Photo 3' },
        { url: photo8, title: 'Collection 4 - Photo 4' },
    ];

    // State to manage photos and current view
    const [photos, setPhotos] = useState(initialPhotos);
    const [currentView, setCurrentView] = useState('gallery'); // 'gallery' or collection title

    // Function to handle photo click
    const handlePhotoClick = (collection) => {
        let newPhotos;
        switch (collection) {
            case 'Collection 1':
                newPhotos = collection1;
                break;
            case 'Collection 2':
                newPhotos = collection2;
                break;
            case 'Collection 3':
                newPhotos = collection3;
                break;
            case 'Collection 4':
                newPhotos = collection4;
                break;
            default:
                newPhotos = initialPhotos;
        }
        setPhotos(newPhotos);
        setCurrentView(collection);
    };

    // Function to handle back button click
    const handleBackClick = () => {
        setPhotos(initialPhotos);
        setCurrentView('gallery');
    };

    return(
        <Box sx={{ height: '95vh', display: 'flex', flexDirection: isSmallScreen ? 'column':'row', justifyContent: 'flex-start', width: '100%' }}>
        <Box sx={{ flex: isSmallScreen ? '0 0 15%' : '0 0 25%', display: 'flex', flexDirection: 'column', alignItems: isMediumScreen ? 'center' : 'flex-start', justifyContent: 'flex-start', paddingTop: '20px' }}>
            <Box sx={{ textAlign: isMediumScreen ? 'center' : 'left', marginTop: isSmallScreen ? '20px' : '100px' }}>
                <Home />
            </Box>
        </Box>
        <Box sx={{ flex: isSmallScreen ? '0 0 75%' : '0 0 75%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: isSmallScreen ? '80vh' : '90vh', overflow: 'auto', marginTop: isSmallScreen ? '10px' : '100px', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '700px' }}>
                <PhotoGrid photos={photos} onPhotoClick={currentView === 'gallery' ? handlePhotoClick : null} title={currentView === 'gallery' ? 'Collection Gallery' : currentView} onBackClick={currentView !== 'gallery' ? handleBackClick : null} />
            </Box>
        </Box>
    </Box>
    )
}