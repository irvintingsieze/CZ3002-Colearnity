import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import "./QuizQns.css";

export default function QuizQns(props) {
  const {
    initialValue,
    qn,
    qnNum,
    qnWeightage,
    options,
    disabled,
    parentCallback,
    results,
  } = props;

  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("before sending: " + qnNum + " " + event.target.value);
    parentCallback([qnNum, event.target.value]);
  };

  return (
    <div className="question">
      <p>{qn}</p>

      <div className="options">
        <FormControl component="fieldset" disabled={disabled}>
          <RadioGroup value={value} onChange={handleChange}>
            {options &&
              options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.optionNumber.toString()}
                  control={<Radio color="primary" />}
                  label={option.answerBody}
                  style={
                    disabled && option.isCorrectAnswer
                      ? { backgroundColor: "lightgreen" }
                      : {}
                  }
                />
              ))}
          </RadioGroup>
        </FormControl>

        {disabled ? (
          <span>
            Marks Scored: {results} / {qnWeightage}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
