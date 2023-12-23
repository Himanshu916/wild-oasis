import CreateCabin from "./CreateCabin";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">{<CreateCabin />}</Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabin;
