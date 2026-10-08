import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface ProductType{
    id: number,
    categoryIcon: string,
    nameBn: string,
    today: number,
    unit: string,
    change: {
      dir: string,
      pct: number
    }
}

const Marquee = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products",);
  const products: ProductType[] = await res.json();
  
  return (
    <div className="bg-[#F0F5F0]">
      <div>
        <MarqueeText direction="right" duration={11}>
          {products.map((product) => (
            <div className="flex gap-1.5 mr-9 mt-3" key={product.id}>
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
