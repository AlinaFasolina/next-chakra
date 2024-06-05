export const selectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderColor: "rgba(65, 183, 255, 1)",
    color: "white",
    fontWeight: "500",
    width: { base: "130px", md: "160px", "2xl": "185px" },
    height: { base: "40px", md: "55px"},
    fontSize: { base: "14px", xs: "16px" },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "white",
    fontWeight: 500,
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "white",
    fontWeight: 500,
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray.800" : "custom.150",
    color: "white",
    fontWeight: 500,

    ":hover": {
      backgroundColor: "gray.700",
    },
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    background: "transperent",
    color: "white",
    fontSize: { base: "15px", md: "28px" },
    padding: { base: "5px 10px 5px 0", md: "14px" },
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "blue",
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "custom.150",
    color: "white",
    border: "none",
    fontWeight: 500,
  }),

  menuList: (provided) => ({
    ...provided,
    backgroundColor: "custom.150",
    border: "1px solid",
    borderColor: "custom.200",
    padding: 0,
    fontWeight: 500,
  }),
};
