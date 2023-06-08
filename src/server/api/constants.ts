import type { ProductItem } from "@/types";

export const EMPTY_PRODUCT_ID_ERROR = "Product id is required!";

/**
 === MOCKS
*/

export const MOCK_PRODUCT_ITEM: ProductItem = {
  id: "1",
  title: "Airpods-Max",
  description:
    "a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.",
  price: 549,
  rating: 4.5,
  feedBacksAmount: 121,
  images: [
    "https://images.unsplash.com/photo-1616661318204-51ededbdf7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1608148118722-56da485f9e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
    "https://images.unsplash.com/photo-1625245488618-2edf33ee5ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1625245488618-2edf33ee5ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1625245488618-2edf33ee5ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1625245488618-2edf33ee5ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
  ],
  colorsOptions: [
    {
      id: "1",
      primary: "#000000",
      secondary: "#cccccc",
    },
    {
      id: "2",
      primary: "#dddddd",
      secondary: "#0000ff",
    },
    {
      id: "3",
      primary: "#ff0000",
      secondary: "#000000",
    },
    {
      id: "4",
      primary: "#000000",
      secondary: "#ff0000",
    },
  ],
  currentColorOptionId: "1",
  itemsLeft: 12,
};
