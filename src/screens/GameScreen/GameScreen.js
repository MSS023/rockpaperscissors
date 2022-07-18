import "./GameScreen.css";
import logo from "../../assets/logo.svg";
import close from "../../assets/icon-close.svg";
import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";
import ActionButton from "../../components/ActionButton/ActionButton";
import rules from "../../assets/image-rules.svg";
import { useState } from "react";

function Circle(props) {
  const { alt, src, color1, color2 } = props;
  return (
    <>
      <div
        className="circle-background"
        style={{
          background: `linear-gradient(${color1},${color2})`,
        }}
      >
        <div className="circle">
          <img className="stage2-card-img" src={src} alt={alt} />
        </div>
      </div>
    </>
  );
}

function GameScreen(props) {
  const [stage1, setStage1] = useState(true);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [win, setWin] = useState(null);

  function handleChoice(idx) {
    setUserChoice(idx);
    setStage1(false);
    setTimeout(() => {
      makeHouseChoice(idx);
    }, 500);
  }

  function handlePlayAgain() {
    setUserChoice(null);
    setHouseChoice(null);
    setStage1(true);
    setWin(null);
  }

  function makeHouseChoice(idx) {
    let temp = Math.round(Math.random() * 2);
    if (temp === idx) {
      makeHouseChoice(idx);
      return;
    }
    setHouseChoice(temp);
    if (idx === 0) {
      if (temp === 1) {
        setWin(false);
        return;
      }
    }
    if (idx === 1) {
      if (temp === 2) {
        setWin(false);
        return;
      }
    }
    if (idx === 2) {
      if (temp === 0) {
        setWin(false);
        return;
      }
    }
    setWin(true);
    setScore(score + 1);
  }

  const circles = [
    <Circle
      src={paper}
      alt="paper"
      color1="hsl(230, 89%, 62%)"
      color2="hsl(230, 89%, 65%)"
    />,
    <Circle
      src={scissors}
      alt="scissors"
      color1="hsl(39, 89%, 49%)"
      color2="hsl(40, 84%, 53%)"
    />,
    <Circle
      src={rock}
      alt="rock"
      color1="hsl(349, 71%, 52%)"
      color2="hsl(349, 70%, 56%)"
    />,
  ];
  return (
    <div className="game-screen">
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                RULES
              </h5>
              <button
                type="button"
                className="close-button-desktop close-button"
                data-bs-dismiss="modal"
              >
                <img className="rules-image" src={close} alt="close" />
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              <img src={rules} alt="rules" />
            </div>
            <div className="modal-footer d-flex justify-content-center border-top-0">
              <button
                type="button"
                className="close-button-mobile close-button"
                data-bs-dismiss="modal"
              >
                <img className="rules-image" src={close} alt="close" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <div className="top-details">
          <img className="img-logo" src={logo} alt="rock paper scissor" />
          <div className="score-container">
            <span className="score-head">SCORE</span>
            <span className="score-value">{score}</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        {stage1 ? (
          <div className="game-container">
            <ActionButton
              className="left-button"
              src={paper}
              alt="paper"
              color1="hsl(230, 89%, 62%)"
              color2="hsl(230, 89%, 65%)"
              style={{ top: 0, left: 0 }}
              onClick={() => {
                handleChoice(0);
              }}
            />
            <ActionButton
              className="right-button"
              src={scissors}
              alt="scissors"
              color1="hsl(39, 89%, 49%)"
              color2="hsl(40, 84%, 53%)"
              style={{ top: 0, right: 0 }}
              onClick={() => {
                handleChoice(1);
              }}
            />
            <ActionButton
              className="center-button"
              src={rock}
              alt="rock"
              color1="hsl(349, 71%, 52%)"
              color2="hsl(349, 70%, 56%)"
              style={{ bottom: 0, right: `calc(50% - 95px)` }}
              onClick={() => {
                handleChoice(2);
              }}
            />
          </div>
        ) : (
          <>
            <div className="stage2">
              <div className="stage2-card">
                <h1 className="stage2-card-head">YOU PICKED</h1>
                <div className="stage2-card-body">{circles[userChoice]}</div>
              </div>
              {win != null ? (
                <div className="stage2-card status desktop">
                  <h1 className="game-status">YOU {win ? "WIN" : "LOSE"}</h1>
                  <button
                    className="play-again-btn"
                    onClick={() => {
                      handlePlayAgain();
                    }}
                  >
                    PLAY AGAIN
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="stage2-card">
                <h1 className="stage2-card-head">THE HOUSE PICKED</h1>
                <div className="stage2-card-body">
                  {houseChoice == null ? (
                    <div
                      className="circle-background"
                      style={{ boxShadow: "none" }}
                    >
                      <div
                        style={{
                          boxShadow: "none",
                          backgroundColor: "hsl(237, 49%, 15%)",
                        }}
                      ></div>
                    </div>
                  ) : (
                    circles[houseChoice]
                  )}
                </div>
              </div>
            </div>
            {win != null ? (
              <div className="mobile">
                <h1 className="game-status">YOU {win ? "WIN" : "LOSE"}</h1>
                <button
                  className="play-again-btn"
                  onClick={() => {
                    handlePlayAgain();
                  }}
                >
                  PLAY AGAIN
                </button>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      <div className="footer">
        <button
          className="rules-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          RULES
        </button>
      </div>
    </div>
  );
}

export default GameScreen;
