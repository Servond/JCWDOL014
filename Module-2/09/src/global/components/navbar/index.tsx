import { Box, Container, Stack, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          top: 0,
          padding: "1rem",
          zIndex: 99,
          width: "100%",
          position: "fixed",
          backgroundColor: "#e8e8e8",
          boxShadow: "0px 4px 74px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container
          sx={{
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Ini Icon</Text>
            <Button variant="link" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="link" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
