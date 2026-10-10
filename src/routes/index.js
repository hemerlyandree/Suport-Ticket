import { tickets } from "./ticket.js"
import { parseRoutePath } from "../utils/parseRoutePath.js"

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))