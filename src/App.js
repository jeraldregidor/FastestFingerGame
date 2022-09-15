import React from "react";
import { useSelector } from "react-redux";
import Game from "./components/Game";
import Modal from "./components/Modal";
import NoConnection from "./components/NoConnections";
import Welcome from "./components/Welcome";

function App() {
  const { isOpenModal } = useSelector((store) => store.modal);
  const { isOpenGame } = useSelector((store) => store.game);
  const { isOpenWelcome } = useSelector((store) => store.welcome);
  const { isNoConnection } = useSelector((store) => store.participants);

  return (
    <main>
      {isOpenGame && <Game />}
      {isOpenModal && <Modal />}
      {isOpenWelcome && !isNoConnection && <Welcome />}
      {isNoConnection && <NoConnection/>}
    </main>
  );
}

export default App;
