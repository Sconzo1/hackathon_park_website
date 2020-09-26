import React, {Fragment, useState} from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import Card from "../../shared/components/Card/Card";
import CardHeader from "../../shared/components/Card/CardHeader";
import GridContainer from "../../shared/components/Grid/GridContainer";
import GridItem from "../../shared/components/Grid/GridItem";
import Button from "../../shared/components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import CardBody from "../../shared/components/Card/CardBody";
import AttractionCard from "./Cards/AttractionCard";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    buttonAdd: {
        border: "1px solid #FFFFFF"
    },
}

const useStyles = makeStyles(styles)

export default function Tracks ({listAttr, setListAttr}) {

    const classes = useStyles()

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openShowDialog, setOpenShowDialog] = useState(false);
    const [index, setIndex] = useState(-1);

    const handleClickOpenDeleteDialog = (i) => {
        setIndex(i)
        setOpenDeleteDialog(true);
    }

    const handleFalseDelete = () => {
        setOpenDeleteDialog(false);
    }

    const handleSuccessDelete = () => {
        setListAttr((preventDefault) => {
            preventDefault.splice(index, 1)
            return preventDefault
        })
        setOpenDeleteDialog(false)
    }

    const handleClickOpenShowDialog = (i) => {
        setIndex(i)
        setOpenShowDialog(true)
    };

    const handleCloseShowDialog = () => {
        setOpenShowDialog(false)
    };

    return (
        <Fragment>
            <Card plain>
                <CardHeader plain color="primary">
                    <GridContainer justify="space-between">
                        <GridItem xs={9}>
                            <h4 className={classes.cardTitleWhite}>Список персональных маршруток</h4>
                            <p className={classes.cardCategoryWhite}>
                                На данном экране добавляйте и просматривайте персональные маршруты для ваших пользователей
                            </p>
                        </GridItem>
                        <GridItem xs>
                            <Button className={classes.buttonAdd}
                                    color="transparent"
                                    startIcon={<AddIcon/>}>Добавить</Button>
                        </GridItem>
                    </GridContainer>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        {/*{listAttr.map((element, i) => {*/}
                        {/*    return (<AttractionCard*/}
                        {/*        key={i}*/}
                        {/*        index={i}*/}
                        {/*        title={element.name}*/}
                        {/*        desc={element.desc}*/}
                        {/*        handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}*/}
                        {/*        handleClickOpenShowDialog={handleClickOpenShowDialog}*/}
                        {/*    />)*/}
                        {/*})}*/}
                    </GridContainer>
                </CardBody>
            </Card>
            <Dialog
                open={openDeleteDialog}
                onClose={handleFalseDelete}
            >
                <DialogTitle>Удалить аттракцион?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы точно желаете удалить аттракцион {index > -1 ? listAttr[index].name : ""}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFalseDelete} color="transparent">
                        Нет
                    </Button>
                    <Button onClick={handleSuccessDelete} color="transparent" autoFocus>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openShowDialog} onClose={handleCloseShowDialog}>
                <DialogTitle><h4 style={{margin: 0}}>Title</h4></DialogTitle>
                <DialogContent>
                    <img
                        alt="100%x180"
                        style={{height: "180px", width: "100%", display: "block"}}
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <DialogContentText>
                        <h6 style={{marginBottom: 0}}>Описание:</h6>
                        <p>To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseShowDialog} color="primary">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )

}