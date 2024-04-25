import { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import VideoImg from "../Assets/Images/video.png";
import Footer from "../Components/Footer";
import WalletIcon from "../Assets/Icons/walletIcon.svg";
import XIcon from "../Assets/Icons/xIcon.svg";
import TelegramIcon from "../Assets/Icons/telegramIcon.svg";
import CrossIcon from "../Assets/Icons/crossIcon.svg";
import OptionalIcon from "../Assets/Icons/optionalIcon.svg";
import Modal from "../Components/Modal";

export default function MultiStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const handleStartApplication = () => {
    setActiveStep(1); // Start application from step 1
  };

  return (
    <div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex  justify-center min-h-[100vh]">
        <div className="w-[40%] max-[1380px]:w-[50%] max-[1140px]:w-[60%] max-[800px]:w-[80%] max-[600px]:w-[85%]">
          <div className="flex items-center justify-between mt-8 max-[330px]:flex-col max-[330px]:justify-center max-[330px]:items-start max-[330px]:gap-3">
            {/* 1st step */}
            <div className="flex items-center gap-3">
              <p
                className={`px-4 py-[0.4rem] text-white text-[1.1rem] font-bold w-fit rounded-md ${
                  activeStep === 1 ? "bg-[#6163f1]" : "bg-black"
                } max-[443px]:px-3 max-[443px]:py-[0.2rem]`}
              >
                1
              </p>
              <p className="text-[1.4rem] text-black font-bold max-[443px]:text-[1.2rem]">
                Connect
              </p>
            </div>
            {/* 2nd step */}
            <div className="flex items-center gap-3">
              <p
                className={`px-4 py-[0.4rem] text-white text-[1.1rem] font-bold w-fit rounded-md ${
                  activeStep === 2 ? "bg-[#6163f1]" : "bg-black"
                } max-[443px]:px-3 max-[443px]:py-[0.2rem]`}
              >
                2
              </p>
              <p className="text-[1.4rem] text-black font-bold max-[443px]:text-[1.2rem]">
                Apply
              </p>
            </div>
            {/* 3rd step */}
            <div className="flex items-center gap-3">
              <p
                className={`px-4 py-[0.4rem] text-white text-[1.1rem] font-bold w-fit rounded-md ${
                  activeStep === 3 ? "bg-[#6163f1]" : "bg-black"
                } max-[443px]:px-3 max-[443px]:py-[0.2rem]`}
              >
                3
              </p>
              <p className="text-[1.4rem] text-black font-bold  max-[443px]:text-[1.2rem]">
                Contest Entry
              </p>
            </div>
          </div>
          <div className="mt-16">
            {/* jule white list application */}
            {activeStep === 0 && (
              <div className="flex flex-col gap-7">
                <img className="w-[7rem]" src={Logo} />
                <h1 className="text-[2.5rem] uppercase font-extrabold text-[#6163f1] leading-[2.8rem]">
                  jule whitelist <br /> application
                </h1>
                <p className="text-[1.1rem] text-black font-medium">
                  The revolution starts with you:
                </p>
                <ul className="list-disc flex flex-col gap-1 pl-5">
                  <li className="text-[1.1rem] text-black font-medium">
                    Limited Supply of 100 million tokens
                  </li>
                  <li className="text-[1.1rem] text-black font-medium">
                    60% of the raise is locked in a liquidity pool for three
                    months, relock if needed
                  </li>
                  <li className="text-[1.1rem] text-black font-medium">
                    ERC20 Token
                  </li>
                  <li className="text-[1.1rem] text-black font-medium">
                    Presale rate of 30% less than DEX price
                  </li>
                  <li className="text-[1.1rem] text-black font-medium">
                    Unique NFT Art Giveaways & Airdrops
                  </li>
                  <li className="text-[1.1rem] text-black font-medium">
                    Project guided by seasoned entrepreneurs who are tired of
                    shitcoins and centralized authorities.{" "}
                  </li>
                </ul>
                <div className="flex items-center justify-center">
                  <img
                    onClick={() => setModalOpen(true)}
                    className="w-[60%] max-[600px]:w-full"
                    src={VideoImg}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-14">
                  <button
                    onClick={handleStartApplication}
                    className="w-[60%] py-3 text-white bg-[#6163f1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Get Started
                  </button>
                  <p className="text-[1.1rem] text-black font-medium">
                    Three steps that take less than a minute
                  </p>
                </div>
              </div>
            )}
            {activeStep === 1 && (
              <div className="flex flex-col gap-7">
                <img className="w-[7rem]" src={Logo} />
                <h1 className="text-[2.5rem] uppercase font-extrabold text-[#6163f1] leading-[2.8rem]">
                  connect
                </h1>
                <p className="text-[1.1rem] font-bold text-black">
                  Connect your Wallet, X(Twitter) and Telegram to continue!
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-16 max-[450px]:flex-col max-[450px]:gap-2 max-[450px]:items-start">
                    <button className="w-[45%] py-3 text-[1.1rem] text-white bg-[#545353] flex items-center justify-center gap-2 rounded-2xl max-[450px]:w-full">
                      <span>
                        <img className="w-[2rem] mt-2" src={WalletIcon} />
                      </span>
                      Sign in with Wallet
                    </button>
                    <p className="text-[1.1rem] text-black font-medium flex items-center">
                      <span>
                        <img className="w-[1.8rem] mt-2" src={CrossIcon} />
                      </span>
                      Sign In
                    </p>
                  </div>
                  <div className="flex items-center gap-16 max-[450px]:flex-col max-[450px]:gap-2 max-[450px]:items-start">
                    <button className="w-[45%] py-3 text-[1.1rem] text-white bg-[#62b9fd] flex items-center justify-center gap-2 rounded-2xl max-[450px]:w-full">
                      <span>
                        <img className="w-[2rem] mt-2" src={XIcon} />
                      </span>
                      Sign in with X(Twitter)
                    </button>
                    <p className="text-[1.1rem] text-black font-medium flex items-center">
                      <span>
                        <img className="w-[1.8rem] mt-2" src={CrossIcon} />
                      </span>
                      Sign In
                    </p>
                  </div>
                  <div className="flex items-center gap-16 max-[450px]:flex-col max-[450px]:gap-2 max-[450px]:items-start">
                    <button className="w-[45%] py-3 text-[1.1rem] text-white bg-[#1b70b3] flex items-center justify-center gap-2 rounded-2xl max-[450px]:w-full">
                      <span>
                        <img className="w-[2rem] mt-2" src={TelegramIcon} />
                      </span>
                      Join our Telegram
                    </button>
                    <p className="text-[1.1rem] text-black font-medium flex items-center">
                      <span>
                        <img className="w-[1.8rem] mt-2" src={OptionalIcon} />
                      </span>
                      Optional
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-14">
                  <button
                    onClick={handleNextStep}
                    className="w-[60%] py-3 text-white bg-[#6163f1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Next Step
                  </button>
                  <p className="text-[1.1rem] text-black font-medium">
                    Three steps that take less than a minute
                  </p>
                  <button
                    onClick={() => setActiveStep(0)}
                    className="w-[50%] py-3 text-[#a1a1a1] border-2 border-[#a1a1a1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="flex flex-col gap-7">
                <img className="w-[7rem]" src={Logo} />
                <h1 className="text-[2.5rem] uppercase font-extrabold text-[#6163f1] leading-[2.8rem]">
                  apply
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.1rem] font-medium text-black">
                    1.) What is your email?
                  </p>
                  <p className="text-[0.90rem] text-[#5c5b5b] text-medium">
                    (We request this to alert you when the presale goes live)
                  </p>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none max-[900px]:w-[75%] max-[600px]:w-full"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.1rem] font-medium text-black">
                    2.) How Much ETH are you willing to commit?
                  </p>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="number"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.1rem] font-medium text-black">
                    3.) What is your X(Twitter) username?
                  </p>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="@username"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-14">
                  <button
                    onClick={handleNextStep}
                    className="w-[60%] py-3 text-white bg-[#6163f1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Next Step
                  </button>
                  <p className="text-[1.1rem] text-black font-medium">
                    Three steps that take less than a minute
                  </p>
                  <button
                    onClick={() => setActiveStep(0)}
                    className="w-[50%] py-3 text-[#a1a1a1] border-2 border-[#a1a1a1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="flex flex-col gap-7">
                <img className="w-[7rem]" src={Logo} />
                <h1 className="text-[2.5rem] uppercase font-extrabold text-[#6163f1] leading-[2.8rem]">
                  Contest
                </h1>
                <p className="text-[1.1rem] text-black font-medium">
                  After the presale, five random participants will win unique
                  Jule-inspired NFT art. We'll also create new art for each CEX
                  listing, gifting it to a random presale member. Winners
                  receive a free NFT frame from our partner Tokenframe. Share
                  your shipping address to enter the contest;{" "}
                  <span className="underline">
                    entering the contest is optional.
                  </span>
                </p>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    Full Name:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    Country:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    Street Address:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    City:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    State/Province:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="text"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1rem] font-medium text-black">
                    Postal Code:
                  </label>
                  <input
                    className="w-[60%] py-3 bg-[#f3f3f3] placeholder:text-black placeholder:font-medium pl-4 rounded-lg outline-none  max-[900px]:w-[75%] max-[600px]:w-full"
                    type="number"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-14 max-[450px]:flex-col max-[450px]:gap-5">
                    <button className="w-full py-3 text-white bg-[#6163f1] font-bold rounded-2xl text-[1.2rem]">
                      Save & Enter Contest
                    </button>
                    <button className="w-full py-3 text-[#6163f1] border-[#6163f1] font-bold rounded-2xl text-[1.2rem] border-2">
                      Save & Skip Contest
                    </button>
                  </div>
                  <button
                    onClick={() => setActiveStep(0)}
                    className="w-full py-3 text-[#a1a1a1] border-2 border-[#a1a1a1] font-bold rounded-2xl text-[1.2rem] max-[600px]:w-full"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
