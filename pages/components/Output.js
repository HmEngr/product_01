import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(give, take, price) {
  return { give, take, price };
}

const rows = [
  createData("安樂", "中山", 900),
  createData("村里", "中山", 100000),
  createData("原田", "中山", 900),
  createData("安樂", "原田", 1300),
  createData("安樂", "中山", 900),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>支払</TableCell>
            <TableCell>受取</TableCell>
            <TableCell>金額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.give}
              </TableCell>
              <TableCell>{row.take}</TableCell>
              <TableCell>{`¥${row.price.toLocaleString()}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
