<<<<<<< HEAD
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllContributions} from "../redux/slices/contributionSlice";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}

export default function ContributionList() {
    const dispatch = useDispatch();
    const contributionState = useSelector((state) => state?.contribution?.contributions);
    useEffect(() => {
        getContributions();
    }, []);
    const getContributions = () => {
        dispatch(getAllContributions());
    }

    // console.log("ttsss");
    // console.log(contributionState);


    return (
        <React.Fragment>
            <Title>Các khoản đóng góp:</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Tên</TableCell>
                        <TableCell>Thời gian bắt đầu</TableCell>
                        <TableCell>Thời gian kết thúc</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contributionState?.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.startTime}</TableCell>
                            <TableCell>{row.endTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
=======
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllContributions} from "../redux/slices/contributionSlice";
import {useNavigate} from "react-router-dom";

// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}

export default function ContributionList() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const contributionState = useSelector((state) => state?.contribution?.contributions);
    useEffect(() => {
        getContributions();
    }, []);
    const getContributions = () => {
        dispatch(getAllContributions());
    }
    const handleClick = (row) => {
        navigate('/HouseholdContributionList/create', {state: row});
    }

    // console.log("ttsss");
    // console.log(contributionState);


    return (
        <React.Fragment>
            <Title>Các khoản đóng góp:</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Tên</TableCell>
                        <TableCell>Thời gian bắt đầu</TableCell>
                        <TableCell>Thời gian kết thúc</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contributionState?.map((row) => (
                        <TableRow key={row.id} onClick={() => handleClick(row)}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.startTime}</TableCell>
                            <TableCell>{row.endTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
}