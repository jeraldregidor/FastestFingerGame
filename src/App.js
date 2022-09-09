import React from "react";
import { useSelector } from "react-redux";
import Game from "./components/Game";
import Modal from "./components/Modal";
import Welcome from "./components/Welcome";

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  const { isOpenGame } = useSelector((store) => store.game);
  const { isOpenWelcome } = useSelector((store) => store.welcome);

  return (
    <main>
      {isOpenGame && <Game />}
      {isOpenModal && <Modal />}
      {isOpenWelcome && <Welcome />}
    </main>
  );
}

export default App;
