import { useEffect, useState } from "react";
import CustomSelectUI from "./CustomSelect.Presenter";

export default function CustomSelectLogic({
  options,
  defaultValue,
  onChange,
  optionContainerStyle,
}){
      useEffect(() => {
        setSelectedValue(defaultValue);
      },[defaultValue])

      const [isOpen, setIsOpen] = useState(false);
      const [selectedValue, setSelectedValue] = useState(
        defaultValue || options[0]
      );
    
      const toggleSelect = () => {
        setIsOpen(!isOpen);
      };
    
      const handleSelect = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
        if (onChange) onChange(option);
      };


    return(<CustomSelectUI
        options = {options}
        defaultValue = {defaultValue}
        onChange = {onChange}
        optionContainerStyle = {optionContainerStyle}
        toggleSelect = {toggleSelect}
        selectedValue = {selectedValue}
        handleSelect = {handleSelect}
        isOpen = {isOpen}
    >

    </CustomSelectUI>)
}
