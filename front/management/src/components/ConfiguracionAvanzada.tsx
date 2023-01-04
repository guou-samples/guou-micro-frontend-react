import * as React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function ConfiguracionAvanzada() {
  return (
    <Card>
      <CardHeader
        avatar={<PeopleIcon fontSize="large"/>}
        icon={
          <IconButton color="primary">
            <SettingsIcon fontSize="medium"/>
          </IconButton>
        }
        title="Configuración avanzada"
        subheader="Habilita/Deshabilita configuraciones específicas"
      />
      <CardActions>
        <Button size="small" color="primary">
          Configurar
        </Button>
      </CardActions>
    </Card>
  );
}
