import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EmpresasUltimos12Meses from "./components/EmpresasUltimos12Meses";

function App() {
  return (
    <Container>
      <Box sx={{height: '500px'}}>
        <h1>Empresas registradas</h1>
        <h3>Últimos 12 meses</h3>
        <EmpresasUltimos12Meses/>
      </Box>
    </Container>
  );
}

export default App;
