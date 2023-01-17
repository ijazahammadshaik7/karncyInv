import React from "react";
import cocoblu from "../../images/poorvika.png";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("13%", " 80days", " 763")];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const NewDeal = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between ">
        <h5>Invoice Raised To</h5>
        <div className="flex w-[40%]">
          <img src={cocoblu} alt="" className="w-12" />
          <p>
            Cocoblu Retail Limted (Rattan India Enterprises Group Company & MOU
            with enterprises.)
          </p>
        </div>
        <Link className="button-39" to="/viewDealDetail">
          View Deal Details
        </Link>
      </div>
      <div className="flex justify-between  py-3">
        <p>Invoice Raised by: COOE01DD9DXP | Bangalore</p>
        <p>Deal Value : ₹ 42,83,452</p>
      </div>
      <div>
        <h4 className="">Investment Status:</h4>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} className="progress-ht" />
        </Box>
        <TableContainer className=" my-5 ">
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading-color">
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  Expected Gross Yield
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold" }}
                  className="table-pad "
                >
                  Tenure
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  XScore V2.0
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  No transaction fee on this deal
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell className="table-pad">{row.calories}</TableCell>
                  <TableCell className="table-pad">{row.fat}</TableCell>
                  <TableCell className="table-pad">
                    <button
                      onClick={handleClickOpen("paper")}
                      className="button-39"
                    >
                      Buy Now{" "}
                    </button>
                    <div>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <DialogTitle id="scroll-dialog-title">
                          Agreement Details
                        </DialogTitle>
                        <DialogContent dividers={scroll === "paper"}>
                          <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem
                            Ipsum.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum.
                          </DialogContentText>
                          <form action="" onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center px-2">
                              <Checkbox {...label} name="one" required />
                              <p className="text-center text-sm">
                                Accept & Proceed (By accepting you agree to
                                digital sign the document.)
                              </p>
                            </div>
                            <div className="flex justify-center ">
                              <div>
                                <button className="button-39 my-5">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default NewDeal;
