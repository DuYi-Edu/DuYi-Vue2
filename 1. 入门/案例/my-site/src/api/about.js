import request from "./request";

export async function getAbout() {
  return await request.get("/api/about");
}
