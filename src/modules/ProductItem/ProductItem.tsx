import { memo, useState } from "react";
import { NumericFormat } from "react-number-format";
import type { ProductItemProps } from "./types";
import s from "./ProductItem.module.css";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Rating from "@/ui/Rating/Rating";
import ProductColorOption from "@/ui/ProductColorOption/ProductColorOption";
import NumberInput from "@/ui/NumberInput/NumberInput";
import clsx from "clsx";
import ProductCarousel from "@/components/ProductCarousel";

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [productPurchaseAmount, setProductPurchaseAmount] = useState(1);
  const [currentColorOptionId, setCurrentColorOptionId] = useState(
    product.currentColorOptionId
  );

  const incrementProductPurchaseAmountHandler = () => {
    setProductPurchaseAmount((prev) => prev + 1);
  };

  const decrementProductPurchaseAmountHandler = () => {
    setProductPurchaseAmount((prev) => prev - 1);
  };

  if (!product) {
    return null;
  }

  return (
    <MainLayout title={product.title}>
      <div className={s.wrap}>
        <section className={s["carousel-wrap"]}>
          <ProductCarousel images={product.images} />
        </section>
        <section className={s["info-wrap"]}>
          <article className={s["common-info"]}>
            <h1 className={s.title}>{product.title}</h1>
            <h4 className={s.description}>{product.description}</h4>
            <div className={s["rating-wrap"]}>
              <Rating className={s.ratings} rating={product.rating} />
              <p className={s["feedbacks-amount"]}>
                ({product.feedBacksAmount})
              </p>
            </div>
          </article>
          <div className={s.divider} />
          <article className={s["price-info"]}>
            <h2>
              <NumericFormat
                tabIndex={-1}
                displayType="text"
                className={s.price}
                value={product.price}
                allowLeadingZeros
                thousandSeparator=","
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale
                prefix="$"
              />
            </h2>
          </article>
          <div className={s.divider} />
          <article className={s["colors-options-wrap"]}>
            <h3 className={s["section-title"]}>Choose a Color</h3>
            <div className={s["colors-options"]}>
              {product.colorsOptions.map((color) => {
                return (
                  <ProductColorOption
                    key={color.id}
                    className={s["color-option"]}
                    active={color.id === currentColorOptionId}
                    onClick={setCurrentColorOptionId}
                    {...color}
                  />
                );
              })}
            </div>
          </article>
          <div className={s.divider} />
          <article className={s["purchase-wrap"]}>
            <div className={s["purchase-selection-wrap"]}>
              <NumberInput
                value={productPurchaseAmount}
                max={product.itemsLeft}
                onIncrementClick={incrementProductPurchaseAmountHandler}
                onDecrementClick={decrementProductPurchaseAmountHandler}
              />

              <div className={s["comment-wrap"]}>
                <p className={s["comment-paragraph"]}>
                  Only{" "}
                  <span className={s["items-left-wrap"]}>
                    {product.itemsLeft} items
                  </span>{" "}
                  left!
                </p>
                <p className={s["comment-paragraph"]}>Don`t miss it</p>
              </div>
            </div>
            <div className={s["cta-wrap"]}>
              <button className={clsx(s.button, s.primary, "focus-primary")}>
                Buy Now
              </button>
              <button className={clsx(s.button, s.secondary, "focus-primary")}>
                Add To Cart
              </button>
            </div>
          </article>
        </section>
      </div>
    </MainLayout>
  );
};

export default memo(ProductItem);
