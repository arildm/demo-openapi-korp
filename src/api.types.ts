/** Request/response types copied manually from docs */

export type ConcordanceParams = {
  corpora: string;
  cqp: string;
  limit?: string;
};

export type ConcordanceResponse = {
  kwic: Row[];
  total_hits: number;
};

export type Row = {
  tokens: Token[];
};

export type Token = {
  word: string;
};
