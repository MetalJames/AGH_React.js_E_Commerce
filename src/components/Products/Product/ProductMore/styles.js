import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>({
    toolbar: theme.mixins.toolbar,
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100px',
        paddingLeft: '7vw'
    },
    cardTitleMain: {
        display: 'flex',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: 900,
        margin: '3% 0'
    },
    cardDescription: {
        paddingLeft: '3vw',
        paddingRight: '3vw',
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: theme.spacing(3),
        paddingBottom: '75px',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleCenter: {
        marginTop: '25%',
    }
}));