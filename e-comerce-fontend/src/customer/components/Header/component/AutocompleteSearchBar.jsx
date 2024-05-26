import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";

AutocompleteSearchBar.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
function AutocompleteSearchBar({ list, onInChange, onEnChange }) {
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

          onInChange(newValue);
        }}
        onChange={(event, newValue) => {
          // Sự kiện này sẽ được gọi khi người dùng chọn một item từ danh sách
          console.log("Item selected", newValue);
          onEnChange(newValue);
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
                  <SearchIcon />
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
