import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId:"rnqrxvn0",
  dataset:"production",
  apiVersion:"2022-12-12",
  useCdn:true
});

export default client;