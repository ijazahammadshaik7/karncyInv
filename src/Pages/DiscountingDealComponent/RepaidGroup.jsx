import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RepaidCard from "./RepaidCard";

const RepaidGroup = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="my-5">
      <Grid container spacing={2} className="center-card">
        <RepaidCard />
        <RepaidCard />
        <RepaidCard />
        <RepaidCard />
      </Grid>
    </Box>
  );
};

export default RepaidGroup;
