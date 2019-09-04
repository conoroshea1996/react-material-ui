import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        border: 'silver 1px solid',
        margin: '40px',
    },
    flex: {
        display: 'flex'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: 'solid 1px red'
    },
    chatWindow: {
        width: '70%'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
}));


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    Topic Placeholder
                </Typography>

                <div className={classes.flex}>

                    <div className={classes.topicsWindow}>
                        <List>
                            <ListItem button>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.chatWindow}></div>
                </div>
                <div className={classes.flex}></div>
            </Paper>

        </div>
    )
}