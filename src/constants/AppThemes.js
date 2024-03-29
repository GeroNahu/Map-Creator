const defaultThemes = {
  light: {
    name: "light",
    TEXT_PRIMARY: "#000000",
    TITLES: "#000000",
    HEADER_FONT_FAMILY: "",
    HEADER_TEXT: "#000000",
    HEADER_BACKGROUND: "#A05457 ",
    MAP_SECTION_BACKGROUND: "#EAC1C1",
    TOOGLE_CONTAINER_BACKGROUND: "#B87E7E",
    TOOGLE_BAR_BACKGROUND: "#B4B4B4",
    TOOGLE_CIRCLE_BACKGROUND: "#282c34",
    MAP_TITLE_BACKGROUND: "#B87E7E",
    MAP_SELECTORS_CONTAINER_BACKGROUND: "#B87E7E",
    MAP_BACKGROUND: "#B87E7E",
    TOOLS_SECTION_BACKGROUND: "#B87E7E",
    SELECTED_TOOL_BACKGROUND: "#EAC1C1",
    COMMON_SELECTORS_BACKGROUND: "#EAC1C1",
    LITTLE_SELECTORS_BACKGROUND: "#B87E7E",
    LAYERS_RENAME_INPUT_BACKGROUND: "#EAC1C1",
    CATEGORY_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    CATEGORY_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    EXPORT_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    EXPORT_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    NEW_MAP_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    NEW_MAP_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    IMPORT_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    IMPORT_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    TOOLS_CONTAINER_BACKGROUND: "#EAC1C1",
    HEADER_BORDER: "#000000",
    TOOGLE_CONTAINER_BORDER: "#000000",
    MAP_TITLE_BORDER: "#000000",
    MAP_SELECTORS_CONTAINER_BORDER: "#000000",
    MAP_BORDER: "#000000",
    TOOLS_SECTION_BORDER: "#000000",
    SELECTED_TOOL_BORDER: "#000000",
    COMMON_SELECTORS_BORDER: "#000000",
    LITTLE_SELECTORS_BORDER: "#000000",
    LAYERS_RENAME_INPUT_BORDER: "#000000",
    TOOLS_CONTAINER_BORDER: "#000000",
    CATEGORY_BUTTONS_BORDER: "#000000",
    IMPORT_BUTTON_BORDER: "#000000",
    EXPORT_BUTTON_BORDER: "#000000",
    NEW_MAP_BUTTON_BORDER: "#000000",
    TILE_GRID_COLOR: "#000000",
    TOOLS_GRID_COLOR: "#000000",
  },
  dark: {
    name: "dark",
    TEXT_PRIMARY: "#bbbbbb",
    TITLES: "#ffffff",
    HEADER_FONT_FAMILY: "",
    HEADER_TEXT: "#ffffff",
    HEADER_BACKGROUND: "#121212 ",
    MAP_SECTION_BACKGROUND: "#555555",
    TOOGLE_CONTAINER_BACKGROUND: "#323232",
    TOOGLE_BAR_BACKGROUND: "#3070ff",
    TOOGLE_CIRCLE_BACKGROUND: "#3070ff",
    MAP_TITLE_BACKGROUND: "#323232",
    MAP_SELECTORS_CONTAINER_BACKGROUND: "#323232",
    MAP_BACKGROUND: "#323232",
    TOOLS_SECTION_BACKGROUND: "#323232",
    SELECTED_TOOL_BACKGROUND: "#555555",
    COMMON_SELECTORS_BACKGROUND: "#555555",
    LITTLE_SELECTORS_BACKGROUND: "#323232",
    LAYERS_RENAME_INPUT_BACKGROUND: "#555555",
    CATEGORY_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    CATEGORY_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    EXPORT_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    EXPORT_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    NEW_MAP_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    NEW_MAP_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    IMPORT_BUTTONS_BACKGROUND:
      "linear-gradient(155deg, #ffffff, #8e8e8e, #8e8e8e, #8c8c8c, #9c9c9c, #8c8c8c, #8c8c8c)",
    IMPORT_BUTTONS_BACKGROUND_ON:
      "linear-gradient(165deg, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5c5c5c, #5e5e5e, #9c9c9c, #cccccc)",
    TOOLS_CONTAINER_BACKGROUND: "#555555",
    HEADER_BORDER: "#ffffff",
    TOOGLE_CONTAINER_BORDER: "#ffffff",
    MAP_TITLE_BORDER: "#ffffff",
    MAP_SELECTORS_CONTAINER_BORDER: "#ffffff",
    MAP_BORDER: "#ffffff",
    TOOLS_SECTION_BORDER: "#ffffff",
    SELECTED_TOOL_BORDER: "#ffffff",
    COMMON_SELECTORS_BORDER: "#ffffff",
    LITTLE_SELECTORS_BORDER: "#ffffff",
    LAYERS_RENAME_INPUT_BORDER: "#ffffff",
    TOOLS_CONTAINER_BORDER: "#ffffff",
    CATEGORY_BUTTONS_BORDER: "#ffffff",
    IMPORT_BUTTON_BORDER: "#ffffff",
    EXPORT_BUTTON_BORDER: "#ffffff",
    NEW_MAP_BUTTON_BORDER: "#ffffff",
    TILE_GRID_COLOR: "#ffffff",
    TOOLS_GRID_COLOR: "#ffffff",
  },
};

export default defaultThemes;
