import React, { useState, useEffect } from "react";
import "./modal.css";
import { FaTimes } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { useGlobalContext } from "../Context";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ratio from "react-bootstrap/Ratio";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const { id } = useParams();
  const [video, setVideo] = useState();

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  }, []);
  // const width = window.screen.width <= 60 ? "350" : "640";
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <YouTube videoId={video} opts={opts} />
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
