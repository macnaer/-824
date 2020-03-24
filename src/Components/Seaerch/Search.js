import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: ""
  };

  onSearch = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    this.props.onSearch(value);
  };

  render() {
    return (
      <div className=" navbar-right">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={this.onSearch}
          />
        </div>
      </div>
    );
  }
}
export default Search;
