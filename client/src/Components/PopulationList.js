import React from 'react';
import Layout from '../pages/Layout';
import { Table } from "react-bootstrap";

function PopulationList() {
  const households = [
    {
      householdNumber: 1,
      ownerName: "Nguyễn Văn Nam",
      numberOfMembers: 2,
      address: "Số nhà 1, phường A, Quận B, thành phố C",
      members: [
        { id: 1, name: "Nguyễn Văn Nam" },
        { id: 2, name: "Nguyễn Thị Duyên" },
       
      ],
    },
   
    // Thêm dữ liệu  khác nếu cần
  ];

  const renderHouseholdDetails = (household) => {
    return (
      <Table striped bordered>
        <tbody>
          <tr>
            <td>Số hộ khẩu</td>
            <td>{household.householdNumber}</td>
          </tr>
          <tr>
            <td>Chủ hộ</td>
            <td>{household.ownerName}</td>
          </tr>
          <tr>
            <td>Địa chỉ</td>
            <td>{household.address}</td>
          </tr>
          <tr>
            <td>Thành viên trong hộ khẩu</td>
            <td>
              <ul>
                {household.members.map((member, idx) => (
                  <li key={idx}>
                    {member.name}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  };

  const content = (
    <div style={{textAlign: 'center'}}>
      <h2>Danh sách nhân khẩu</h2>
      {households.map((household, index) => (
        <div key={index}>
          {/* <h3>Hộ khẩu số {household.householdNumber}</h3> */}
          {renderHouseholdDetails(household)}
        </div>
      ))}
    </div>
  );

  return <Layout content={content}></Layout>;
}

export default PopulationList;
