import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FIRST_DUMMY_DATA } from "../data/dummy_data";
import { SECOND_DUMMY_DATA } from "../data/dummy_data";
import { THIRD_DUMMY_DATA } from "../data/dummy_data";
import classes from "./AutoCompleteInput.module.css";
import Card from "../UI/Card";

const AutoCompleteInput = () => {
  const [isSecondInputDisplay, setIsSecondInputDisplay] = useState(false);
  const [isThirdInputDisplay, setIsThirdInputDisplay] = useState(false);

  const [firstValue, setFirstValue] = useState("");
  const [inputFirstValue, setInputFirstValue] = useState("");

  const [secondValue, setSecondValue] = useState("");
  const [inputSecondValue, setInputSecondValue] = useState("");

  const [thrirdValue, setThirdValue] = useState("");
  const [inputThirdValue, setInputThirdValue] = useState("");

  const onFirstChnageHandler = (event, newValue) => {
    setFirstValue(newValue);
    if (newValue) {
      setIsSecondInputDisplay(true);
    }
  };
  const onFirstInputChangeHandler = (event, newInputValue) => {
    setInputFirstValue(newInputValue);
  };

  const onSecondChnageHandler = (event, newValue) => {
    setSecondValue(newValue);
    if (newValue) {
      setIsThirdInputDisplay(true);
    }
  };
  const onSecondInputChangeHandler = (event, newInputValue) => {
    setInputSecondValue(newInputValue);
  };

  const onThirdChnageHandler = (event, newValue) => {
    setThirdValue(newValue);
    if (newValue) {
      setIsSecondInputDisplay(false);
      setIsThirdInputDisplay(false);
      setFirstValue("");
      setSecondValue("");
      setThirdValue("");
    }
  };
  const onThirdInputChangeHandler = (event, newInputValue) => {
    setInputThirdValue(newInputValue);
  };

  return (
    <Card>
      <div className={classes.containerDiv}>
        <div>
          <Autocomplete
            value={firstValue}
            onChange={onFirstChnageHandler}
            inputValue={inputFirstValue}
            onInputChange={onFirstInputChangeHandler}
            id="controllable-states1"
            options={FIRST_DUMMY_DATA}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Input 1" variant="outlined" />
            )}
          />
        </div>
        <div className={classes.innerContainerDiv}>
          {isSecondInputDisplay && (
            <Autocomplete
              value={secondValue}
              onChange={onSecondChnageHandler}
              inputValue={inputSecondValue}
              onInputChange={onSecondInputChangeHandler}
              id="controllable-states2"
              options={SECOND_DUMMY_DATA}
              style={{ width: 400 }}
              renderInput={(params) => (
                <TextField {...params} label="Input 2" variant="outlined" />
              )}
            />
          )}
        </div>
        <div className={classes.innerContainerDiv}>
          {isThirdInputDisplay && (
            <Autocomplete
              value={thrirdValue}
              onChange={onThirdChnageHandler}
              inputValue={inputThirdValue}
              onInputChange={onThirdInputChangeHandler}
              id="controllable-states3"
              options={THIRD_DUMMY_DATA}
              style={{ width: 400 }}
              renderInput={(params) => (
                <TextField {...params} label="Input 3" variant="outlined" />
              )}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default AutoCompleteInput;
