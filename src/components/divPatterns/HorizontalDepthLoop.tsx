import * as React from "react";

interface IState {
  background: string;
  newBackground: string;
  alpha: number;
}

class HorizontalDepthLoop extends React.Component<{}, IState> {
  state = {
    background: "linear-gradient(to right, #1d2b64, #f8cdda)",
    newBackground: "linear-gradient(to right, #1d2b64, #f8cdda)",
    alpha: 0.2
  };

  createCoolPattern(loops: number = 0, depth: number = 0): JSX.Element[] {
    const list = this.getList([25, 25], depth);

    const loop = list.map((num, i) => {
      const step =
        i < depth + 2 ? i % (depth + 2) : depth + 2 - (i % (depth + 2));

      const colorNum = (255 / (depth + 2)) * step;
      return (
        <div
          style={{
            background: `rgba(${colorNum}, ${colorNum}, ${colorNum}, ${
              this.state.alpha
            })`,
            width: "100%",
            height: `${num / loops}vh`
          }}
        />
      );
    });

    let arr: JSX.Element[] = [];
    for (let i = 0; i < loops; i++) {
      arr = [...arr, ...loop];
    }

    return arr;
  }

  getList(arr: number[], depth: number = 0): number[] {
    if (depth === 0) {
      const num = arr[0] / 2;
      return [num, num, ...arr, num, num];
    }
    const num = arr[0] / 2;
    return this.getList([num, ...arr, num], depth - 1);
  }

  onChange(e) {
    this.setState({
      newBackground: e.target.value
    });
  }

  useBackground() {
    const { newBackground } = this.state;
    this.setState({
      background: newBackground
    });
  }

  render() {
    return (
      <div
        style={{
          background: this.state.background
        }}
      >
        {this.createCoolPattern(10, 10)}
        <div style={{ paddingTop: "49vh", paddingBottom: "49vh" }}>
          <h1>Change the background</h1>
          <input
            type="text"
            onChange={this.onChange.bind(this)}
            value={this.state.newBackground}
            style={{ width: "30vw", height: "100%" }}
          />
          <button
            style={{ width: "5vw", height: "100%" }}
            onClick={this.useBackground.bind(this)}
          >
            Use
          </button>
        </div>
      </div>
    );
  }
}

export default HorizontalDepthLoop;
