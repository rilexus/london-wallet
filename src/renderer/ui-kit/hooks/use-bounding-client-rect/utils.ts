const getScrollValues = (elem) => {
  const { scrollHeight, scrollLeft, scrollTop, scrollWidth } = elem;
  return {
    scrollHeight,
    scrollLeft,
    scrollTop,
    scrollWidth,
  };
};

const extractRectValues = (rect) => {
  const { bottom, height, left, right, top, width, x, y } = rect;
  return {
    bottom,
    height,
    left,
    right,
    top,
    width,
    x,
    y,
  };
};

const getBoundingClientRect = (elem) => {
  const rect = extractRectValues(elem.getBoundingClientRect());
  const scrollValues = getScrollValues(elem);
  return {
    ...rect,
    ...scrollValues,
  };
};
export { getBoundingClientRect };
