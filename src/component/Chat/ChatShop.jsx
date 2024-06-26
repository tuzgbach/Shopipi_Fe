import React, { useState } from "react";

function ChatShop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="fixed bottom-0 right-0 flex flex-col items-end cursor-pointer mr-8 mb-5 z-50">
      {isModalOpen && (
        <div className="modal absolute bottom-12 bg-white rounded-2xl shadow-lg z-50 border-1">
          <div className="modal-content w-80 h-[20rem]">
            <span
              className="close cursor-pointer rounded-full p-3 absolute top-1 right-3 transition duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <h2 className="modal-title ml-5 text-xl mt-7 font-semibold">
              Chat với Homemap
            </h2>
            <p className="modal-message mt-1 text-center font-normal text-sm">
              Chào bạn! Rất vui khi được hỗ trợ cho bạn.
            </p>
            <button
              className="modal-button mt-[10rem] bg-blue-500 text-white text-center w-full rounded hover:bg-blue-700"
              onClick={() => console.log("Button clicked!")}
            >
              Bắt đầu chat
            </button>
            <p className="modal-message mt-2 text-center text-sm">
              Do Messager cung cấp
            </p>
          </div>
        </div>
      )}
      <div className="w-10 h-10 bg-blue-400 hover:bg-blue-700 flex justify-center items-center rounded-full">
        <svg className="w-6 h-6" viewBox="0 0 36 36" onClick={openModal}>
          <path
            fill="white"
            d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

//
export default ChatShop;
