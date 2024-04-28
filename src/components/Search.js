import React from "react";

function Search({handleSearch}) {
  return (
    <div className="ui large fluid icon input">
      {/*input for search*/}
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(handleSearch) => console.log("Searching...")}
      />
      {/*search icon*/}
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
