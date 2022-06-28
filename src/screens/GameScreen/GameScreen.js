import "./GameScreen.css";
import logo from "../../assets/logo.svg";
import close from "../../assets/icon-close.svg";
import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";
import ActionButton from "../../components/ActionButton/ActionButton";
import rules from "../../assets/image-rules.svg";

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
        <div>
          <img className="stage2-card-img" src={src} alt={alt} />
        </div>
      </div>
    </>
  );
}

function GameScreen(props) {
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
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                RULES
              </h5>
              <button
                type="button"
                className="close-button"
                data-bs-dismiss="modal"
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <div class="modal-body">
              <img src={rules} alt="rules" />
            </div>
          </div>
        </div>
      </div>
      <div className="top">
        <div className="top-details">
          <img src={logo} alt="rock paper scissor" />
          <div className="score-container">
            <span className="score-head">SCORE</span>
            <span className="score-value">12</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="game-container">
          <ActionButton
            src={paper}
            alt="paper"
            color1="hsl(230, 89%, 62%)"
            color2="hsl(230, 89%, 65%)"
            style={{ top: 0, left: 0 }}
          />
          <ActionButton
            src={scissors}
            alt="scissors"
            color1="hsl(39, 89%, 49%)"
            color2="hsl(40, 84%, 53%)"
            style={{ top: 0, right: 0 }}
          />
          <ActionButton
            src={rock}
            alt="rock"
            color1="hsl(349, 71%, 52%)"
            color2="hsl(349, 70%, 56%)"
            style={{ bottom: 0, right: "calc(50% - 95px)" }}
          />
        </div>
        {/* <div className="stage2">
          <div className="stage2-card">
            <h1 className="stage2-card-head">YOU PICKED</h1>
            <div className="stage2-card-body">{circles[0]}</div>
          </div>
          <div className="stage2-card status">
            <h1 className="game-status">YOU LOSE</h1>
            <button className="play-again-btn">PLAY AGAIN</button>
          </div> */}
          {/* <div className="stage2-card">
            <h1 className="stage2-cardhead">THE HOUSE PICKED</h1>
            <div className="stage2-cardbody">
              <div className="circle-background" style={{ boxShadow: "none" }}>
                <div
                  style={{
                    boxShadow: "none",
                    backgroundColor: "hsl(237, 49%, 15%)",
                  }}
                ></div>
              </div>
            </div>
          </div> */}
          {/* <div className="stage2-card">
            <h1 className="stage2-card-head">THE HOUSE PICKED</h1>
            <div className="stage2-card-body">{circles[2]}</div>
          </div>
        </div> */}
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
    </div>
  );
}

export default GameScreen;
