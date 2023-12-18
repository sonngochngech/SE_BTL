import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteList, getCreatedList} from "../../redux/slices/listSlice";
import {useNavigate} from "react-router-dom";

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function CreatedList() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const CreatedList=useSelector((state)=>state?.list?.lists);

    useEffect(() => {
        getCreatedLists();
    }, []);

    const getCreatedLists=()=>{
        dispatch(getCreatedList());
    }

    const handleOnClick=(item)=>{
        navigate(`/HouseholdFeeList/${item._id}`);

    }
    const handleOnClickContribution=(item)=>{
        navigate(`/HouseholdContributionList/${item._id}`);
    }
    const handleDeleteClick=(item)=>{
        dispatch(deleteList(item._id))
            .unwrap()
            .then(()=>{
                window.location.reload();
            }).catch((error)=>{
                alert("Xóa thất bại");
        });
    }
    const handleDeleteClickContribution=(item)=>{
        dispatch(deleteList(item._id))
            .unwrap()
            .then(()=>{
                window.location.reload();
            }).catch((error)=>{
            alert("Xóa thất bại");
        });
    }


    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const content= (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={1}>
                <Grid item xs={15} md={25} >
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Danh sách hộ khẩu nộp phí
                    </Typography>
                    <Demo>
                        <List>
                            {CreatedList?.feeList?.map(item => (
                                <ListItem
                                    key={item.id}  // Add a unique key prop for each list item
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon  onClick={()=>handleDeleteClick(item)}/>
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={secondary ? 'Secondary text' : null}
                                        onClick={()=>handleOnClick(item)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={15} md={25} >
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Danh sách hộ khẩu đóng góp
                    </Typography>
                    <Demo>
                        <List>
                            {CreatedList?.contributionList?.map(item => (
                                <ListItem
                                    key={item.id}  // Add a unique key prop for each list item
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon   onClick={()=>handleDeleteClickContribution(item)}/>
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={secondary ? 'Secondary text' : null}
                                        onClick={()=>handleOnClickContribution(item)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
    return (
        <Layout content={content}></Layout>
    )
}