import foto404 from "../assets/img/404.svg"
import { StyledImg } from '../componentes/Img.style'
import style from "../assets/css/Page404.module.css"
const Page404 = () => {
  return (
    <div className={style.page}>
        <StyledImg src={foto404} maxWidth="40%"></StyledImg>
    </div>
  )
}

export default Page404