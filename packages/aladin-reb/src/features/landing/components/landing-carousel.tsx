import { Carousel, CarouselProps } from "@mantine/carousel";
import { BackgroundImage } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

import Ripple from "@/modules/mantine-ripple/components/ripple";
import { useRipple } from "@/modules/mantine-ripple/hooks/use-ripple";

const autoplayOptions = {
  delay: 2500,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};

interface Props extends CarouselProps {
  images: string[];
}

const styles = {
  viewport: {
    height: "100%",
  },
  container: {
    height: "100%",
  },
};

export default function LandingCarousel({ images, ...others }: Props) {
  const { onClick, onClear, ripples } = useRipple();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Ripple onClear={onClear} ripples={ripples} color="#fff"></Ripple>
      <Carousel
        h="100%"
        w="auto"
        mx="auto"
        withIndicators
        withControls={false}
        loop
        plugins={[Autoplay(autoplayOptions)]}
        styles={styles}
        onClick={onClick}
        {...others}
      >
        {images.map((image) => (
          <Carousel.Slide key={image}>
            <BackgroundImage src={image} w="100%" h="100%" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
