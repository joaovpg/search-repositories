import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { PropsWithChildren } from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v4.idl",
  },
});

const ApolloClientProvider = ({ children }: Readonly<PropsWithChildren>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloClientProvider;
