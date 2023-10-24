import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobData from '../database/jobs';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Event as EventIcon,
  Work as WorkIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ErrorOutline as ErrorOutlineIcon,
} from '@mui/icons-material';

function JobDetail() {
  const { jobId } = useParams(); 
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    JobData.fetchJob(jobId)
      .then((jobData) => {
        setJob(jobData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [jobId]);

  if (error) {
    return (
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h5" color="error">
            <ErrorOutlineIcon fontSize="large" /> Error: {error.message}
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
    <Container className='Jobdetails' maxWidth="md"
    style={{
      padding: '2rem',
      backgroundColor: '#f5f5f5',
      backgroundImage: 'radial-gradient(2px 2px at 50px 200px, #eee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0))', // Background image
      backgroundRepeat: 'repeat, repeat, repeat',
      backgroundSize: '200px 200px, 200px 200px, 200px 200px',
      height: '100%',
    }}>
      <Paper elevation={3} style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
     
        <Typography variant="h4" color="primary">
          {job.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WorkIcon />
          <Typography variant="h6" color="textSecondary" sx={{ ml: 1 }}>
            Company Name: {job.company}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EventIcon />
          <Typography variant="h6" color="textSecondary" sx={{ ml: 1 }}>
            Type: {job.duration}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon />
          <Typography variant="h6" color="textSecondary" sx={{ ml: 1 }}>
            Location: {job.location}
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {job.job_description}
        </Typography>
        <Typography variant="body1" paragraph>
          Qualifications: {job.qualifications_paragraph}
        </Typography>


        <Typography variant="h5" color="#000000">
  <MonetizationOnIcon /> Salary: ${job.salary} / month
</Typography>
        <Typography variant="body1" paragraph>
          Vacant Seats: {job.number_of_seats}
        </Typography>
        <Typography variant="body1" paragraph>
          Last date to apply: {job.last_date_to_apply}
        </Typography>
        <Box display="flex" justifyContent="center">
        <Button
  variant="contained"
  color="primary"
  size="large"
  sx={{
    width: '50%',
    margin: '.8rem',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#1976D2', 
      transform: 'scale(1.05)', 
    },
  }}
>
  Apply Now
</Button>
        </Box>
        <Box display="flex" justifyContent="center">
  <Button
    variant="outlined"
    color="primary"
    startIcon={<CheckCircleOutlineIcon />}
    sx={{
      width: '50%',
      transition: 'border-color 0.3s, transform 0.3s',
      '&:hover': {
        borderColor: '#1976D2', 
        transform: 'scale(1.05)', 
      },
    }}
  >
    Bookmark
  </Button>
</Box>

      </Paper>
    </Container>
  );
}

export default JobDetail;
