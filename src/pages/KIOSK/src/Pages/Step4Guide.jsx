import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../images/NULogo.png";
import applicationIcon from "../../../../images/applicationGuideIcon.png";
import inquiryIcon from "../../../../images/inquiryGuideIcon.png";
import { Link } from "react-router-dom";

function Step4Guide() {
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
    step4Container: {
      textAlign: "left",
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
              <h1 style={styles.headerTitle}>Get your queue number</h1>
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
        <div className="flex flex-col xl:flex-row h-full items-center w-full mx-auto">
          <div className="flex flex-col items-start text-white grow bg-[#35408e] xl:h-full w-full xl:w-[40%] justify-between xl:justify-start px-4">
            <div className="mt-6 xl:mt-12 w-full">
              <div style={styles.step4Container}>
                <b className="text-3xl xl:text-5xl whitespace-nowrap block">
                  Step 4. Get your queue number
                </b>
                <div className="pt-1 text-xl xl:text-3xl">
                  Press submit, and your number will be shown. Done!
                </div>
              </div>
            </div>
            <div style={styles.buttonContainer} className="w-full">
              <Link
                to="/help/3"
                className="bg-[#35408e] text-center px-6 py-3 hover:underline hover:!text-white rounded-md text-base xl:text-lg shadow-md border border-white/30"
              >
                &lt; Previous Step
              </Link>
              <Link
                to="/kiosk"
                className="bg-[#35408e] text-center px-6 py-3 hover:underline hover:!text-white rounded-md text-base xl:text-lg shadow-md border border-white/30"
              >
                Start using now &gt;
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full grow xl:w-[60%] items-center justify-center mt-6 gap-4 pb-5 p-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.2rem",
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
                <p className="text-[#333] text-[1.5rem] text-center xl:text-[2.5rem]">
                  Your Ticket Number Is
                </p>
                <p className="text-[3rem] text-center xl:text-[5rem] font-bold text-[#35408E]">
                  PAY001
                </p>
                <div className="flex justify-center">
                  <span className="italic text-xl md:text-2xl text-center font-semibold">
                    05/11/25
                  </span>
                </div>
              </div>

              <button
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
          </div>
        </div>
        <footer className="hidden xl:block" style={styles.footer}></footer>
      </main>
      <footer className="block xl:hidden" style={styles.footer}></footer>
    </div>
  );
}

export default Step4Guide;