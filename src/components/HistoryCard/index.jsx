import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HistoryCard = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Mi primer comentario
        </Typography>
        <Typography variant="h5" component="div">
          Lentejita
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          lentejita@6969.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Detalle</Button>
      </CardActions>
    </Card>
  );
};

export default HistoryCard;
