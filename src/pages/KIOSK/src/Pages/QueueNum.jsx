import React, { useEffect, useState, useRef } from "react";
import "../base.css";
import Logo from "../../../../images/NULogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutModal from "./LogoutModal";

function QueueNum() {
  const navigate = useNavigate();
  const location = useLocation();

  const queueNumber = location.state?.queueNumber;
  const dateCreated = location.state?.dateCreated;
  const formattedDate = dateCreated
    ? new Date(dateCreated).toLocaleString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })
    : "";
  console.log(location?.state?.queueNumber);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleDoneClick = () => {
    navigate("/kiosk");
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const styles = {
    header: {
      backgroundColor: "#35408E",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: 1,
    },
    logo: {
      height: "90px",
      marginRight: "10px",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontSize: "35px",
      fontFamily: "'ClanOT Medium', sans-serif",
    },
    yellowLine: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
    },
    footer: {
      position: "relative",
      width: "100%",
      backgroundColor: "#35408E",
      height: "75px",
      borderTop: "8px solid #FFD41C",
    },
  };

  useEffect(() => {
    if (!queueNumber) {
      navigate("/startpage");
      return;
    }
  }, []);

  return (
    <div className="flex flex-col lg:fixed w-full min-h-screen lg:min-h-full h-full lg:h-screen lg:overflow-hidden">
      <main className="flex flex-col justify-start lg:justify-between flex-1 h-full lg:pt-[80px]">
        <header className="header fixed-top d-flex align-items-center justify-between !border-b-[8px] !border-b-[#FFD41C]">
          <div style={styles.logoContainer}>
            <div
              className="ml-[5px] md:ml-0"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                className="max-h-[100px] w-20 md:w-full mr-[6px]"
                src={Logo}
                alt="NU Logo"
              />
              <h1 className="text-white text-[1.5rem] mt-2 md:text-[2rem] font-[200]">
                NUQX
              </h1>
            </div>
          </div>
          {showLogoutConfirm && (
            <LogoutModal
              show={showLogoutConfirm}
              onClose={handleCancelLogout}
              onConfirm={handleConfirmLogout}
            />
          )}
        {/* <button
            onClick={() => setShowLogoutConfirm(true)}
            className="w-fit rounded-lg px-3 py-1 z-9999 text-lg"
          >
            Logout
          </button> */}
        </header>

        <div
          className="h-fit my-[9rem] lg:!m-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="text-[2rem] xl:text-[3rem] text-center text-[#333] mb-6 px-4">
            Thank you for using NUQX!
          </h1>

          <div
            className="bg-white rounded-xl mb-8 w-[90%] sm:w-fit px-[15px] py-[30px] sm:px-[100px] xl:py-[50px]"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <p className="text-[#333] text-[1.5rem] text-center xl:text-[2.5rem]" style={{ fontFamily: "'ClanOT', sans-serif" }}>
              Your Ticket Number Is
            </p>
            <p className="text-[3rem] text-center xl:text-[5rem] font-bold text-[#35408E]" style={{ fontFamily: "'ClanOT', sans-serif" }}>
              {queueNumber}
            </p>
            <div className="flex justify-center flex-col items-center">
            <span className="italic text-xl md:text-4xl text-center" style={{ fontFamily: "'ClanOT', sans-serif" }}>
                {formattedDate}
              </span>
              <span className="italic text-red-600 text-lg md:text-2xl mt-2" style={{ fontFamily: "'ClanOT', sans-serif" }}>
                Please take a picture or note down your queue number.
              </span>
            </div>
          </div>


          <button
            onClick={handleDoneClick}
            className="bg-[#35408E] text-white py-[5px] px-[20px] sm:py-[10px] sm:px-[40px] rounded-3xl text-lg sm:text-2xl w-[100px] sm:w-[200px]"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#283069")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#35408E")
            }
          >
            DONE
          </button>
        </div>
        <footer className="fixed bottom-0 left-0 right-0 lg:relative h-[75px] z-50 bg-[#35408E] border-t-[8px] border-[#FFD41C]">
          {" "}
        </footer>
      </main>
    </div>
  );
}

export default QueueNum;