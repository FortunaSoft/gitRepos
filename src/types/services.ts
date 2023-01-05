export type SearchOptions = {
    order: "asc" | "desc";
    sort: "stars" | "forks" | "updated" | "help-wanted-issues";
    page: number;
    search: string;
  };