import request from "./request";

export async function getProjects() {
  return await request.get("/api/project");
}
