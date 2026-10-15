import type { ConcordanceParams, ConcordanceResponse } from "./api.types";

// Docs: https://ws.spraakbanken.gu.se/ws/korp/v9/redoc
const BASE = "https://ws.spraakbanken.gu.se/ws/korp/v9";

export async function loadKwic() {
  const params: ConcordanceParams = {
    corpora: "da",
    cqp: "[lemma contains 'regn']",
    limit: "20",
  };
  const searchParams = new URLSearchParams(params);
  const url = `${BASE}/concordance?${searchParams.toString()}`;
  const response = await fetch(url);
  const data = await response.json();
  return data as ConcordanceResponse;
}
