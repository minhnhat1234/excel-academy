import React from 'react';
// Styles
import PropTypes from 'prop-types';
import { StyledSliderItem } from './SliderItemStyles';

const SliderItem = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children
}) => (
  <StyledSliderItem
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
  >
      {children}
  </StyledSliderItem>
);

SliderItem.propTypes = {
    slideClass: PropTypes.string,
    zoomFactor: PropTypes.number,
    id: PropTypes.number,
    callback: PropTypes.func,
    callbackOut: PropTypes.func,
    slideMargin: PropTypes.number,
    visibleSlides: PropTypes.number,
  };

export default SliderItem;