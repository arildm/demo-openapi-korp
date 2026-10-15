import createClient from "openapi-fetch";
import type { paths } from "./api";

// Docs: https://ws.spraakbanken.gu.se/ws/korp/v9/redoc

const client = createClient<paths, "application/json">({
  baseUrl: "https://ws.spraakbanken.gu.se/ws/korp/v9",
});

export async function loadKwic() {
  const { data, error } = await client.GET("/concordance", {
    params: {
      query: {
        corpora: ["da"],
        cqp: ["[lemma contains 'regn']"],
        limit: 20,
      },
    },
  });

  if (error) throw error;

  return data;
}
