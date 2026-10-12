import { Ban } from "lucide-react";

const brands = ["logoipsum", "logoipsum", "logoipsum", "logoipsum", "logoipsum", "logoipsum"];

const TrustedBrands = () => {
  return (
    <div className="new_trusted">
      <p className="new_trusted_title">Trusted by the world&apos;s best brands</p>
      <div className="new_trusted_logos">
        {brands.map((brand, index) => (
          <span key={index}>
            <Ban size={14} /> {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
