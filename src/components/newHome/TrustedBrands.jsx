const brands = [1, 2, 3, 4, 5, 6];

const TrustedBrands = () => {
  return (
    <div className="new_trusted">
      <p className="new_trusted_title">Trusted by the world&apos;s best brands</p>
      <div className="new_trusted_logos">
        {brands.map((brand) => (
          <span key={brand}>
            <img
              src="/images/newHome/logoIpsumIcon.svg"
              alt="logoipsum"
              width={16}
              height={16}
            />{" "}
            logoipsum
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
