import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";

class CustomCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card sx={{ width: 345, margin: "10px" }}>
          <CardHeader
            action={
              <IconButton onClick={() => this.props.onDelete(this.props.id)}>
                <DeleteForeverSharpIcon />
              </IconButton>
            }
          ></CardHeader>
          <CardMedia
            sx={{
              height: 140,
              width: 140,
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "10px",
            }}
            image={`https://robohash.org/${this.props.id}?3*3`}
            title="green iguana"
          />
          <CardContent height="50" text-align="left">
            {this.props.children}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => this.props.onClick(this.props.id)}
            >
              view details
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default CustomCard;
