import apiClient from "./apiClient";

export const getItems = async () => {
  const { data } = await apiClient.get("/items");
  return data;
};