import type { GetServerSideProps, NextPage } from "next";
import type { ProductItem } from "@/types";
import ProductListItem from "@/modules/ProductItem";
import { appRouter } from "@/server/api/root";

type ProductItemPageProps = {
  product: ProductItem;
};

const ProductItemPage: NextPage<ProductItemPageProps> = ({ product }) => {
  return <ProductListItem product={product} />;
};

export default ProductItemPage;

export const getServerSideProps: GetServerSideProps<
  ProductItemPageProps
> = async (context) => {
  const trpc = appRouter.createCaller(context as never);

  if (!context.query.id) {
    return {
      notFound: true,
    };
  }

  const product = await trpc.products.getItem({
    id: context.query.id as string,
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
