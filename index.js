import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url('../img/bg.jpg')"
    },
    "container": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 8.0625,
        "perspective": 20
    },
    "box": {
        "transformStyle": "preserve-3d",
        "height": "100%"
    },
    "box>div": {
        "position": "absolute",
        "width": 8.0625,
        "height": 73.123
    }
});
