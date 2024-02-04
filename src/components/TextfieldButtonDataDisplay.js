import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled(Typography)(
  ({ theme }) => `
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-size: 16px;
  font-weight: 540;
`
);

const InputWrapper = styled("div")(
  ({ theme, maxWidth, height }) => `
  max-width: ${maxWidth}px;
  width: 100%;
  height: ${height}px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 25px;
  padding: 1px;
  padding-left:10px;
  padding-top:10px;
  
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 100%;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    border-radius: 25px;
  }
  
`
);

const InputWrapperLarge = styled("div")(
  ({ theme, width, height }) => `
  width: ${width}px;
  height: ${height}px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 25px;
  padding: 1px;
  padding-left:10px;
  padding-top:10px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width:376px){
    width: 200px;
  
  }
  @media (max-width:528px) and (min-width: 377px) {
    width: 250px;
  
  }

  @media (max-width: 540px) and (min-width: 529px) {
    width: 340px;
  
  }

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 100%;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    border-radius: 25px;
  }
  
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 25px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  background-color: black;
  color: white;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow-y: auto;
  max-height: 150px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);
//Code for the CustomizedHook already width set to 100% in this.
function CustomizedHook({ maxWidth, height = 90, data = [], label = "" }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [data[1]],
    multiple: true,
    options: data,
    getOptionLabel: (option) => option.data,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>{label}</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""} maxWidth={maxWidth} height={height}>
          {value.map((option, index) => (
            <StyledTag label={option.data} {...getTagProps({ index })} />
          ))}
          <input style={{background: 'transparent'}} {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.data}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
//Code for the CustomizedHookLarge takes input the width and height.
function CustomizedHookLarge({ width, height = 90, data = [], label = "" }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [data[1]],
    multiple: true,
    options: data,
    getOptionLabel: (option) => option.data,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>{label}</Label>
        <InputWrapperLarge ref={setAnchorEl} className={focused ? "focused" : ""} width={width} height={height}>
          {value.map((option, index) => (
            <StyledTag label={option.data} {...getTagProps({ index })} />
          ))}
          <input style={{background: 'transparent'}} {...getInputProps()} />
        </InputWrapperLarge>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.data}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}

CustomizedHook.propTypes = {
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
};

export {
  CustomizedHook,
  CustomizedHookLarge
};
