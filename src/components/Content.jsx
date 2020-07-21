import React, {useState} from 'react'
import ServiceCard from './ServiceCard'
import { Grid } from '@material-ui/core';
import serviceList from './constants'
import CardActionArea from '@material-ui/core/CardActionArea';
import Form from './stepform/FormUserDetail'

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
        <Grid container spacing={2}>
            {serviceList.map(serviceListobj => getServiceList(serviceListobj))} 
            {toggled && 
                <Form/>
            }               
        </Grid>
    )
}

export default Content;