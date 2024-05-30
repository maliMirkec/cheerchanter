export default async (req, con) => {
  return Response.json({
    ts: new Date().valueOf()
  })
}
