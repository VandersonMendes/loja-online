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
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import "swiper/css";
const Feeadback = () => {
  // Swiper é uma biblioteca que é ultilizado para fazer slides de forma moderna
  return (
    <section className={`${styles.feeadback}`}>
      <div className={styles.containerFeeadback}>
        <StyledH2 color="#fff">Feeadback</StyledH2>
        <swiper-container
          slides-per-view="1"
          navigation="true"
          pagination="true"
        >
          <swiper-slide lazy="true">
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
                  alt="Feedback1"
                  className={styles.imgFeeadback}
                />
              </div>
            </StyledFlex>
          </swiper-slide>
          <swiper-slide lazy="true">
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
                  alt="Feedback2"
                />
              </div>
            </StyledFlex>
          </swiper-slide>
          <swiper-slide lazy="true">
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
                  alt="Feedback3"
                />
              </div>
            </StyledFlex>
          </swiper-slide>
          <swiper-slide lazy="true">
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
                  alt="Feedback4"
                />
              </div>
            </StyledFlex>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};
export default Feeadback;
