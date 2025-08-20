export type fieldRepository =
  | "STARGAZERS"
  | "UPDATED_AT"
  | "NAME"
  | "CREATED_AT";
export type RepositoryOrder = "ASC" | "DESC";

export interface RepositoryOrderBy {
  field: fieldRepository;
  direction: RepositoryOrder;
}
