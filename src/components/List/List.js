import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './list.css';

const List = ({ UserList, selectedData, UserFilteredList }) => {
  const list = (UserFilteredList && (UserFilteredList.length && UserFilteredList)) || UserList;
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>USER ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {list && list.length ? list.map((data, index) => (
          <tr key={`${data.id}`} data-content={data.title}>
            <th scope="row">{data.id}</th>
            <th className="text-center">{data.userId}</th>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td>{data.id ? (<Button color="info" className="edit" name="edit" onClick={() => {selectedData(data, index)}}>Edit</Button>) : ''}</td>
          </tr>
        )) : ''}
      </tbody>
    </Table>
  );
}
List.propTypes = {
  selectedData: PropTypes.func,
  UserList: PropTypes.array.isRequired
};
export default List;