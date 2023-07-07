import FeedAprentation from "./FeedAprentation"
import Vantagens from "./Vantagens";
import ProdutosDestaques from "./ProdutosDestaques";
import Feeadback from "./Feeadback";
const Feed = () => {
  return (
    <section className="Feed  animeLeft" >
      <FeedAprentation />
      <Vantagens />
      <ProdutosDestaques />
      <Feeadback/>
    </section>
  )
}

export default Feed
