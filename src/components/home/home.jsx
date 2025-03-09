import { Box, useMediaQuery } from '@mui/material';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <>
      <Box sx={{ fontSize: isSmallScreen ? '24px' : '58px', textAlign: isSmallScreen ? 'center' : 'left', alignItems:'flex-start', marginLeft: isSmallScreen ? '0px': '200px', marginTop: isSmallScreen ? '40px' : '100px'}}>
        {isSmallScreen ? (
          <span style={{ textAlign:'center'}}>
            Bray Wilson
            <br/> 
            Portfolio
          </span>
        ) : (
          <span style={{ textAlign:'left'}}>
            Bray
            <br/> 
            Wilson 
            <br/> 
            Portfolio
          </span>
        )}
      </Box>
      <br />
    </>
  );
}