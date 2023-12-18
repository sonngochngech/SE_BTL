import Layout from '../Layout';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import React, {useState}  from 'react';
import {Table, Modal} from 'antd';


const Statistic = () => {
    const [detailDialog, setDetailDialog] = useState(false);
    const [openInforModal, setOpenInforModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (record) => {
        setOpenInforModal(true);
        setSelectedRow(record);
      };
      const handleOpenInforModal = () => {
        setOpenInforModal(true);
      };
      const handleCloseInforModal = () => {
        setOpenInforModal(false);
      };

    function createData(name, money, contribution, date, number, state) {
        return { name, money, contribution, date, number, state };
    }
    
    const dataset = [
        createData('Nguyễn Văn Phú', 43, 1222, "19/12/2023", 2, "Đã nộp"),
        createData('Hoàng Ngọc Thành', 43, 15, "19/12/2023", 2, "Đã nộp"),
        createData('Trương Quốc Khuê', 43,20, "19/12/2023", 2, "Đã nộp"),
        createData('Lưu Văn Đạt', 43,1, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Quốc Duy', 43,2, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Quốc Quân', 43,1, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Ngọc Tuấn', 43,1, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Quốc Thành', 43,2, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Thị Diễn', 43,2, "19/12/2023", 2, "Đã nộp"),
        createData('Nguyễn Văn Tùng', 43,2, "19/12/2023", 2, "Đã nộp"),
    ];

    const columns = [
        {
          title: "Tên chủ hộ",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Số tiền đã nộp",
          dataIndex: "money",
          key: "money",
        },
        {
          title: "Số tiền đóng góp",
          dataIndex: "contribution",
          key: "contribution",
        },
      ];

    const content = (
        <>
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="Tổng số tiền đã thu"></CardHeader>
                        <CardContent>
                            <Typography fontSize={32}> 430 <span fontSize={16}>VND</span> </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="Tổng số hộ đã nộp"></CardHeader>
                        <CardContent>
                            <Typography fontSize={32}> 10</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="Tổng số tiền đã đóng góp"></CardHeader>
                        <CardContent>
                            <Typography fontSize={32}> 1266</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Table
                     style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
                     pagination={{
                     pageSizeOptions: ["9", "5"],
                     showSizeChanger: true,
                    showQuickJumper: true,
                       style: { marginRight: "15px" },
                      }}
                      columns={columns}
                     dataSource={dataset}
                      size="small"
                      onRow={(record) => ({
                        onClick: () => {
                        handleRowClick(record);
                        setOpenInforModal(true)
                      },
                          })}
                     />
                      {selectedRow && (
        <Modal
          open={openInforModal}
          title="Thông tin chi tiết"
          okText="Xác nhận"
          cancelText="Đóng"
          onOk={handleCloseInforModal}
          onCancel={handleCloseInforModal}
          width="600px"
        >
          <div
            className="inforAccount"
            style={{ display: "flex", textAlign: "left" }}
          >
            <div style={{ flex: "1", display: "block" }}>
              <h5>Tên chủ hộ</h5>
              <p> {selectedRow.name}</p>
              <h5>Số tiền đã nộp</h5>
              <p> {selectedRow.money}</p>
              <h5>Số tiền đóng góp</h5>
              <p> {selectedRow.contribution}</p>
            </div>
            <div style={{ flex: "1", display: "block" }}>
              <h5>Số thành viên</h5>
              <p> {selectedRow.number}</p>
              <h5>Ngày nộp</h5>
              <p> {selectedRow.date}</p>
              <h5>Trạng thái</h5>
              <p> {selectedRow.state}</p>
            </div>
          </div>
        </Modal>
      )}
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


// {detailDialog ? <DetailDialog show={setDetailDialog} /> : null}
// <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead sx={{backgroundColor:"#C4C4C4"}}>
//             <TableRow >
//                 <TableCell>Tên hộ</TableCell>
//                 <TableCell align="left">Số tiền hộ đã nộp</TableCell>
//                 <TableCell align='left'>Đóng góp</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {rows.map((row) => (
//                 <TableRow
//                     key={row.name}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     onClick={() => setDetailDialog(true)
//                     }
//                 >
//                     <TableCell component="th" scope="row">
//                         {row.name}
//                     </TableCell>
//                     <TableCell align="left">{row.money}</TableCell>
//                     <TableCell align='left'>{row.contribution}</TableCell>
                
//                 </TableRow>
//             ))}
//         </TableBody>
//     </Table>
// </TableContainer>




