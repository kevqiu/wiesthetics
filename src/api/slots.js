import { Endpoint } from "./constants";
import { getAllRequest } from "./client";

export const getAllSlots = () => {
  return getAllRequest(`${Endpoint.SLOTS}?from=${new Date().toISOString()}`);
}