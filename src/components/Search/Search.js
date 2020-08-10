import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ getSearchResult }) => {
  return (
    <Input type="text" name="search" id="search" className="mt-2" placeholder="Search Using Title..." onChange={getSearchResult} />
  );
}
Search.propTypes = {
  getSearchResult: PropTypes.func,
};
export default Search;