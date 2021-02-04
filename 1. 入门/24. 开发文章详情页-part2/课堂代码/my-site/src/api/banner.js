import request from "./request";

export async function getBanners() {
  return await request.get("/api/banner");
}
