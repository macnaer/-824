import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: ""
  };

  onSearch = event => {
    this.setState({
      search: event.target.value
    });

    const search = this.state.search;
    this.props.onSearch(search);
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
