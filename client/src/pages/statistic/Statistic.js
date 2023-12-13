import Layout from '../Layout';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import React, {useState}  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailDialog from './DetailDialog';


const Statistic = () => {
    const [detailDialog, setDetailDialog] = useState(false);
    function createData(name, money) {
        return { name, money };
    }
    
    const rows = [
        createData('Frozen yoghurt', 15000),
        createData('Ice cream sandwich', 237000),
        createData('Eclair', 262000),
        createData('Cupcake', 30500),
        createData('Gingerbread', 356000),
    ];

    const content = (
        <>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title="Tổng số tiền đã thu"></CardHeader>
                        <CardContent>
                            <Typography fontSize={32}> 1010323 <span fontSize={16}>VND</span> </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title="Tổng số hộ đã nộp"></CardHeader>
                        <CardContent>
                            <Typography fontSize={32}> 12</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    {detailDialog ? <DetailDialog show={setDetailDialog} /> : null}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{backgroundColor:"#C4C4C4"}}>
                                <TableRow >
                                    <TableCell>Tên hộ</TableCell>
                                    <TableCell align="left">Số tiền hộ đã nộp</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => setDetailDialog(true)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.money}</TableCell>
                                    
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );

    return (
        <>
            <Layout content={content}> </Layout>
        </>
    );
}

export default Statistic;





