export function update({ request, response, database }) {
  const { id } = request.params
  const { equipament, description } = request.body

  return response.writehead(204).end()
}