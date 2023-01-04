import * as React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import PeopleIcon from '@mui/icons-material/People';
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function Usuarios() {
  return (
    <Card>
      <CardHeader
        avatar={<PeopleIcon fontSize="large"/>}
        title="Usuarios"
        subheader="Invita nuevos usuarios y configura sus roles de acceso"
      />
      <CardActions>
        <Button size="small" color="primary">
          Configurar
        </Button>
      </CardActions>
    </Card>
  );
}
