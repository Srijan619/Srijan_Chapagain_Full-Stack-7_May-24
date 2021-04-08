import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import { Avatar, CardActions } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles ({
    container:{
        display: "flex",
        flexFlow: 'row wrap',
    },
    root: {
        height:'300px',
        width:'300px',
        margin: '1%',
    },
    content:{
        positon:"relative",
        '& *':{
            padding:'5%',
            display: "flex" ,
            justifyContent: 'center',
            alignItems: "center"
        }
        
    }
    ,avatar:{
        positon:"absolute",
        top:0,
        left:100
    }

});

const Index = () => {
    const base_url = "https://jsonplaceholder.typicode.com/users"
    const [error, setError] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    useEffect(() => {
        //const customData = []
        async function fetchMyApi() {
            setLoading(true)
            await fetch(base_url)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        throw Error("Error fetching data..")
                    }
                })
                .then(posts => {
                    setData(posts)
                })
                .catch(error => setError(error))

        }
        fetchMyApi()
        setLoading(false)

    }, []);

 

    return (
        <div className={classes.container}>
            {loading || error || !data ? <><div>Loading data...</div><div>{error}</div></> :
               <>
              {data.map(items=>{
                  return(
                    <Card className={classes.root} key={items.id}>
                    <CardContent className={classes.content}>
                        <Avatar className={classes.avatar}>{items.name.charAt(0)}</Avatar>
                        <Typography>{items.name}</Typography>
                        <Typography>@{items.username}</Typography>
                        <Link>{items.website}</Link>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center", display: "flex" }}>
                    <Button variant="contained" color="primary" onClick={()=>history.push("/users/"+items.id,{items})}>More Details</Button>
                    </CardActions>
                    </Card>
                  )
              })}
          
                </>
            }
        </div>
    );
};

export default (Index);