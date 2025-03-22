import ProductCard from "./productCard";
import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";


const products = [
  {
    id: 1,
    name: "Earbuds",
    price: 200,
    image: product1,
    desc: "Experience high-quality sound with these sleek wireless Bluetooth earbuds featuring a modern in-ear design and a glossy black finish. The compact charging case includes a digital LED display that shows the battery levels for both the case and earbuds. Equipped with touch controls and LED indicators on the stems, these earbuds offer easy management of music and calls. Perfect for on-the-go use, they provide a secure fit and excellent sound isolation for an immersive listening experience.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 380,
    image: product2,
    desc: "Enjoy immersive sound with these over-ear wireless headphones designed for comfort and performance. Featuring a sleek black design with cushioned ear cups and an adjustable headband, they provide a snug fit for long listening sessions. Built with noise isolation and high-quality audio drivers, these headphones deliver deep bass and crisp highs. Ideal for music, calls, and gaming, they offer wireless connectivity and convenient on-ear controls for a seamless listening experience.",
  },
  
  {
    id: 3,
    name: "Keyboard",
    price: 600,
    image: product3,
    desc: "Upgrade your typing and gaming experience with this high-performance mechanical keyboard featuring customizable RGB lighting. Designed with durable mechanical switches for tactile feedback and longevity, this keyboard offers a smooth and responsive keystroke experience. The compact yet ergonomic layout includes dedicated function keys and anti-ghosting technology for precise input. Perfect for both professional work and gaming, it delivers a sleek design with a sturdy build.",
  },
];

export default function ProductList({ onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
