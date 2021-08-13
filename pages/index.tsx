// we use typescrirpt, next.js and react-responsive-modal
// develop by https://www.linkedin.com/in/morteza-hosseini/
// thanks with https://www.linkedin.com/in/niloofar-sadeghii76/

import React, { useState } from "react";
import CustomModal from "../components/custom-modal";

const Home = () => {
  const [showModal, updateShowModal] = useState(false);

  const showModalHandler = (value: boolean) => {
    updateShowModal(value);
  };

  return (
    <>
      <button onClick={() => showModalHandler(true)}>show modal</button>
      <CustomModal
        name="showModal"
        visible={showModal}
        hideModal={() => showModalHandler(false)}
      >
        <div style={{ padding: "1rem" }}>
          this is modal with backhandLer in next.js
        </div>
      </CustomModal>
    </>
  );
};

export default Home;
