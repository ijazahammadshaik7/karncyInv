import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";

const Support = () => {
  const handleSupport = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5 mx-3  xl:m-10 2xl:mx-24">
        <Box className="my-5 nav-shadow rounded-md bg-white">
          <div className="p-2 md:p-5">
            <p className="font-semibold py-1">Support</p>
            <form onSubmit={handleSupport}>
              <Box sx={{ flexGrow: 1 }} className="my-5">
                <Grid container spacing={2} className="">
                  <Grid item md={12} className="w-full">
                    <div className="flex flex-col gap-3">
                      <label>Subject</label>
                      <TextField
                        id="outlined-multiline-flexible"
                        className="input-pad"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </Grid>
                  <Grid item md={12} className="w-full">
                    <div className="flex flex-col gap-3">
                      <label>Description</label>
                      <textarea
                        className="form-control border p-6 rounded-md border-grayccc"
                        id="event-description"
                        rows="3"
                        placeholder="Description"
                        required
                      ></textarea>
                    </div>
                  </Grid>
                  <div className="mt-5 mx-5">
                    <button className="button-39">Submit</button>
                  </div>
                </Grid>
              </Box>
            </form>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Support;
