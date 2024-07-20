"use client";

import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";
import { Option } from "./enums";
import { DEFAULT_OPTION, SOCIAL_MEDIA_OPTIONS } from "./datasource";
import style from "./styles.module.css";

export default function SocialMediaSelector() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option>(DEFAULT_OPTION);
  const [chevronDirection, setChevronDirection] = useState<
    "up" | "down" | undefined
  >();

  const toggleOptionsHandler = () => {
    setShowOptions((prevState) => !prevState);
    setChevronDirection(showOptions === false ? "down" : "up");
  };

  const SelectionSection = () => (
    <div className={style.selectorContainer} onClick={toggleOptionsHandler}>
      <div className={style.selectedOption}>
        {<selectedOption.Icon />}
        <div>{selectedOption.name}</div>
      </div>
      <FaChevronDown
        className={classNames(
          chevronDirection === "down" && style.chevronDown,
          chevronDirection === "up" && style.chevronUp
        )}
      />
    </div>
  );

  const Options = () => (
    <div className={style.optionsContainer}>
      {SOCIAL_MEDIA_OPTIONS.map(({ name, Icon }, index) => (
        <div
          className={style.optionWrapper}
          key={index}
          onClick={() => {
            setSelectedOption({ name, Icon });
            toggleOptionsHandler();
          }}
        >
          <Icon />
          <div className={style.option}>{name}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={style.mainContainer}>
      <SelectionSection />
      {showOptions && <Options />}
    </div>
  );
}
