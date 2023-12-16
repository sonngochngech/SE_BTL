import React from "react";
import { Table } from "react-bootstrap";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";

function HouseholdList() {

  const navigate = useNavigate();

  // Giả định danh sách hộ khẩu
  const households = [
    {
      householdNumber: 1,
      ownerName: "Nguyễn Văn Nam",
      numberOfMembers: 2,
      address: "Số nhà 1, phường A, Quận B, thành phố C",
    },

    // Thêm các dữ liệu  khác nếu cần
  ];

  const handleRowClick = (householdNumber) => {
    navigate(`/HouseholdList/PopulationList`);
  };

  const content = (
    <div>
      <h2>Danh sách Hộ khẩu</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Số hộ khẩu</th>
            <th>Tên chủ hộ</th>
            <th>Số thành viên</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {households.map((household, index) => (
            <tr key={index} onClick={() => handleRowClick(household.householdNumber)}>
              <td>{household.householdNumber}</td>
              <td>{household.ownerName}</td>
              <td>{household.numberOfMembers}</td>
              <td>{household.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return <Layout content={content}></Layout>;
}

export default HouseholdList;
