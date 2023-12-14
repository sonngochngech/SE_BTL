import React, { useState } from "react";
import Title from "../../Components/Title";
import { Button, Table } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CreateFeeRecurring from "./Component/CreateFeeRecurring";
import UpdateFeeRecurring from "./Component/UpdateFeeRecurring";
import { feeState } from "./data";
import ModalConfirm from "./Component/ModalConfirm";

export default function TableFeeRecurring() {
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
        <Title>Các khoản phí:</Title>
        <div className="d-flex flex-row justify-content-end mb-3">
          <Button variant="primary text-white" onClick={handleShowCreate}>
            Tạo khoản phí mới
          </Button>
        </div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Tên khoản phí</TableCell>
              <TableCell>Loại</TableCell>
              <TableCell>Số tiền</TableCell>
              <TableCell>Tần suất</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeState?.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.feeType ? row.feeType.name : null}</TableCell>
                <TableCell>{row.money}</TableCell>
                <TableCell>
                  {row.frequency ? row.frequency.name : null}
                </TableCell>
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
        <CreateFeeRecurring
          show={modalCreate}
          handleClose={handleClose}
          handleShow={handleShowCreate}
        />
      )}

      {modalUpdate && (
        <UpdateFeeRecurring
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
          title="Xóa thông tin khoản phí"
          description="Bạn có chắc chắn xóa khoản phí này?"
        />
      )}
    </div>
  );
}
