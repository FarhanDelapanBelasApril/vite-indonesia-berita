/* eslint-disable no-unused-vars */
import { useQuery, useQueryClient } from "react-query";
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

export const useGetAllNews = (page) => {
  const queryClient = useQueryClient();
  return useQuery(["getAllNews", page], () => fetchAllNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetLatestNews = (page) => {
  return useQuery(["getLatestNews", page], () => fetchNewsNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetEntrepreneurNews = (page) => {
  return useQuery(
    ["getEntreprenuerNews", page],
    () => fetchEntrepreneurNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        return data.data.sort((a, b) => b.title.localeCompare(a.title));
      },
    }
  );
};

export const useGetInvestmentNews = (page) => {
  return useQuery(
    ["getInvestmentNews", page],
    () => fetchInvestmentNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        return data.data.sort((a, b) => b.title.localeCompare(a.title));
      },
    }
  );
};

export const useGetLifestyleNews = (page) => {
  return useQuery(["getLifestyleNews", page], () => fetchLifestyleNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetMarketNews = (page) => {
  return useQuery(["getMarketNews", page], () => fetchMarketNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetSyariahNews = (page) => {
  return useQuery(["getSyariahNews", page], () => fetchSyariahNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetTechNews = (page) => {
  return useQuery(["getTechNews", page], () => fetchTechNews(page), {
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};
