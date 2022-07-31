global.toMultiTitleCase = (string) => {
    return string
        .split("_")
        .map((it) => Utils.toTitleCase(it))
        .join(" ");
};

global.vanillaWoodTypes = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped"];