import React from 'react';
import Container from '@mui/material/Container';
import Usuarios from "./components/Usuarios";
import ConfiguracionAvanzada from "./components/ConfiguracionAvanzada";
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div>
      <Container>
        <Stack spacing={5}>
          <Usuarios/>
          <ConfiguracionAvanzada/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
