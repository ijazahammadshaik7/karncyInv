import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardDeals from "./CardDeals";

const CardGroup = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="my-5">
      <Grid container spacing={2} className="center-card">
        <CardDeals />
        <CardDeals />
        <CardDeals />
        <CardDeals />
      </Grid>
    </Box>
  );
};

export default CardGroup;
