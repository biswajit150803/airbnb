import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";
console.log(data);
function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
      {cards}
      </div>
    </div>
  );
}

export default App;
