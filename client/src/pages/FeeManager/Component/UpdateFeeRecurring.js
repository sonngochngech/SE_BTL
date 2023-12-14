import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { feeState } from "../data";

export default function UpdateFeeRecurring(props) {
  const detail = feeState.find((item) => item.id === props.id);
  return (
    <div>
      <Modal
        style={{ marginTop: "100px" }}
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật khoản phí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên khoản phí</Form.Label>
              <Form.Control type="text" autoFocus value={detail.name} />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Select className="me-4" value={detail.feeType.id}>
                <option>Loại</option>
                <option value="1">Hộ khẩu</option>
                <option value="2">Cá nhân</option>
              </Form.Select>

              <Form.Select value={detail.frequency.id}>
                <option>Tần suất</option>
                <option value="1">1 tháng</option>
                <option value="2">1 năm</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số tiền</Form.Label>
              <Form.Control type="text" value={detail.money} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control as="textarea" value={detail.description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
