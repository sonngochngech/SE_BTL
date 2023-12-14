import React, { useState } from "react";
import Title from "../../Components/Title";
import { Button, Table } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { feeContributeState } from "./data";
import ModalConfirm from "./Component/ModalConfirm";
import CreateFeeContribute from "./Component/CreateFeeContribute";
import UpdateFeeContribute from "./Component/UpdateFeeContribute";

export default function TableFeeContribution() {
  const [id, setId] = useState(null);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleShowCreate = () => setModalCreate(true);

  const handleShowUpdate = (id) => {
    setModalUpdate(true);
    setId(id);
  };

  const handleShowDelete = () => setModalDelete(true);

  const handleClose = () => {
    if (modalCreate) {
      setModalCreate(!modalCreate);
    }
    if (modalUpdate) {
      setModalUpdate(!modalUpdate);
    }
    if (modalDelete) {
      setModalDelete(!modalDelete);
    }
  };

  return (
    <div>
      <React.Fragment>
        <Title>Các khoản phí đóng góp:</Title>
        <div className="d-flex flex-row justify-content-end mb-3">
          <Button variant="primary text-white" onClick={handleShowCreate}>
            Tạo mới
          </Button>
        </div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Tên khoản đóng góp</TableCell>
              <TableCell>Thời gian bắt đầu</TableCell>
              <TableCell>Thời gian kết thúc</TableCell>
              <TableCell>Số tiền</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeContributeState?.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.money}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <Button
                    variant="success"
                    className="me-3"
                    onClick={() => {
                      handleShowUpdate(row.id);
                    }}
                  >
                    Cập nhật
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShowDelete();
                    }}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>

      {modalCreate && (
        <CreateFeeContribute
          show={modalCreate}
          handleClose={handleClose}
          handleShow={handleShowCreate}
        />
      )}

      {modalUpdate && (
        <UpdateFeeContribute
          show={modalUpdate}
          handleClose={handleClose}
          handleShow={handleShowUpdate}
          id={id}
        />
      )}

      {modalDelete && (
        <ModalConfirm
          show={modalDelete}
          handleClose={handleClose}
          handleShow={handleShowDelete}
          title="Xóa thông tin khoản đóng góp"
          description="Bạn có chắc chắn xóa khoản đóng góp này?"
        />
      )}
    </div>
  );
}
