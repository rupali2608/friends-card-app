import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import CustomCard from "../Card/CustomCard";
import "./CardList.scss";

class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CardListStyle">
        {this.props.friends?.map(({ name, email, website, id }) => (
          <CustomCard
            onDelete={this.props.onDelete}
            onClick={this.props.onCardClick}
            id={id}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {website}
            </Typography>
          </CustomCard>
        ))}
      </div>
    );
  }
}

export default CardList;
