type System = {
    themeColor?: "light" | "dark";
};

const windows: System = {
    themeColor: undefined,
};

const linux: System = {};

if (windows.themeColor) {
    // always false
}

if ("themeColor" in windows) {
    //true or false depending on a type
}
