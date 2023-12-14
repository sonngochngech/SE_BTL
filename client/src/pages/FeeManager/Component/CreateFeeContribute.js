import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function CreateFeeContribute(props) {
  return (
    <div>
      <Modal
        style={{ marginTop: "100px" }}
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tạo khoản đóng góp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên khoản đóng góp</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Ngày bắt đầu</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Ngày kết thúc</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số tiền</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control as="textarea" />
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
