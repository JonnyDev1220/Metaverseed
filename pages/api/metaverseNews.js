import getMetanews from "../../database/getMetaverseNews";

export default async function (req, res) {
  const result = await getMetanews().then((data) => {
    return data;
  });

  res.status(200).json({ result });
}
