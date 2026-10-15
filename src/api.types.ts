/** Request/response types copied manually from docs */

export type ConcordanceParams = {
  corpora: string;
  cqp: string;
};

export type ConcordanceResponse = {
  kwic: Row[];
};

export type Row = {
  tokens: Token[];
};

export type Token = {
  word: string;
};
