import "./index.css";
import { pizzaData } from "./data.jsx";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;

function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            soluta illum minima eveniet repudiandae, minus facere, cumque
            voluptas tempora placeat nobis ad ex nulla optio quisquam? Repellat,
            molestias doloribus.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we&apos;re still working on our menu please come back later:)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(props);

  //if (propObj.soldOut) return <header />;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="{props.pizzaObj.name}" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //if (hour >= openHour && hour <= closeHour) alert("we're currently Open!!");
  //else alert("Sorry we're closed");

  if (!isOpen)
    return (
      <p>
        Were Happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    );
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            we&apos;re open until {closeHour}:00. come visit us or order online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Were Happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
