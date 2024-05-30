export default async (req, con) => {
  return Response.json({
    ms: new Date().getMilliseconds()
  })
}
