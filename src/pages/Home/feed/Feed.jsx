import FeedAprentation from "./FeedAprentation"
import Vantagens from "./Vantagens"
import ProdutosDestaques from "./ProdutosDestaques"
import Marcas from "./Marcas"
const Feed = () => {
  return (
    <section className="Feed" >
      <FeedAprentation />
      <Vantagens />
      <ProdutosDestaques />
      <Marcas/>
    </section>
  )
}

export default Feed
