import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useParams } from "react-router";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles ({
    root: {
        height:'fit-content',
        width:'fit-content',
        margin: '1%',
    }

});
const Index = () => {
    const location = useLocation();
    const { id } = useParams();
    const classes = useStyles();
    return (
        <div > 
            <Card className={classes.root} key={id}>
                <CardContent >
                    <Typography color="primary">Name</Typography>{location.state.items.name}
                    <Divider></Divider>
                    <Typography color="primary">UserName </Typography> {location.state.items.username}
                    <Divider></Divider>
                    <Typography color="primary">Email</Typography> {location.state.items.email}
                    <Divider></Divider>
                    <Typography color="primary">Phone</Typography>{location.state.items.phone}
                    <Divider></Divider>
                    <Typography color="primary">Company</Typography>{location.state.items.company.name}
                    <Divider></Divider>
                    <Typography color="primary">Website</Typography>{location.state.items.website}
                    <Divider></Divider>
                    <Typography color="secondary" variant="h5">Address</Typography>
                    <Divider></Divider>
                    <Typography color="primary">Street</Typography>{location.state.items.address.street}
                    <Divider></Divider>
                    <Typography color="primary">Suite</Typography> {location.state.items.address.suite}
                    <Divider></Divider>
                    <Typography color="primary">City </Typography>{location.state.items.address.city}
                    <Divider></Divider>
                    <Typography color="primary">ZipCode</Typography> {location.state.items.address.zipcode}

                </CardContent>
            </Card>

        </div>
    );
};

export default Index;