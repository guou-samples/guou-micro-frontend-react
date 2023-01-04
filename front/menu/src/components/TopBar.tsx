import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function TopBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline/>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Container>
              <Typography variant="h6" component="div">
                TopBar
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar/>
      {props.children}
    </React.Fragment>
  );
}
