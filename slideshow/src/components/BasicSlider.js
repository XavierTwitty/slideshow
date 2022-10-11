import React from "react";
import HeroSlider, { Slide } from "hero-slider";

// const bird1 =
//   "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";
// const bird2 =
//   "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png";
// const bird3 =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdryZ6h7HdREcNfIKFPj-quP589zesQGb5g&usqp=CAU";
// const bird4 =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaXHFBOc2mgcWzxksWfVGqSTyFU9-eR0QhA&usqp=CAU";

const BasicSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0,0,0,0.33)",
        width: "50%",
        height: "20vh",
      }}
      settings={{
        slidingDuration: 250,
        slideDelay: 100,
        shouldAutoPlay: true,
        shouldDisplayButtons: true,
        autoplay: 5000,
      }}
    >
      <Slide
        background={{
          backgroundImageSrc:
            "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc:
            "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc:
            "https://th-thumbnailer.cdn-si-edu.com/Lug90gIizMxSqe_AgccEPsMMG94=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/46/c7/46c7da28-e266-497b-9bc3-d25e291ee962/istock-1144653112.jpg",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc:
            "https://www.fieldandstream.com/uploads/2021/06/28/bluejay.jpg?auto=webp",
        }}
      />
    </HeroSlider>
  );
};

export default BasicSlider;
