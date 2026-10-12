import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "AI & Automation",
    text: "Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/ai-automation.jpg",
  },
  {
    title: "Custom Software",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/custom-software.jpg",
  },
  {
    title: "Web & Digital Platforms",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/web-digital.jpg",
  },
  {
    title: "Data & Analytics",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/data-analytics.jpg",
  },
  {
    title: "Data & Analytics",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/data-analytics.jpg",
  },
  {
    title: "Data & Analytics",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/data-analytics.jpg",
  },
  {
    title: "Data & Analytics",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/data-analytics.jpg",
  },
  {
    title: "Data & Analytics",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image: "/images/newHome/data-analytics.jpg",
  },
];

const LifecycleSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="new_lifecycle">
      <div className="new_lifecycle_header">
        <div className="new_section_eyebrow">
          <img
            src="/images/newHome/whatTacendaDoBeforeIcon.svg"
            alt=""
            width={14}
            height={14}
          />{" "}
          What Tacenda do
        </div>
        <h2 className="new_section_title">
          One partner across your technology lifecycle
        </h2>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={32}
        loop
        className="new_cards_row"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={`${card.title}-${index}`}>
            <div className="new_card">
              <img src={card.image} alt={card.title} className="new_card_image" />
              <div className="new_card_body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="#" className="new_card_link">
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="new_carousel_controls">
        <div className="new_dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex ? "new_dot new_dot_active" : "new_dot"
              }
            />
          ))}
        </div>
        <div className="new_arrows">
          <button
            type="button"
            className="new_arrow_btn"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            className="new_arrow_btn"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
