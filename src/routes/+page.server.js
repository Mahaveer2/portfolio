import client from "$lib/sanityClient";

export const load = async () => {
  const fetchData = async () => {
    const data = await client.fetch(`*[_type == "projects"]{"imageUrl": image.asset->url,name,link,description}`)
    return data;
  }

  return {
    projects: fetchData()
  }
}