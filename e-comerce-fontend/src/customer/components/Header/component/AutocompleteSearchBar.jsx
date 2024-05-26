import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

AutocompleteSearchBar.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
function AutocompleteSearchBar({ list, onInChange, onEnChange }) {
  const [input, setInput] = useState();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: 1,
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list.map((item) => item)}
        onInputChange={(event, newValue) => {
          // Sự kiện này sẽ được gọi mỗi khi giá trị input thay đổi
          console.log("Input changed", newValue);
          setInput(newValue);
          onInChange(newValue);
        }}
        onChange={(event, newValue) => {
          // Sự kiện này sẽ được gọi khi người dùng chọn một item từ danh sách
          console.log("Item selected", newValue);
          if (newValue != null) {
            onEnChange(newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm kiếm..."
            InputLabelProps={{
              style: { top: "-6px" }, // chỉnh vị trí top của label ở đây
            }}
            InputProps={{
              ...params.InputProps, // giữ lại các prop từ Autocomplete
              style: { padding: 0 }, // thêm padding cho input ở đây
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                  style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log("SearchIcon clicked");
                      // Thêm mã của bạn ở đây để xử lý sự kiện click
                      if (input != null) {
                        onEnChange(input);
                      }
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 350,
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
        )}
      />
    </Box>
  );
}

export default AutocompleteSearchBar;