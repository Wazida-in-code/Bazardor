import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products = await res.json();
  console.log(products);
  return (
    <div className="bg-[#F0F5F0]">
      <div className="flex w-11/12 mx-auto py-1.5">
        <MarqueeText direction="right" duration={11}>
          {products.map((product) => (
            <div className="flex gap-1.5 mr-9" key={product.id}>
                <p>{product.categoryIcon}</p>
                <p>{product.nameBn}</p>
                <p>
                  {product.today}/{product.unit}
                </p>
                 
                {
                    product.change.dir === "up"? <p className="text-red-700">▲{product.change.pct}%</p> : <p className="text-green-700">▼{product.change.pct}%</p>
                }
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
