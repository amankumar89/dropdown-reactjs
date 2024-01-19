import { GoChevronDown, GoChevronRight } from "react-icons/go";
import React, { useState, useEffect, useRef } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const handleMouseEnter = (isOpenValue) => {
    if (!isOpenValue) {
      setIsOpen(true);
    }
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-500 hover:text-white rounded cursor-pointer p-1 "
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => handleMouseEnter(isOpen)}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoChevronDown /> : <GoChevronRight />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
