import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PopupModal from "./components/PopupModal/PopupModal";
import List from "./components/List/List";
import Search from "./components/Search/Search";
import { getUserEditList, getUserSearchList, fetchUserListAction } from './Action/action';
import { getUserListData, getUserListFilteredData } from './Reducers/reducer';

function App(props) {
  const { UserList, getUserEditList, UserFilteredList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    props.fetchUserListAction();
    props.getUserSearchList('');
  }, [])

  // Used to toggle modal popup
  const toggle = () => {
    setIsOpen( !isOpen );
  }

  const selectedDataIndex = (data, index) => {
    setSelectedData(data);
    setSelectedIndex(index);
    toggle();
  }

  // Used to Filter list
  const getSearchResult = (e) => {
    props.getUserSearchList(e.target.value);
  }
  
  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12" className="mb-4">
          <h1 className="text-center">Users Details</h1>
          {/* Auto complete search input */}
          <Search getSearchResult={getSearchResult} getUserSearchList={getUserSearchList} />
        </Col>
        <Col sm="12">
          {/* Show list of All/ Filtered data */}
          <List UserList={UserList} UserFilteredList={UserFilteredList} selectedData={selectedDataIndex}  />
        </Col>
        {/* Popup to Edit/ Update selected data */}
        <PopupModal isOpen={isOpen} toggle={toggle} selectedData={selectedData} getUserEditList={getUserEditList} selectedIndex={selectedIndex} />
      </Row>
    </Container>
  );
}

App.propTypes = {
  UserList: PropTypes.array.isRequired,
  UserFilteredList: PropTypes.array.isRequired,
  getUserEditList: PropTypes.func.isRequired,
  getUserSearchList: PropTypes.func.isRequired,
  fetchUserListAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  UserList: getUserListData(state),
  UserFilteredList: getUserListFilteredData(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserEditList: getUserEditList,
  getUserSearchList: getUserSearchList,
  fetchUserListAction: fetchUserListAction
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
