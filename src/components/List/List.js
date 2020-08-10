import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './list.css';

const List = ({ UserList, selectedData, UserFilteredList }) => {
  const list = (UserFilteredList.length && UserFilteredList) || UserList;
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
        {list && (typeof(list) !== 'string') && list.length && list.map((data, index) => (
          <tr key={`${data.id}`} data-content={data.title}>
            <th scope="row">{data.id}</th>
            <th className="text-center">{data.userId}</th>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td><Button color="info" className="edit" onClick={() => {selectedData(data, index)}}>Edit</Button></td>
          </tr>
        ))}
        {list && (typeof(list) === 'string') && (
          <tr>
            <td colspan="5" className="not-found pt-5"><h3 className="text-center">{list}</h3></td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
List.propTypes = {
  selectedData: PropTypes.func.isRequired,
  UserList: PropTypes.array.isRequired
};
export default List;