import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import './myform.css';

function MyForm(props) {
  const { title = '', body = '' } = props.selectedData;
  const [formState, setFormState] = useState({ title, body, selectedIndex: props.selectedIndex });


  const valueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState(prevState => {
      return ({ ...prevState, [name]: value })
    })
  }

    const { getUserEditList, toggle, selectedData: { id, userId } } = props;
    return (
      <Form>
        <FormGroup row>
          <Label for="title" className="font-weight-bold" sm={3}>Id<span className="float-right">:</span></Label>
          <Col sm={9}>
            <p className="mb-0 pt-2 pl-2">{id}</p>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title" className="font-weight-bold" sm={3}>User Id<span className="float-right">:</span></Label>
          <Col sm={9}>
            <p className="mb-0 pt-2 pl-2">{userId}</p>
          </Col>
        </FormGroup>
        <FormGroup row className="pb-2">
          <Label for="title" className="font-weight-bold" sm={3}>Title<span><sup className="text-danger">*</sup></span><span className="float-right">:</span></Label>
          <Col sm={9} className="position-relative">
            <Input type="text" name="title" id="title" value={formState.title} placeholder="Enter Title" onChange={valueChange} />
            {!title && <span className="text-danger error-msg font-weight-bold">Title is Required</span>}
          </Col>
        </FormGroup>
        <FormGroup row className="pb-2">
          <Label for="body" className="font-weight-bold" sm={3}>Description<span className="float-right"><sup className="text-danger">*</sup>:</span></Label>
          <Col sm={9}>
            <Input type="textarea" rows="4" name="body" id="body" value={formState.body} placeholder="Enter Description" onChange={valueChange} />
            {!body && <span className="text-danger error-msg font-weight-bold">Description is Required</span>}
          </Col>
        </FormGroup>
        <FormGroup row className="pt-3 mb-0 mt-4 form-footer">
          <Col sm={{ size: '3', offset: 6 }} className="text-right">
            <Button color="primary" id="submitForm" onClick={() => {getUserEditList(formState); toggle();}} disabled={!title || !body} >Submit</Button>
          </Col>
          <Col sm={{ size: '3' }} className="">
            <Button color="danger" onClick={() => {toggle()}}>Cancel</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  // }
};

MyForm.propTypes = {
  selectedData: PropTypes.object,
  getUserEditList: PropTypes.func,
  toggle: PropTypes.func
}

export default MyForm;
