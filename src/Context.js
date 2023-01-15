import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [movies, setMovies] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&include_adult=false&query=${searchTerm}`
      );
      const data = await res.json();
      setMovies(data.results);
      // console.log(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies();
  }, [searchTerm, fetchMovies]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        movies,
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        setIsSidebarOpen,
        openVideo,
        closeVideo,
        isVideoOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
