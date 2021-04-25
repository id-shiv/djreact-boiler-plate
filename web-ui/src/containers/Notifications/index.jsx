import React from "react";

import { ContextConsumer } from "../../context";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

const Notifications = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ContextConsumer>
      {({ notifications }) => (
        <Paper style={{ backgroundColor: "transparent" }}>
          <TableContainer style={{ backgroundColor: "transparent" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "lightblue" }}>Category</TableCell>
                  <TableCell style={{ color: "lightblue" }}>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notifications
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((notification, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ color: "white" }}>
                        {notification.category}
                      </TableCell>
                      <TableCell style={{ color: "white" }}>
                        {notification.message}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[20, 40, 60, 80, 100]}
              component="div"
              count={notifications.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Paper>
      )}
    </ContextConsumer>
  );
};

export default Notifications;
