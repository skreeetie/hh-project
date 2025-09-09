import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Vacancy } from "../../../env/vacancy.env";

export const vacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.hh.ru/",
  }),
  endpoints: (build) => ({
    getFilteredVacancies: build.query<{ items: Vacancy[] }, string>({
      query: (url) =>
        `vacancies?industry=7&professional_role=96&per_page=10&${url}`,
    }),
  }),
});

export const { useGetFilteredVacanciesQuery } = vacanciesApi;
