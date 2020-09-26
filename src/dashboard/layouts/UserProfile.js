import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import GridItem from "shared/components/Grid/GridItem.js";
import GridContainer from "shared/components/Grid/GridContainer.js";
import CustomInput from "shared/components/CustomInput/CustomInput.js";
import Button from "shared/components/CustomButtons/Button.js";
import Card from "shared/components/Card/Card.js";
import CardHeader from "shared/components/Card/CardHeader.js";
import CardAvatar from "shared/components/Card/CardAvatar.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardFooter from "shared/components/Card/CardFooter.js";

import avatar from "dashboard/assets/img/marc.jpg";

const styles = {
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    cardJobText: {
        margin: 0
    },
    cardTitle: {
        margin: 0
    },
};


const useStyles = makeStyles(styles);


export default function UserProfile() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Редактировать</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Компания"
                                        id="company-disabled"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Логин"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Email"
                                        id="email-address"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Имя"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Фамилия"
                                        id="last-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Город"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Страна"
                                        id="country"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="О себе"
                                        id="about-me"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 3
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Обновить</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <img src={avatar} alt="Фото профиля"/>
                        </CardAvatar>
                        <CardBody profile>
                            <h3 className={classes.cardTitle}>Иван Кормызов</h3>
                            <p className={classes.cardJobText}>Старший менеджер</p>
                            <p className={classes.description}>
                                Повседневная практика показывает, что укрепление и развитие структуры обеспечивает
                                широкому кругу участие в формировании направлений прогрессивного
                                развития
                            </p>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
