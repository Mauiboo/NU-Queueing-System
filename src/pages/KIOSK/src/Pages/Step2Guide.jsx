import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../images/NULogo.png";
import applicationIcon from "../../../../images/applicationGuideIcon.png";
import inquiryIcon from "../../../../images/inquiryGuideIcon.png";
import { Link } from "react-router-dom";

function Step2Guide() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      overflow: "hidden",
      position: "fixed",
      width: "100%",
      height: "100vh",
    },
    header: {
      backgroundColor: "#35408E",
      height: "90px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      justifyContent: "space-between",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
    },
    logo: {
      height: "90px",
      marginRight: "20px",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontSize: "36px",
      fontFamily: "'ClanOT Medium', sans-serif",
    },
    yellowLine: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "60%",
    },
    yellowLine1: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
      position: "relative",
      marginTop: "-60px",
    },
    footer: {
      position: "relative",
      width: "100%",
      backgroundColor: "#35408E",
      height: "75px",
    },
    content: {
      position: "relative",
      top: "-70px",
    },
    step2Container: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexDirection: "row",
      gap: "1rem",
      marginTop: "auto",
      paddingBottom: "2rem",
      paddingRight: "2rem",
    },
  };

  return (
    <div className="flex flex-col xl:fixed w-full min-h-screen xl:min-h-full h-full xl:h-screen xl:overflow-hidden">
      <main className="flex flex-col justify-start xl:justify-between flex-1 h-full">
        <div>
          <header style={styles.header}>
            <div style={styles.logoContainer}>
              <img src={Logo} style={styles.logo} alt="NU Logo" />
              <h1 style={styles.headerTitle}>Select your concern</h1>
            </div>
            <div>
              {/* You might have other header elements here */}
            </div>
          </header>
          <div className="flex flex-row">
            <div className="bg-[#35408e] h-[8px] hidden xl:block w-[40%]"></div>
            <div className="bg-[#FFD41C] h-[8px] w-full xl:w-[60%] float-right"></div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row h-full items-center  w-full mx-auto">
          <div className="flex flex-col items-start text-white grow bg-[#35408e] xl:h-full w-full xl:w-[40%] justify-between xl:justify-start px-4">
            <div className="mt-6 xl:mt-12 w-full">
              <div style={styles.step2Container}>
                <b className="text-3xl xl:text-5xl whitespace-nowrap block text-center">Step 2. Choose your concern:</b>
                <div className="pt-1 text-xl xl:text-3xl text-center">
                  Application or Inquiry
                </div>
              </div>
            </div>
            <div style={styles.buttonContainer} className="w-full">
              <Link
                to="/help/1"
                className="bg-[#35408e] text-center px-6 py-3 hover:underline hover:!text-white rounded-md text-base xl:text-lg shadow-md border border-white/30"
              >
                &lt; Previous Step
              </Link>
              <Link
                to="/help/3"
                className="bg-[#35408e] text-center px-6 py-3 hover:underline hover:!text-white rounded-md text-base xl:text-lg shadow-md border border-white/30"
              >
                Next Step &gt;
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full grow xl:w-[60%] items-center justify-center mt-6 gap-4 pb-5 p-4">
            <h2 className="text-center text-black text-2xl xl:text-5xl">
              Hello, <br /> What will you do today?
            </h2>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center ">
              <div>
                <div className="bg-[#35408e] flex flex-col items-center justify-center rounded-2xl text-white border-none px-3 py-4  w-[11rem] h-[11rem] xl:!w-[14rem] xl:!h-[14rem]">
                  <img
                    src={applicationIcon}
                    className="h-[80px] xl:h-[120px] w-[80px] xl:w-[120px]"
                    alt="Application icon"
                  />
                  <span className="text-lg xl:text-2xl">Application</span>
                </div>
              </div>
              <div>
                <div className="bg-[#35408e] flex flex-col items-center justify-center rounded-2xl text-white border-none px-3 py-4  w-[11rem] h-[11rem] xl:!w-[14rem] xl:!h-[14rem]">
                  <img
                    src={inquiryIcon}
                    className="h-[80px] xl:h-[120px] w-[80px] xl:w-[120px]"
                    alt="Inquiry icon"
                  />
                  <span className="text-lg xl:text-2xl">Inquiry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="hidden xl:block" style={styles.footer}></footer>
      </main>
      <footer className="block xl:hidden" style={styles.footer}></footer>
    </div>
  );
}

export default Step2Guide;