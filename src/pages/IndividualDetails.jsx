
import { Container, Grid, Paper, Box } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu'
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import SearchAppBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';

function IndividualDetails() {

    return (
        <div>
            
            
                <Box marginX={13} paddingY={2}>
                    <Paper >
                        <Box backgroundColor='#0000ad'>
                         <SearchAppBar />
                        </Box>
                        

                        <Grid container spacing={4}>

                            <Grid item xs={1}>
                                <Box marginY={2}>
                                    <Paper elevation={3} >
                                        <IndividualMenu />
                                    </Paper>
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box margin={2}>
                                    <IndividualProfile />
                                </Box>
                            </Grid>

                            <Grid item xs={6.5}>
                                <IndividualSocial />
                               
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
           

        </div>
    );
}

export default IndividualDetails;
