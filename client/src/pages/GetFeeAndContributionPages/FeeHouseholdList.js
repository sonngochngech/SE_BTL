import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFeeHouseholdList, updateDate, updateStatus} from "../../redux/slices/listSlice";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Button from "react-bootstrap/Button";

export default function FeeHouseholdList() {

    //declare
    const {id} = useParams();
    const [firstTime, setFirstTime] = React.useState(1);
    const [selectedDates, setSelectedDates] = React.useState({});
    const listState = useSelector((state) => state?.list?.feeList);
    const dispatch = useDispatch();
    //get first time data
    useEffect(() => {
        getFeeHouseList();
    }, [id]);
    const getFeeHouseList = () => {
        dispatch(getFeeHouseholdList(id));

    }

    //handle function
    const handleCheckboxChange = (changedList) => {
        // Dispatch an action to update the status in the Redux store
        dispatch(updateStatus({id: changedList._id, status: !changedList.status}));
    };

    const handleDateChange = (changedList, date) => {
        setSelectedDates((prevSelectedDates) => ({
            ...prevSelectedDates,
            [changedList._id]: date, // Store the selected date for the specific row
        }));
        setFirstTime(2);
        dispatch(updateDate({id: changedList._id, date: dayjs(date).format('MM/DD/YYYY')}))

    };
    const handleOnClickSave = () => {
        const data = listState?.map((feeHousehold) => ({
            _id: feeHousehold._id,
            status: feeHousehold.status,
            paymentTime: feeHousehold.paymentTime
        }));
        // console.log("datttt");
        // console.log(data);

    }

    // console.log(listState);
    const content = (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hộ khẩu</TableCell>
                            <TableCell>Số thành viên</TableCell>
                            <TableCell>Tiền cần nộp</TableCell>
                            <TableCell>Thời gian</TableCell>
                            <TableCell>Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listState?.map((onelist) => (
                            <TableRow
                                key={onelist.household?.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="onelist">
                                    {onelist.household?.name}
                                </TableCell>
                                <TableCell>{onelist.household?.memberNumber}</TableCell>
                                <TableCell>{onelist.amount}</TableCell>
                                <TableCell>
                                    {!(onelist.paymentTime && firstTime === 1) ? (

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker
                                                    label="Date"
                                                    value={selectedDates[onelist._id] || null}
                                                    onChange={(date) => handleDateChange(onelist, date)}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    ) : onelist.paymentTime}
                                </TableCell>
                                <TableCell><Checkbox defaultChecked={onelist.status}
                                                     onChange={() => handleCheckboxChange(onelist)}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <Button variant="primary"
                        style={{fontSize: '1.5rem', margin: '0 auto', backgroundSize: 'cover', width: '300px'}}
                        onClick={handleOnClickSave}>
                    Lưu
                </Button>
            </div>
        </>

    );
    return (
        <Layout content={content}></Layout>
    )
}