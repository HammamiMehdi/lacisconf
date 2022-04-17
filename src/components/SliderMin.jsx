import { useRef, useCallback, useEffect } from "react";
import { polyfill } from "smoothscroll-polyfill";
import debounce from "lodash/debounce";
import {
  Arrow,
  ArrowWrapper,
  Card,
  SliderWrapper,
  SliderItems,
  Slide,
  SlideImg,
  SlideText,
  SliderOuter
} from "./styles";
import ChevronRight from "react-feather/dist/icons/chevron-right";
import ChevronLeft from "react-feather/dist/icons/chevron-left";

import useWindowSize from "../hooks/useWindowSize";
import useResize from "../hooks/useResize";
import { nbaWest } from "../data";

/**
 * Smooth scroll polyfill for Safari :(
 */
polyfill();

/**
 * Calculate the maximum number of slides that can be viewed at the current width
 */
const calcSlideWidth = (containerWidth, windowWidth) => {
  const breakpoint = 650;
  const isMobile = windowWidth < breakpoint;
  const minWidth = isMobile ? 90 : 110;

  let maxItems = Math.floor(containerWidth / minWidth);

  // On mobile, cut off the last item to hint that the user can scroll to see more
  if (isMobile) {
    maxItems = maxItems - 0.5;
  }

  const itemWidth = Math.floor(containerWidth / maxItems);

  return { maxItems, itemWidth };
};

const Slider = ({ heading, count }) => {
  const sliderRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();
  const { width: windowWidth } = useWindowSize();
  const { width: containerWidth } = useResize(sliderRef);
  const { maxItems, itemWidth } = calcSlideWidth(containerWidth, windowWidth);

  const disableArrows = useCallback(() => {
    const scrollPos = sliderRef.current.scrollLeft;

    if (leftArrowRef.current && rightArrowRef.current) {
      leftArrowRef.current.disabled = scrollPos === 0;
      rightArrowRef.current.disabled =
        scrollPos >= count * itemWidth - containerWidth;
    }
  }, [containerWidth, itemWidth, count]);

  /**
   * Determine if any arrows should be disabled based on the scroll position
   */
  const handleScroll = debounce(disableArrows, 100);

  useEffect(() => disableArrows(), [disableArrows]);

  /**
   * Scroll the slider left or right
   */
  const slide = (x) => {
    sliderRef.current.scrollBy({
      left: x,
      behavior: "smooth"
    });
  };

  const slideLeft = () => slide(-containerWidth);
  const slideRight = () => slide(containerWidth);

  return (
    <Card>
      <h2>{heading}</h2>
      <SliderOuter>
        <ArrowWrapper>
          {count > maxItems && (
            <Arrow onClick={slideLeft} ref={leftArrowRef}>
              <ChevronLeft />
            </Arrow>
          )}
        </ArrowWrapper>
        <SliderWrapper
          ref={sliderRef}
          style={{ "--item-width": `${itemWidth}px` }}
          onScroll={handleScroll}
        >
          <SliderItems>
            {[...Array(count)].map((_, i) => (
              <Slide key={`slide${i}`}>
                <a href="#">
                  <SlideImg>
                    <img
                      src={`https://placeimg.com/120/120/animals?${i}`}
                      alt=""
                    />
                  </SlideImg>
                  <SlideText>{nbaWest[i]}</SlideText>
                </a>
              </Slide>
            ))}
          </SliderItems>
        </SliderWrapper>
        <ArrowWrapper>
          {count > maxItems && (
            <Arrow onClick={slideRight} ref={rightArrowRef}>
              <ChevronRight />
            </Arrow>
          )}
        </ArrowWrapper>
      </SliderOuter>
    </Card>
  );
};

export default Slider;
