import { Box } from "@mui/material";
import Category from "components/user/Category/Category";
import Slider from "components/user/Slider/Slider";

export default function HomePage() {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "auto 0",
      }}
    >
      <Slider />
      <Category />
    </Box>
  );
}
