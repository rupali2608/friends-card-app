import axios from "axios";
import React, { Component } from "react";
import Details from "../Detail/Detail";
import CardList from "../Shared/CardList/CardList";
import Search from "../Shared/Search/Search";
import SimpleDialog from "../Shared/dialog/dialog";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.originalList = [];
    this.state = {
      friends: this.originalList,
      filterType: "name",
      selectedUser: null,
      showDetails: false,
    };
  }
  filterData = (e) => {
    console.log("value--", e.target.value);
    const temp = this.originalList.filter((v) =>
      v[this.state.filterType].includes(e.target.value)
    );
    this.setState({
      friends: temp,
    });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          this.originalList = response?.data;
          this.setState({
            friends: response?.data,
            selectedUser: null,
            temp: null,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  onCardClick = (selectedUserId) => {
    const selectedUser = this.state.friends.filter(
      (user) => user.id === selectedUserId
    )[0];
    this.setState({
      selectedUser: selectedUser,
      showDetails: true,
    });
  };
  userDelete = (id) => {
    const temp = this.state.friends.filter((user) => user.id !== id);
    this.setState({
      friends: temp,
    });
  };

  render() {
    return (
      <div className="homeStyle">
        {/* {!this.state.showDetails ? (*/}
        <>
          <h1 className="titleStyle">{this.props.title}</h1>

          <div className="searchStyle">
            <Search
              // style={{ alignItems: "center", justifyContent: "center" }}
              filterDd={
                <select
                  value={this.state.filterType}
                  onChange={(e) => {
                    this.setState({
                      filterType: e.target.value,
                    });
                  }}
                >
                  <option value="name">name</option>
                  <option value="email">email</option>
                </select>
              }
              label="Search friends"
              onSearch={this.filterData}
            />
          </div>
        </>
        <CardList
          onDelete={this.userDelete}
          onCardClick={this.onCardClick}
          friends={this.state.friends}
        />
        ,
        <SimpleDialog
          open={this.state.showDetails}
          onClose={() => this.setState({ showDetails: false })}
        >
          <Details user={this.state.selectedUser} />
        </SimpleDialog>
      </div>
    );
  }
}

export default Home;
