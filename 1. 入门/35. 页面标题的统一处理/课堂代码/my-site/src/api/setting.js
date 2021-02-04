import request from "./request";

export async function getSetting() {
  return await request.get("/api/setting");
}
