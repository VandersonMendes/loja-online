import styles from "../../../assets/css/Home/feed/Feeadback.module.css";
import { StyledFlex } from "../../../componentes/Flex.style";
import {
  StyledH2,
  StyledH4,
  StyledParagrafo,
} from "../../../componentes/Font.style";
import { StyledImg } from "../../../componentes/Img.style";
import feeadback1 from "../../../assets/img/Feeadback1.jpg";
import feeadback2 from "../../../assets/img/Feeadback2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
const Marcas = () => {
    // Swiper é uma biblioteca que é ultilizado para fazer slides de forma moderna
  return (
    <section className={`${styles.feeadback}`}>
      <div className={styles.containerFeeadback}>
        <StyledH2 color="#fff">Feeadback</StyledH2>
        <Swiper
          className={styles.Slide}
          spaceBetween={50}
          modules={[Pagination, Navigation]}
          effect={"fade"}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{clickable: true }}
          scrollbar={{draggable: true}}
        >
          <SwiperSlide>
            <StyledFlex
              alignitens="center"
              flexDirection2="column-reverse"
              style={{ backgroundColor: "#ebebebf8" }}
            >
              <div className={styles.text}>
                <StyledParagrafo fontSize="1.2rem" color="#000000">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  rerum similique fuga voluptate minus ipsum, dolorum sapiente
                  delectus nobis, maiores vero quam officia doloribus. Dicta
                  modi nam quod facilis magnam.
                </StyledParagrafo>
                <StyledH4>Maria José</StyledH4>
              </div>
              <div>
                <StyledImg
                  width="350px"
                  height="450px"
                  src={feeadback1}
                  alt=""
                  className={styles.imgFeeadback}
                />
              </div>
            </StyledFlex>
          </SwiperSlide>
          <SwiperSlide>
            <StyledFlex
              alignitens="center"
              flexDirection2="column-reverse"
              style={{ backgroundColor: "#ebebebf8" }}
            >
              <div className={styles.text}>
                <StyledParagrafo fontSize="1.2rem" color="#000000">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  rerum similique fuga voluptate minus ipsum, dolorum sapiente
                  delectus nobis, maiores vero quam officia doloribus. Dicta
                  modi nam quod facilis magnam.
                </StyledParagrafo>
                <StyledH4>Maria José</StyledH4>
              </div>
              <div>
                <StyledImg
                  objectFit="cover"
                  width="350px"
                  height="450px"

                  src={feeadback2}
                  alt=""
                />
              </div>
            </StyledFlex>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <StyledFlex
              alignitens="center"
              flexDirection2="column-reverse"
              style={{ backgroundColor: "#ebebebf8" }}
            >
              <div className={styles.text}>
                <StyledParagrafo fontSize="1.2rem" color="#000000">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  rerum similique fuga voluptate minus ipsum, dolorum sapiente
                  delectus nobis, maiores vero quam officia doloribus. Dicta
                  modi nam quod facilis magnam.
                </StyledParagrafo>
                <StyledH4>Maria José</StyledH4>
              </div>
              <div>
                <StyledImg
                  objectFit="cover"
                  width="350px"
                  height="450px"
                  src={feeadback2}
                  alt=""
                />
              </div>
            </StyledFlex>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <StyledFlex
              alignitens="center"
              flexDirection2="column-reverse"
              style={{ backgroundColor: "#ebebebf8" }}
            >
              <div className={styles.text}>
                <StyledParagrafo fontSize="1.2rem" color="#000000">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  rerum similique fuga voluptate minus ipsum, dolorum sapiente
                  delectus nobis, maiores vero quam officia doloribus. Dicta
                  modi nam quod facilis magnam.
                </StyledParagrafo>
                <StyledH4>Maria José</StyledH4>
              </div>
              <div>
                <StyledImg
                  objectFit="cover"
                  width="350px"
                  height="450px"
                  src={feeadback1}
                  alt=""
                />
              </div>
            </StyledFlex>
          </SwiperSlide>
          <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
   
      </div>
    </section>
  );
};
export default Marcas;
