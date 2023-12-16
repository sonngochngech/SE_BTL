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
}