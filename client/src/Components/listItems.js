<<<<<<< HEAD
import * as React from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {Accordion, ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function MainListItems() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{fontSize: 'small !important'}}>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Dashboard</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <ListItemIcon>
                            <ShoppingCartIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý cán bộ</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý khoản phí</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <ListItemIcon>
                            <BarChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý hộ khẩu</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                    <ListGroup>
                            <ListGroup.Item onClick={() => navigate("/CreateHH")}>Tạo hộ khẩu</ListGroup.Item>
                            <ListGroup.Item onClick={() => navigate("/HouseholdList")}>Xem danh sách hộ khẩu</ListGroup.Item>
                          
                        </ListGroup>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <ListItemIcon>
                            <LayersIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý phí</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item onClick={() => navigate("/GetFACMana")}>Lập danh sách</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </React.Fragment>

    )
}

=======
import * as React from "react";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Accordion, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminWrap } from "../route/PrivateRoute";

export default function MainListItems() {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Accordion>

				{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do */}
				<AdminWrap
					e
					element={
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<ListItemIcon>
									<ShoppingCartIcon />
								</ListItemIcon>
								<ListItemText
									primary={
										<span style={{ fontSize: "15px" }}>Quản lý cán bộ</span>
									}
								/>
							</Accordion.Header>
							<Accordion.Body>
								<ListGroup>
									<ListGroup.Item onClick={() => navigate("/GetCANBOMana")}>
										Xem cán bộ
									</ListGroup.Item>
									<ListGroup.Item onClick={() => navigate("/AddCANBO")}>
										Thêm cán bộ
									</ListGroup.Item>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>
					}
					nelement={<></>}
				/>

				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText
							primary={
								<span style={{ fontSize: "15px" }}>Quản lý khoản phí</span>
							}
						/>
					</Accordion.Header>
					<Accordion.Body>
					</Accordion.Body>
				</Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <ListItemIcon>
                            <BarChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý hộ khẩu</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <ListItemIcon>
                            <LayersIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontSize: '15px'}}>Quản lý phí</span>}/>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            <ListGroup.Item onClick={() => { navigate("/GetFACMana"); window.location.reload(); }}>Lập danh sách</ListGroup.Item>
                            <ListGroup.Item onClick={()=>navigate("/CreatedList")}>Xem danh sách</ListGroup.Item>
                            <ListGroup.Item onClick={() => navigate("/GetStatistic")}>Thống kê</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </React.Fragment>

    )
}
>>>>>>> e8338ac64a73f6f0571432505f511b97403c48c9
