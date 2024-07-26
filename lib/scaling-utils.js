import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const BREAKPOINT_MIN_RANGE = 839;

function isValueScreen(withValue) {
  if (withValue >= 350 && withValue < 839) {
    return 0.5;
  } else if (withValue >= 839 && withValue <= 1024) {
    return 0.29;
  } else if (withValue >= 1024) {
    return 0.1;
  } else {
    return 0.5;
  }
}
export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = isValueScreen(width)) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;