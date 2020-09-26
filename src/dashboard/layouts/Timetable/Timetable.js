import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {EditingState, ViewState} from '@devexpress/dx-react-scheduler';
import {
    AllDayPanel,
    AppointmentForm,
    Appointments,
    AppointmentTooltip,
    DragDropProvider,
    EditRecurrenceMenu,
    MonthView,
    Scheduler,
    Toolbar,
    ViewSwitcher,
    WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import {connectProps} from '@devexpress/dx-react-core';
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import Notes from '@material-ui/icons/Notes';
import Close from '@material-ui/icons/Close';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Create from '@material-ui/icons/Create';
import {appointments} from "../../variables/appointments";

const containerStyles = theme => ({
    container: {
        width: theme.spacing(68),
        padding: 0,
        paddingBottom: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
        paddingTop: 0,
    },
    header: {
        overflow: 'hidden',
        paddingTop: theme.spacing(0.5),
    },
    closeButton: {
        float: 'right',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 2),
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    picker: {
        marginRight: theme.spacing(2),
        '&:last-child': {
            marginRight: 0,
        },
        width: '50%',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 0),
    },
    icon: {
        margin: theme.spacing(2, 0),
        marginRight: theme.spacing(2),
    },
    textField: {
        width: '100%',
    },
});

class AppointmentFormContainerBasic extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            appointmentChanges: {},
        };

        this.getAppointmentData = () => {
            const {appointmentData} = this.props;
            return appointmentData;
        };
        this.getAppointmentChanges = () => {
            const {appointmentChanges} = this.state;
            return appointmentChanges;
        };

        this.changeAppointment = this.changeAppointment.bind(this);
        this.commitAppointment = this.commitAppointment.bind(this);
    }

    changeAppointment({field, changes}) {
        const nextChanges = {
            ...this.getAppointmentChanges(),
            [field]: changes,
        };
        this.setState({
            appointmentChanges: nextChanges,
        });
    }

    commitAppointment(type) {
        const {commitChanges} = this.props;
        const appointment = {
            ...this.getAppointmentData(),
            ...this.getAppointmentChanges(),
        };
        if (type === 'deleted') {
            commitChanges({[type]: appointment.id});
        } else if (type === 'changed') {
            commitChanges({[type]: {[appointment.id]: appointment}});
        } else {
            commitChanges({[type]: appointment});
        }
        this.setState({
            appointmentChanges: {},
        });
    }

    render() {
        const {
            classes,
            visible,
            visibleChange,
            appointmentData,
            cancelAppointment,
            target,
            onHide,
        } = this.props;
        const {appointmentChanges} = this.state;

        const displayAppointmentData = {
            ...appointmentData,
            ...appointmentChanges,
        };

        const isNewAppointment = appointmentData.id === undefined;
        const applyChanges = isNewAppointment
            ? () => this.commitAppointment('added')
            : () => this.commitAppointment('changed');

        const textEditorProps = field => ({
            variant: 'outlined',
            onChange: ({target: change}) => this.changeAppointment({
                field: [field], changes: change.value,
            }),
            value: displayAppointmentData[field] || '',
            label: field[0].toUpperCase() + field.slice(1),
            className: classes.textField,
        });

        const pickerEditorProps = field => ({
            className: classes.picker,
            // keyboard: true,
            ampm: false,
            value: displayAppointmentData[field],
            onChange: date => this.changeAppointment({
                field: [field], changes: date ? date.toDate() : new Date(displayAppointmentData[field]),
            }),
            inputVariant: 'outlined',
            format: 'DD/MM/YYYY HH:mm',
            onError: () => null,
        });

        const cancelChanges = () => {
            this.setState({
                appointmentChanges: {},
            });
            visibleChange();
            cancelAppointment();
        };

        return (
            <AppointmentForm.Overlay
                visible={visible}
                target={target}
                onHide={onHide}
            >
                <div>
                    <div className={classes.header}>
                        <IconButton
                            className={classes.closeButton}
                            onClick={cancelChanges}
                        >
                            <Close color="action"/>
                        </IconButton>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.wrapper}>
                            <Create className={classes.icon} color="action"/>
                            <TextField
                                {...textEditorProps('Заголовок')}
                            />
                        </div>
                        <div className={classes.wrapper}>
                            <CalendarToday className={classes.icon} color="action"/>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDateTimePicker
                                    label="Начало"
                                    {...pickerEditorProps('startDate')}
                                />
                                <KeyboardDateTimePicker
                                    label="Конец"
                                    {...pickerEditorProps('endDate')}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className={classes.wrapper}>
                            <LocationOn className={classes.icon} color="action"/>
                            <TextField
                                {...textEditorProps('Место')}
                            />
                        </div>
                        <div className={classes.wrapper}>
                            <Notes className={classes.icon} color="action"/>
                            <TextField
                                {...textEditorProps('Описание')}
                                multiline
                                rows="6"
                            />
                        </div>
                    </div>
                    <div className={classes.buttonGroup}>
                        {!isNewAppointment && (
                            <Button
                                variant="outlined"
                                color="secondary"
                                className={classes.button}
                                onClick={() => {
                                    visibleChange();
                                    this.commitAppointment('deleted');
                                }}
                            >
                                Удалить
                            </Button>
                        )}
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            onClick={() => {
                                visibleChange();
                                applyChanges();
                            }}
                        >
                            {isNewAppointment ? 'Создать' : 'Сохранить'}
                        </Button>
                    </div>
                </div>
            </AppointmentForm.Overlay>
        );
    }
}

const AppointmentFormContainer = withStyles(containerStyles)(AppointmentFormContainerBasic);

const styles = theme => ({
    addButton: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(4),
    },
});

const Timetable = ({classes}) => {

    const [data, setData] = useState([...appointments])
    const [currentDate, setCurrentDate] = useState('2018-06-27')
    const [confirmationVisible, setConfirmationVisible] = useState(false)
    const [editingFormVisible, setEditingFormVisible] = useState(false)
    const [deletedAppointmentId, setDeletedAppointmentId] = useState(undefined)
    const [editingAppointment, setEditingAppointment] = useState(undefined)
    const [previousAppointment, setPreviousAppointment] = useState(undefined)
    const [addedAppointment, setAddedAppointment] = useState({})
    const [startDayHour, setStartDayHour] = useState(7)
    const [endDayHour, setEndDayHour] = useState(23)
    const [isNewAppointment, setIsNewAppointment] = useState(false)

    function onEditingAppointmentChange(editingAppointment) {
        setEditingAppointment(editingAppointment)
    }

    function onAddedAppointmentChange(addedAppointment) {
        setAddedAppointment(addedAppointment)
        if (editingAppointment !== undefined) {
            setPreviousAppointment(editingAppointment)
        }
        setEditingAppointment(undefined)
        setIsNewAppointment(true)
    }

    function toggleEditingFormVisibility() {
        setEditingFormVisible(!editingFormVisible)
    }

    function toggleConfirmationVisible() {
        setConfirmationVisible(!confirmationVisible)
    }

    function commitDeletedAppointment() {
        const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId)
        setData(nextData)
        setDeletedAppointmentId(null)
        toggleConfirmationVisible()
    }

    function commitChanges({added, changed, deleted}) {
        if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            setData([...data, {id: startingAddedId, ...added}]);
        }
        if (changed) {
            const s1 = data.map(appointment => (changed[appointment.id] ? {...appointment, ...changed[appointment.id]} : appointment))
            setData([...s1])
        }
        if (deleted !== undefined) {
            setDeletedAppointmentId(deleted);
            toggleConfirmationVisible();
        }
        setAddedAppointment({})
    }

    const appointmentForm = connectProps(AppointmentFormContainer, () => {
        const currentAppointment = data
                .filter(appointment => editingAppointment && appointment.id === editingAppointment.id)[0]
            || addedAppointment;
        const cancelAppointment = () => {
            if (isNewAppointment) {
                setEditingAppointment(previousAppointment)
                setIsNewAppointment(false)
            }
        };

        return {
            visible: editingFormVisible,
            appointmentData: currentAppointment,
            commitChanges: commitChanges,
            visibleChange: toggleEditingFormVisibility,
            onEditingAppointmentChange: onEditingAppointmentChange,
            cancelAppointment,
        };
    })

    useEffect(() => {
        appointmentForm.update();
    })

    return (
        <Paper>
            <Scheduler
                data={data}
                locale="ru"
                height={600}
                firstDayOfWeek={1}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <EditingState
                    onCommitChanges={commitChanges}
                    onEditingAppointmentChange={onEditingAppointmentChange}
                    onAddedAppointmentChange={onAddedAppointmentChange}
                />
                <WeekView
                    startDayHour={startDayHour}
                    endDayHour={endDayHour}
                    name="Неделя"
                />
                <MonthView
                    name="Месяц"
                />
                <AllDayPanel/>
                <EditRecurrenceMenu/>
                <Appointments/>
                <AppointmentTooltip
                    showOpenButton
                    showCloseButton
                    showDeleteButton
                />
                <Toolbar/>
                <ViewSwitcher/>
                <AppointmentForm
                    overlayComponent={appointmentForm}
                    visible={editingFormVisible}
                    onVisibilityChange={toggleEditingFormVisibility}
                />
                <DragDropProvider/>
            </Scheduler>

            <Dialog
                open={confirmationVisible}
                onClose={() => {
                }}
            >
                <DialogTitle>
                    Delete Appointment
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this appointment?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleConfirmationVisible} color="primary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={commitDeletedAppointment} color="secondary" variant="outlined">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Fab
                color="default"
                className={classes.addButton}
                onClick={() => {
                    setEditingFormVisible(true)
                    onEditingAppointmentChange(undefined);
                    onAddedAppointmentChange({
                        startDate: new Date(currentDate).setHours(startDayHour),
                        endDate: new Date(currentDate).setHours(startDayHour + 1),
                    });
                }}
            >
                <AddIcon/>
            </Fab>
        </Paper>
    );
}


export default withStyles(styles)(Timetable);
