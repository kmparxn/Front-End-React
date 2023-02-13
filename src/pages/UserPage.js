import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Iconify from '../components/iconify/Iconify';

import DialogUser from '../components/dialog/DialogUser';
import DialogInventory from '../components/dialog/DialogInventory';
import DialogEmail from '../components/dialog/DialogEmail';
import DownloadPdf from '../utils/DownloadPdf';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: 'Laptop',
        amount: 2,
      },
      {
        date: '2020-01-02',
        customerId: 'GTX 4500 TI',
        amount: 3,
      },
    ],
  };
}

function Row(props) {

  const { row } = props;
  const [ope, setOpe] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [opent, setOpent] = React.useState(false);
  const [opente, setOpente] = React.useState(false);
  const [opented, setOpented] = React.useState(false);

  const handleDialogPdf = () => {
    DownloadPdf();
  };

  const handleDialogEmail = () => {
    setOpente(!opente);
  };


  const handleOpenMenu = (event) => {
    setOpe(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpe(null);
  };
  const handleDialogIvent = () => {
    setOpent(!opent);
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">
          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
            <Iconify icon={'eva:more-vertical-fill'} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <Stack spacing={2} direction="row">
            <Typography variant="h6" gutterBottom component="div">
                History 
              </Typography> 
              <Button  onClick={handleDialogIvent} sx={{ mt: 2  }} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Item
              </Button> 
            </Stack>
            <DialogInventory opent={opent} handleDialogIvent={handleDialogIvent} /> 
     
              <Table size="small" aria-label="purchases" sx={{ mt: 1  }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                      <TableCell align="right"><Iconify icon={'eva:trash-2-outline'} sx={{ mr:2, color: 'error.main' }} /></TableCell>
                      <TableCell align=""><Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Popover
        open={Boolean(ope)}
        anchorEl={ope}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={handleDialogEmail} >
          <Iconify icon={'eva:share-fill'} sx={{ mr: 2 }} />
          Share
        </MenuItem>
      
        <MenuItem onClick={handleDialogPdf} >
          <Iconify icon={'eva:checkmark-circle-2-fill'} sx={{ mr: 2 }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
      <DialogEmail opente={opente} handleDialogEmail={handleDialogEmail} /> 

    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('TECH SAS', 'Calle 123', 12321313, '312-233-2343', 'Col', 3.99),
  createData('MILICON SAS', 'Calle 123', 32321313, '412-233-2343', 'Col', 4.99),
  createData('ECLAIR SAS', 'Calle 123', 92321313, '712-233-2343', 'Col', 3.79),
  createData('CUPCAKE SAS', 'Calle 123', 42321313,'912-233-2343', 'Col', 2.5),
  createData('TIGO SAS', 'Calle 123', 62321313, '212-233-2343', 'Col', 1.5),
];

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
    <Container>
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Hi, Welcome back
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleDialog}>
            New Company
          </Button>
          <DialogUser open={open} handleDialog={handleDialog} /> 
        </Stack>
    </Container>
    
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nombre de la Empresa</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">NIT</TableCell>
              <TableCell align="right">Telefono</TableCell>
              <TableCell align="right">País</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
