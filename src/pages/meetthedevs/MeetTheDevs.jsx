import NavBar from '../../components/Navbar';
import React, { useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import shaveen from './Shaveen.png';
import darren from './Darren.png';
import janudi from './Janudi.png';
import isuru from './Isuru.png';
import ishuwara from './Ishuwara.png';
import ruhaib from './Ruhaib.png';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function MeetTheDevs() {
  const colour1 = '#FFC5C5';
  const colour2 = '#C5F9E7';
  const colour3 = '#C5CAF9';
  const colour4 = '#708090';
  const colour5 = '#F9C5ED';
  const colour6 = '#FDC883';

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = event => {
    const { clientX, clientY } = event;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  return (
  <div>
    <NavBar />
    <Box sx={{ padding: 6 }}>
      <Typography variant='h1' gutterBottom>
        Meet the Devs
      </Typography>
      <Typography variant='h3' gutterBottom>
        The minds behind this project
      </Typography>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour1,
                transition: 'background-color 0.5s ease-out',
              },
                      }}
          >
            <Typography variant='body1' color='text.secondary'>
              Group Lead
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Darren Victoria
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={darren}
              alt='Darren Victoria'
                          loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/darren.victoria.x/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/darrenvictoria/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/DarrenVictoria'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
              </Grid>
              <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour2,
                transition: 'background-color 0.5s ease-out',
              },
            }}
          >
            <Typography variant='body1' color='text.secondary'>
              Lead Developer    
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
                Isuru Ushan Bandara
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={isuru}
              alt=' Isuru Ushan Bandara'
              loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/isuruushanbandara/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/isuru-ushan-b2761a24a/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/IsuruUshanBandara'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
              </Grid>
              <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour3,
                transition: 'background-color 0.5s ease-out',
              },
            }}
          >
            <Typography variant='body1' color='text.secondary'>
              Lead Developer
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Ishuwara Avarjana
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={ishuwara}
              alt='Ishuwara Avarjana'
              loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/ishuwara._'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/ishuwara-avarjana-a83872253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/ishuwaraa'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
              </Grid>
              <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour4,
                transition: 'background-color 0.5s ease-out',
              },
            }}
          >
            <Typography variant='body1' color='text.secondary'>
              Developer/Q&A Tester
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Shaveen Balasooriya
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={shaveen}
              alt='Shaveen Balasooriya'
              loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/010100110110100001100001veen/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/shaveen-balasooriya-91bbb7255/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/swaggy2004'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
              </Grid>
              <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour5,
                transition: 'background-color 0.5s ease-out',
              },
            }}
          >
            <Typography variant='body1' color='text.secondary'>
              UI/UX Designer
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Janudi Thirimanna
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={janudi}
              alt='Janudi Thirimanna'
              loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/notswaggyjan?igsh=a2dpem55a25ucGVm'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/janudi-thirimanna-7b0148276/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/Janudi2005'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
              </Grid>
              <Grid item onHover>
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            sx={{
              minWidth: 300,
              maxHeight: 450,
              position: 'relative',
              paddingX: 2,
              paddingTop: 2,
              border: 3,
              borderRadius: 5,
              '&:hover': {
                backgroundColor: colour6,
                transition: 'background-color 0.5s ease-out',
              },
            }}
          >
            <Typography variant='body1' color='text.secondary'>
              Document Lead/Q&A Tester
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Ruhaib Faisal
            </Typography>
            <CardMedia
              component='img'
              height='350'
              image={ruhaib}
              alt='Ruhaib Faisal '
              loading='lazy'
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 165,
                right: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <Stack direction='column' spacing={1}>
                <a
                  href='https://www.instagram.com/ruhaib_faisal?igsh=MmVlMjlkMTBhMg=='
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <InstagramIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/ruhaib-faisal-b299b8241/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <LinkedInIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
                <a
                  href='https://github.com/RuhaibFaisal'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  <GitHubIcon
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </a>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </div>
  );
}
export default MeetTheDevs;
