import type { IRepositoryDetails } from "@/interface/IRepository";
import api from "./api";
import type { ILanguage } from "@/interface/ILanguage";

const BASE_URL = "/repos";
export async function getRepository(
  username: string,
  repository: string,
  params = {}
) {
  return await api.get<IRepositoryDetails>(
    `${BASE_URL}/${username}/${repository}`,
    {
      params,
    }
  );
}

export async function getRepositoryLanguages(
  username: string,
  repository: string
) {
  return await api.get<ILanguage>(
    `${BASE_URL}/${username}/${repository}/languages`
  );
}

export async function getRepositoryReadme(
  username: string,
  repository: string
) {
  return await api.get(`${BASE_URL}/${username}/${repository}/readme`, {
    headers: { Accept: "application/vnd.github.v3.raw" },
  });
}
