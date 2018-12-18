import React, { Component } from "react";
import "./Adult.scss";
import adultImage from "../assest/images/adult-avatar.png";

class Adult extends Component {
  constructor(Props) {
    super(Props);
    this.myRef = React.createRef();
    // set defual state
    this.state = {
      adults: 1,
      children: 0,
      babies: 0,
      isHidden: true
    };
    this.valChange = this.valChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  toggleHidden() {
    if (this.state.isHidden) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  handleOutsideClick(e) {
    if (this.myRef.contains(e.target)) {
      return;
    }
    this.toggleHidden();
  }
  valChange(action, name) {
    if (action === "increment") {
      if (name === "adult") {
        this.setState({
          adults: this.state.adults + 1
        });
      } else if (name === "child") {
        this.setState({
          children: this.state.children + 1
        });
      } else {
        this.setState({
          babies: this.state.babies + 1
        });
      }
    }
    if (action === "decrement") {
      if (name === "adult") {
        if (this.state.adults === 0) {
          this.setState({
            adults: this.state.adults
          });
        } else {
          this.setState({
            adults: this.state.adults - 1
          });
        }
      } else if (name === "child") {
        if (this.state.children === 0) {
          this.setState({
            children: this.state.children
          });
        } else {
          this.setState({
            children: this.state.children - 1
          });
        }
      } else {
        if (this.state.babies === 0) {
          this.setState({
            babies: this.state.babies
          });
        } else {
          this.setState({
            babies: this.state.babies - 1
          });
        }
      }
    }
  }

  render() {
    const adult = this.state.adults;
    const child = this.state.children;
    const baby = this.state.babies;
    const adultMax = adult === 9 ? "disabled" : "";
    let childmax = 0;
    if (adult === 1 && baby > 0) {
      childmax = child === 4 ? "disabled" : "";
    }
    let babyMax = 0;
    if (adult === 1 && child <= 1) {
      babyMax = baby === 1 ? "disabled" : "";
    } else if (adult === 1 && child >= 2) {
      babyMax = "disabled";
    }
    return (
      <div
        ref={myRef => {
          this.myRef = myRef;
        }}
      >
        <div className="text">Default State</div>
        <div className="container">
          <img src={adultImage} className="adultImg" alt="img"/> {adult} Adult , {child}{" "}
          Child , {baby} Baby
        </div>
        <button onClick={this.toggleHidden} className="togglebtn">
          Click to show Open State
        </button>
        {!this.state.isHidden && (
          <div className="modal">
            <div className="text">
              Open State
              <div className="wrap">
                <div className="wrapInside">
                  Adults
                  <button
                    className="btn"
                    onClick={e => this.valChange("increment", "adult")}
                    disabled={adultMax}
                  >
                    +
                  </button>
                  <input type="text" value={adult} className="inpuxText" />
                  <button
                    className="btn"
                    onClick={e => this.valChange("decrement", "adult")}
                  >
                    -
                  </button>
                </div>
                <div className="wrapInside">
                  Children
                  <button
                    className="btn"
                    onClick={e => this.valChange("increment", "child")}
                    disabled={childmax}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={child}
                    className="inpuxText"
                    onChange={this.adultsChange}
                  />
                  <button
                    className="btn"
                    onClick={e => this.valChange("decrement", "child")}
                  >
                    -
                  </button>
                </div>
                <div className="wrapInside">
                  Babies
                  <button
                    className="btn"
                    onClick={e => this.valChange("increment", "beby")}
                    disabled={babyMax}
                  >
                    +
                  </button>
                  <input type="text" value={baby} className="inpuxText" />
                  <button
                    className="btn"
                    onClick={e => this.valChange("decrement", "beby")}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Adult;

// function fn(a1,c1,b1) {
//   let a1 = 0,
//     c1 = 2,
//     b1 = 0;
//   if (a1 <= 1 && (c1 >= 0 && c1 <= 2) && b1 <= 1) {
//     return "true1";
//   } else if (a1 <= 1 && c1 <= 4 && b1 == 1) {
//     return "true2";
//   } else if (a1 <= 1 && c1 == 2 && b1 == 0) {
//     return "true3";
//   }
//   return false;
// }
// function myFunction() {
//   document.getElementById("demo").innerHTML = fn(1,5,1);
// }
