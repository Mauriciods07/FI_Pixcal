import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Primera from "../images/paginaSIAFI.png";
import Segunda from "../images/segunda.jpeg";
import Tercera from "../images/tercera.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section>
                <img width="100%" src={Primera} alt="Café orgánico" />
                <img width="100%" src={Segunda} />
                <img width="100%" src={Tercera} />

                
            </section>
        </div>
    );
};

export default CheckoutPage;