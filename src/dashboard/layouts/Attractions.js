import React, {Fragment, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

import GridItem from "shared/components/Grid/GridItem";
import GridContainer from "shared/components/Grid/GridContainer";
import Card from "shared/components/Card/Card";
import CardHeader from "shared/components/Card/CardHeader";
import CardBody from "shared/components/Card/CardBody";

import AttractionCard from "./cards/AttractionCard";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "../../shared/components/CustomButtons/Button";
import AddIcon from '@material-ui/icons/Add';
import TabSelector from "../../shared/components/TabSelector/TabSelector";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import Table from "../../shared/components/Table/Table";
import {Map, YMaps} from "react-yandex-maps";

import ChartistGraph from "react-chartist";
import {complaintsChart, revenueChart, visitsChart} from "../variables/charts";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import CardFooter from "../../shared/components/Card/CardFooter";
import AccessTime from "@material-ui/icons/AccessTime";
import MapIcon from '@material-ui/icons/Map';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import AppsIcon from '@material-ui/icons/Apps';

import styles from "../assets/jss/attractionsStyle";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(styles);

const TabTile = ({listAttr, setListAttr}) => {

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
        <TabPanel value="0">
            <Card plain>
                <CardHeader plain color="primary">
                    <GridContainer justify="space-between">
                        <GridItem xs={9}>
                            <h4 className={classes.cardTitleWhite}>Список аттракционов</h4>
                            <p className={classes.cardCategoryWhite}>
                                На данном экране вы сможете отредактировать, добавить и удалить любой аттракцион
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
                        {listAttr.map((element, i) => {
                            return (<AttractionCard
                                key={i}
                                index={i}
                                title={element.name}
                                desc={element.desc}
                                handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
                                handleClickOpenShowDialog={handleClickOpenShowDialog}
                            />)
                        })}
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
        </TabPanel>
    )

}

const TabAnalytics = ({listAttr}) => {

    const classes = useStyles()

    const arrayAttr = listAttr.map(obj => Object.values(obj));

    return (
        <TabPanel value="1">
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={revenueChart.data}
                                type="Line"
                                options={revenueChart.options}
                                listener={revenueChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Выручка</h4>
                            <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                                за последний месяц
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> обновлено 3 часа назад
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph
                                className="ct-chart"
                                data={visitsChart.data}
                                type="Bar"
                                options={visitsChart.options}
                                responsiveOptions={visitsChart.responsiveOptions}
                                listener={visitsChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Посетители</h4>
                            <p className={classes.cardCategory}>
                <span className={classes.successText}>+4621
                </span>{" "}
                                за последний месяц
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/>только что
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartistGraph
                                className="ct-chart"
                                data={complaintsChart.data}
                                type="Line"
                                options={complaintsChart.options}
                                listener={complaintsChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Жалобы</h4>
                            <p className={classes.cardCategory}>За последний месяц</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> обновлено 12 минут назад
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <GridContainer justify="space-between">
                                <GridItem xs={9}>
                                    <h4 className={classes.cardTitleWhite}>Аналитика аттракционов</h4>
                                    <p className={classes.cardCategoryWhite}>
                                        Отслеживайте работоспособность и посещаемость своих аттракционов
                                    </p>
                                </GridItem>
                                <GridItem xs={1}>
                                    <Tooltip
                                        title="Скачать"
                                        placement="top"
                                        classes={{tooltip: classes.tooltip}}
                                    >
                                        <IconButton color="inherit">
                                            <GetAppRoundedIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </GridItem>
                            </GridContainer>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Имя", "Описание"]}
                                tableData={arrayAttr}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </TabPanel>
    )

}

const TabMap = ({listAttr}) => {

    return (
        <TabPanel value="2"
                  style={{
                      margin: "0 -55px -60px"
                  }}>
            <YMaps>
                <Map width="100%" height="78vh" defaultState={{center: [55.75, 37.57], zoom: 9}}/>
            </YMaps>
        </TabPanel>
    )

}


export default function Attractions() {

    const [mockAttr, setMockAttr] = useState([
        {
            name: "Название 1",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 2",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 3",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 4",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 5",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 6",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 7",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
        {
            name: "Название 8",
            desc: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров"
        },
    ]);
    const [value, setValue] = useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        {
            value: "0",
            tabName: "Описание",
            tabIcon: AppsIcon,
        },
        {
            value: "1",
            tabName: "Аналитика",
            tabIcon: BarChartRoundedIcon,
        },
        {
            value: "2",
            tabName: "Карта",
            tabIcon: MapIcon,
        }
    ]

    return (
        <Fragment>
            <TabContext value={value}>
                <TabSelector value={value} handleChange={handleChange} tabs={tabs}/>
                <TabTile listAttr={mockAttr} setListAttr={setMockAttr}/>
                <TabAnalytics listAttr={mockAttr}/>
                <TabMap listAttr={mockAttr}/>
            </TabContext>
        </Fragment>
    );
}
