import { memo } from "react";
import type { ProductListProps } from "./types";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Link from "next/link";

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <MainLayout title="Products">
      <div className="p-32">
        <div className="flex justify-center">
          <Link href="/products/1" legacyBehavior>
            <button className="rounded-md bg-blue-600 p-4 text-white">
              Redirect to product
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default memo(ProductList);
