import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components';

const AddResult = Styled.div`
     border: 1px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
`

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const AddResults = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <AddResult>
            <h1>Add Historic Result</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
            </form>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
        </AddResult>
    );
}




// import React from 'react';
// import { Dropdown, Button, DatePicker } from 'antd';
// import { useResultHelper } from '../../../helpers/AddResultHelper';

// export const AddResults = (props) => {
//     const dunno = useResultHelper(props.players)
//     return (
//         <div>
//             <div id="components-dropdown-demo-dropdown-button">
//                 <Dropdown.Button onClick={dunno.handleButtonClick} overlay={dunno.challengerMenu}>
//                     Challenger: {dunno.challengerId}
//                 </Dropdown.Button>
//                 <Dropdown.Button overlay={dunno.challengedMenu}>
//                     Challenged: {dunno.challengedId}
//                 </Dropdown.Button>
//                 <Dropdown.Button overlay={dunno.venueMenu}>
//                     Venue: {dunno.venue}
//                 </Dropdown.Button>
//                 <Dropdown.Button overlay={dunno.rulesetMenu}>
//                     RuleSet: {dunno.ruleset}
//                 </Dropdown.Button>

//             </div>
//             <form onSubmit={dunno.newResultSubmitHandler}>
               
//                 <input
//                     className='textInput'
//                     type='text'
//                     name='challenger'
//                     value={dunno.challengerId}
//                     />
//                 <input
//                     className='numberInput'
//                     type='number'
//                     name='challengerFrames'
//                     onChange={e => dunno.challengerScoreChangeHandler(e)}
//                     />
                
//                 :
//                  <input
//                     className='numberInput'
//                     type='number'
//                     name='challengedFrames'
//                     onChange={e => dunno.challengedScoreChangeHandler(e)}
//                 />
//                 <input
//                     className='textInput'
//                     type='text'
//                     name='challenged'
//                     value={dunno.challengedId}
//                 />
//                 <input
//                     className='textInput'
//                     type='text'
//                     name='venue'
//                     value={dunno.venue}
//                 />
//                 <input
//                     className='textInput'
//                     type='text'
//                     name='ruleset'
//                     value={dunno.ruleset}
//                 />
//                 <input
//                     className='numberInput'
//                     type='number'
//                     name='pot'
//                     onChange={e => dunno.potChangeHandler(e)}
//                 />
//                 <DatePicker onChange={dunno.dateChangeHandler} />  
//                 <Button htmlType='submit'>Submit</Button>
//             </form>
//         </div>
//     )

// }