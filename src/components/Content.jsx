import React, {useState} from 'react'
import ServiceCard from './ServiceCard'
import { Grid } from '@material-ui/core';
import serviceList from './constants'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Form from './stepform/FormUserDetail'
import './animation.css';

const Content = () => {
    const [toggled, toggle] = useState(false);
    const getServiceList = (serviceListobj) => {
        return (
            <Grid item xs={12} sm={4}>
            {!toggled && 
                <CardActionArea onClick={() => toggle(toggled => !toggled)}>
                    <ServiceCard {...serviceListobj} />
                </CardActionArea>
            }
            </Grid>
        );
    }

    return (
        <>
            {!toggled &&
                <div class="fadeIn">
                    <Typography component="div">
                        <Box fontSize={40} fontWeight="fontWeightMedium">
                            Select a Style
                        </Box>
                    </Typography>
                    <Grid container spacing={2} style={{paddingTop: 40}}>
                        {serviceList.map(serviceListobj => getServiceList(serviceListobj))} 
                    </Grid>
                </div>
            }
            {toggled &&
                <div class="fadeIn">
                    <Typography component="div">
                        <Box fontSize={40} fontWeight="fontWeightMedium">
                            Details
                        </Box>
                    </Typography>
                    <Form/>
                </div>
            }
        </>           
    )
}

export default Content;