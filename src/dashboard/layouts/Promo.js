import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import Button from "shared/components/CustomButtons/Button";
import GridItem from "shared/components/Grid/GridItem";
import GridContainer from "shared/components/Grid/GridContainer";
import Table from "shared/components/Table/Table";
import Card from "shared/components/Card/Card";
import CardHeader from "shared/components/Card/CardHeader";
import CardBody from "shared/components/Card/CardBody";

import styles from "../assets/jss/promoStyle"
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(styles);

export default function Promo() {

    const classes = useStyles();

    const mockAttr = [
        ["30% на Ромашку", "Ромашка", "+42", "₽12,100"],
        ["1 + 1", "Все", "+110", "₽23,789"],
        ["Приключения зовут!", "Дикий парк", "+6", "₽142"],
        ["Студент - приходи", "Все", "+1", "₽35"],
    ]

    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <GridContainer justify="space-between">
                        <GridItem xs={9}>
                            <h4 className={classes.cardTitleWhite}>Список акций</h4>
                            <p className={classes.cardCategoryWhite}>
                                Отслеживайте акции и их эффективность
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
                    <Table
                        tableHeaderColor="primary"
                        tableHead={["Название", "Аттракцион", "Прирост посетителей", "Выручка"]}
                        tableData={mockAttr}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
