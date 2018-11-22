import * as React from "react";

interface ICoolPatternProps {
  loops: number;
  depth: number;
}

class HorizontalDepthLoop extends React.Component {
  createCoolPattern({ loops = 0, depth = 0 }: ICoolPatternProps) {
    const root = this.getRoot(25, depth);
    const list = this.getList(root, depth);

    const loop = list.map((num, i) => {
      const step =
        i < depth + 2 ? i % (depth + 2) : depth + 1 - (i % (depth + 2));

      const colorNum = 255 - (255 / (depth + 2)) * step;
      return (
        <div
          style={{
            background: `rgba(${colorNum}, ${colorNum}, ${colorNum}, 1)`,
            width: "100%",
            height: `${num / loops}vh`
          }}
        />
      );
    });

    let arr = [];
    for (let i = 0; i < loops; i++) {
      arr = [...arr, ...loop];
    }

    return arr;
  }

  getList(arr, depth = 0) {
    if (depth === 0) {
      return arr;
    }
    const timesTwo = 2 * arr[0];
    return this.getList([timesTwo, ...arr, timesTwo], depth - 1);
  }

  getRoot(num, depth = 0) {
    if (depth === 0) {
      return [num, num, num, num];
    }
    return this.getRoot(num / 2, depth - 1);
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.createCoolPattern({ loops: 10, depth: 10 })}</div>
      </React.Fragment>
    );
  }
}

export default HorizontalDepthLoop;
