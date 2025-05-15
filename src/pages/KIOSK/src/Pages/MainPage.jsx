import { useNavigate } from "react-router-dom";
import "../Style.css";
import Logo from "../../../../images/NULogo.png";
import BackgroundImage from "../../../../images/NU-Manila.svg";
import LogoutModal from "./LogoutModal";
import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import homepage from "../../../../images/newlogo.webp";
import { RiQuestionLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleStart = (userType) => {
    navigate("/kiosk/department", { state: { userType } });
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const styles = {
    pageContainer: {
      overflow: "hidden",
      position: "fixed",
      width: "100%",
      height: "100vh",
    },
    header: {
      backgroundColor: "#35408E",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      borderBottom: "8px solid #FFD41C",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: 1,
    },
    logo: {
      height: "80px",
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
    yellowLine1: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
      position: "relative",
      marginTop: "-54px",
    },
    footer: {
      position: "relative",
      width: "100%",
      backgroundColor: "#35408E",
      height: "75px",
      borderTop: "8px solid #FFD41C",
    },
    p1: {
      fontSize: "200px",
      color: "#2d3b8c",
      marginTop: "-120px",
      maxWidth: "700px",
      lineHeight: 1.4,
      position: "relative",
      marginLeft: "250px",
      top: "350px",
      fontWeight: "bold",
    },
    p: {
      fontSize: "40px",
      color: "#2d3b8c",
      marginTop: "-120px",
      maxWidth: "700px",
      lineHeight: 1.4,
      position: "relative",
      marginLeft: "250px",
      top: "470px",
    },
    homepageBtn: {
      backgroundColor: "#2d3b8c",
      color: "white",
      border: "none",
      padding: ".5rem 1rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease-in-out",
      width: "100px",
    },
    content: {
      position: "relative",
      top: "-70px",
    },
  };

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
                  className="max-h-[80px] w-16 md:w-full mr-[2px]"
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

        <div className="h-fit my-[9rem] lg:!m-auto flex flex-col lg:flex-row px-4 items-center gap-4 md:gap-10 w-full max-w-[130rem]">
          <div>
            <h1 className="text-2xl font-bold uppercase md:text-4xl text-center md:text-left text-black">
              Welcome to NUQX
            </h1>
            <img
              src={homepage}
              alt="Home Page"
              className="w-[90%] mx-auto sm:w-1/2 lg:w-[30rem] xl:w-[40rem] 2xl:w-[45rem] rounded-2xl border-[2px] border-[#35408E]"
            />
          </div>

            <div className="flex flex-col items-center pt-60 lg:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-white">
              <div
                onClick={() => handleStart("New Student")}
                className="flex flex-col cursor-pointer p-4 bg-[#35408E] rounded-2xl items-start justify-center h-full"
              >
                <h1 className="text-lg lg:text-3xl font-semibold">New Student</h1>
                <span className="text-sm lg:text-xl">
                  For freshmen or transferees enrolling at NU for the first time.
                </span>
              </div>
              <div
                onClick={() => handleStart("Continuing Student")}
                className="flex flex-col cursor-pointer p-4 bg-[#35408E] rounded-2xl items-start justify-center h-full"
              >
                <h1 className="text-lg lg:text-3xl font-semibold">Continuing</h1>
                <span className="text-sm lg:text-xl">
                  For returning students currently enrolled at NU.
                </span>
              </div>
            </div>
            <div
              onClick={() => handleStart("Senior or PWD")}
              className="flex flex-col cursor-pointer p-4 mt-3 bg-[#35408E] rounded-2xl text-[#FFD41C] w-full min-h-[140px] justify-center items-start"
            >
              <h1 className="text-lg lg:text-3xl font-semibold">Priority</h1>
              <span className="text-sm lg:text-xl">
                For Senior citizens (60+) or persons with disabilities who need accessible, prioritized services.
              </span>
            </div>


           <div className="flex justify-center mt-3 w-full">
    <Link
      to="/help/1"
      className="flex items-center text-[#35408E] hover:underline text-lg space-x-1"
    >
      <RiQuestionLine className="w-5 h-5" />
      <span>How to use the system</span>
    </Link>
            </div>
          </div>
        </div>
        <footer className="fixed bottom-0 left-0 right-0 lg:relative h-[75px] z-50 bg-[#35408E] border-t-[8px] border-[#FFD41C]">
          {" "}
        </footer>
      </main>
    </div>
  );
}

export default MainPage;
