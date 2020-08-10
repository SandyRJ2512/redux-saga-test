import React from 'react';
import { Modal, ModalBody, ModalHeader, } from 'reactstrap';
import PropTypes from 'prop-types';
import MyForm from '../MyForm/MyForm';
import './popupmodal.css';

const PopupModal = ({ isOpen, toggle, selectedData, getUserEditList, selectedIndex }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
        <p className="mb-0 text-center modal-title-text">Update Information</p>
      </ModalHeader>
      <ModalBody>
        {/* Shows Edit/ Update form in modal popup */}
        <MyForm selectedData={selectedData} getUserEditList={getUserEditList} selectedIndex={selectedIndex} toggle={toggle} />
      </ModalBody>
    </Modal>
  );
}
PopupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  selectedData: PropTypes.object.isRequired,
  getUserEditList: PropTypes.func
};
export default PopupModal;