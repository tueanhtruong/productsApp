import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { onDeleteError } from "../../actions";
import { connect } from "react-redux";

let Modals = ({ className, error, onDeleteError }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(!!error);
    console.log(error);
  }, [error]);

  const toggle = () => {
    onDeleteError();
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Error Message</ModalHeader>
        <ModalBody>{error}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Understand
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = {
  onDeleteError: onDeleteError,
};

const mapStateToProps = (state) => ({
  error: state.error,
});

Modals = connect(mapStateToProps, mapDispatchToProps)(Modals);

export default Modals;
