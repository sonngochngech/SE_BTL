import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../pages/Layout';
import { useState } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function AddHouseholder() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const members = location.state?.members || [];
    const [selectedMember, setSelectedMember] = useState('');

    const handleSelectChange = (e) => {
        setSelectedMember(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        navigate('/CreateHH');
        toast.success('Tạo hộ khẩu thành công');
    };

    const content = (
        <>
            
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="selectMember">
                        <Form.Label>Chọn chủ hộ từ danh sách thành viên:</Form.Label>
                        <Form.Select value={selectedMember} onChange={handleSelectChange}>
                            <option value="">Chọn thành viên</option>
                            {members.map((member, index) => (
                                <option key={index} value={member}>
                                    {member}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Tạo hộ khẩu
                    </Button>
                </Form>
            </div>
        </>
    );

    return <Layout content={content}></Layout>;
}