import { DownIcon } from "@/utils/SvgProvider";
import { CustomSelect__Arrow,CustomSelect__Option,CustomSelect__OptionContainer,CustomSelect__SelectContainer,CustomSelect__StyledSelect } from "./CustomSelect.Styles";

export default function CustomSelectUI({
  options,
  defaultValue,
  onChange,
  optionContainerStyle,
  toggleSelect,
  selectedValue,
  handleSelect,
  isOpen
}){

      return (
        <CustomSelect__SelectContainer onClick={toggleSelect}>
          <CustomSelect__StyledSelect>
            {selectedValue}
            <CustomSelect__Arrow isOpen={isOpen}>
              <DownIcon></DownIcon>
            </CustomSelect__Arrow>
          </CustomSelect__StyledSelect>
          <CustomSelect__OptionContainer
            isOpen={isOpen}
            style={optionContainerStyle}
          >
            {options.map((option, index) => (
              <CustomSelect__Option
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(option);
                }}
              >
                {option}
              </CustomSelect__Option>
            ))}
          </CustomSelect__OptionContainer>
        </CustomSelect__SelectContainer>
      );
}