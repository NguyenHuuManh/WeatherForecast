import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Svg,
  Text as TextSVG,
  Image as ImageSVG,
  Line,
  Circle,
  Rect,
  G,
} from "react-native-svg";
const marginTop = 80;
const marginLeft = 20;

export default (props) => {
  const { width, height, dataValue, labelTopValue, renderLabelTop, renderLabelBotton, labelVertical, labelHorizontal } = props;
  const [maxValue, setMaxValue] = useState(0);
  useEffect(() => {
    setMaxValue(Math.max(...dataValue));
  }, [dataValue]);

  // const renLabelTop

  const renderLine = (x1, y1, x2, y2, color, strokeDasharray) => {
    return (
      <Line
        x1={`${x1}`}
        y1={`${y1}`}
        x2={`${x2}`}
        y2={`${y2}`}
        strokeWidth={2}
        stroke={color}
        strokeDasharray={strokeDasharray}

      />
    );
  };

  const renderHorizontal = () => {
    return renderLine(10, height, width, height, "#fff", [3, 3]);
  };

  const renderVertical = () => {
    return renderLine(10, height, 10, 10, "#fff", [3, 3]);
  };

  const renderDot = ({ x, y }) => {
    return (
      <Circle
        cx={`${x}`}
        cy={`${y}`}
        r={5}
        stroke="blue"
        strokeWidth={2.5}
        fill="green"
      />
    );
  };



  const caculatePoint = (value, index) => {
    const y = height - (height / maxValue) * value + marginTop;
    const x = ((width - marginLeft) / dataValue.length) * index + marginLeft;
    return { x: x, y: y };
  };




  const drawChart = () => {
    return dataValue.map((element, index) => {
      const param = caculatePoint(element, index);
      if (index + 1 == dataValue.length) {
        return (
          <G key={index}>
            {renderLine(param.x, param.y, param.x, height, "#fff", [3, 3])}
            {renderLabelBotton && renderLabelBotton({ x: param.x - 10, y: height + 15, title: "Label" })}
            {renderLabelTop && renderLabelTop({ x: param.x - 12, y: 20, title: labelTopValue[index] })}
            {renderDot(param)}

          </G>
        );
      }
      let param1 = caculatePoint(dataValue[index + 1], index + 1);
      return (
        <G key={index}>
          {renderLine(param.x, param.y, param.x, height, "#fff", [3, 3])}
          {renderLine(param.x, param.y, param1.x, param1.y, "#5ae3e8", [0,0])}
          {renderLabelBotton && renderLabelBotton({ x: param.x - 10, y: height + 15, title: "Label" })}
          {renderLabelTop && renderLabelTop({ x: param.x - 12, y: 20, title: labelTopValue[index] })}
          {renderDot(param)}
        </G>

      );
    });
  };
  return (
    <View>
      <Svg width={width} height={200}>
        {!labelHorizontal && renderHorizontal()}
        {!labelVertical && renderVertical()}
        {dataValue &&drawChart()}
      </Svg>
    </View>

  );
};
