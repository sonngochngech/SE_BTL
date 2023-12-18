import { DialogTitle, DialogContent, TextField, DialogActions, Grid, Dialog, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

function DetailDialog({ show }) {
  const statistic = {
    houseHold: "Nguyễn Văn Phú",
    fee: "43 vnd",
    paymentTime: "21/12/2022",
    amount: 43,
    status: true,
    contribution: 1000,
  }
  const handleClose = () => {
    show(false)
  }
  return (
    <>
      <Dialog open={true} maxWidth="md" fullWidth>
        <DialogTitle variant='h4'>Thông tin tài khoản</DialogTitle>
        <Divider variant='middle' color='black' />
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Box
            component='form'
            sx={{
              '& .MuiTextField-root': { m: 5, width: '25ch' }
            }}
            flexDirection='column'
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Chủ hộ'
                  variant='outlined'
                  defaultValue={statistic.houseHold}
                  InputProps={{
                    readOnly: true
                  }}
                />

                <TextField
                  label='Phí'
                  variant='outlined'
                  defaultValue={statistic.fee}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <TextField
                  label='Ngày nộp'
                  variant='outlined'
                  defaultValue={statistic.paymentTime}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Số lượng khoản phí'
                  variant='outlined'
                  defaultValue={statistic.amount}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <TextField
                  label='Trạng thái'
                  variant='outlined'
                  defaultValue={statistic.status ? "Đã nộp" : "Chưa nộp"}
                  InputProps={{
                    readOnly: true
                  }}
                />
                  <TextField
                  label='Đóng góp'
                  variant='outlined'
                  defaultValue={statistic.contribution}
                  InputProps={{
                    readOnly: true
                  }}
                  />
              </Grid>

            </Grid>


          </Box>
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button variant='outlined' onClick={handleClose} color='error'>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DetailDialog;

