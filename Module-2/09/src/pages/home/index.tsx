import React from "react";
import CustomTable from "./component/customTable";
import { Box } from "@chakra-ui/react";

const App: React.FC<object> = () => {
  return (
    <Box style={{ margin: "5rem" }}>
      <h1>Home</h1>
      <CustomTable />
    </Box>
  );
};

export default App;
