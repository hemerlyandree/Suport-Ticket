export function index({ request, response, database }) {
  const tickets = database.select("tickets")
  const { status } = request.query
  console.log(status)
  return response.end(JSON.stringify(tickets))
}