import React from 'react';
import Container from '@mui/material/Container';
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar>
        <Container>
          <h1>Content</h1>
        </Container>
      </TopBar>
    </div>
  );
}

export default App;
