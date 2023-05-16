/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllNews,
  fetchEntrepreneurNews,
  fetchInvestmentNews,
  fetchLifestyleNews,
  fetchMarketNews,
  fetchNewsNews,
  fetchSyariahNews,
  fetchTechNews,
} from "../api/NewsSourceCnbcApi";

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-getAllNews"],
    queryFn: async ({ pageParam = 1 }) => await fetchAllNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetLifestyleNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-lifestyle"],
    queryFn: async ({ pageParam = 1 }) => await fetchLifestyleNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetTechNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-tech"],
    queryFn: async ({ pageParam = 1 }) => await fetchTechNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetSyariahNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-syariah"],
    queryFn: async ({ pageParam = 1 }) => await fetchSyariahNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetEntrepreneurNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-entrepreneur"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchEntrepreneurNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetLatestNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-news"],
    queryFn: ({ pageParam = 1 }) => fetchNewsNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetInvestmentNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-investment"],
    queryFn: async ({ pageParam = 1 }) => await fetchInvestmentNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetMarketNews = () => {
  return useQuery({
    queryKey: ["cnbc-news-market"],
    queryFn: async ({ pageParam = 1 }) => await fetchMarketNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};
