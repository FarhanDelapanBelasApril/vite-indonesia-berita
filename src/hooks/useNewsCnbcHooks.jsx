/* eslint-disable no-unused-vars */
import { useState } from "react";
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
  const [intervalMs, setIntervalMs] = useState(1000);
  const queryClient = useQueryClient();
  return useQuery(["getAllNews", page], () => fetchAllNews(page), {
    onSuccess: () => {
      queryClient.invalidateQueries("getAllNews");
    },
    onError: () => {
      queryClient.invalidateQueries("getAllNews");
    },
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetLatestNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(["getLatestNews", page], () => fetchNewsNews(page), {
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetEntrepreneurNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(
    ["getEntreprenuerNews", page],
    () => fetchEntrepreneurNews(page),
    {
      refetchOnWindowFocus: false,
      refetchInterval: intervalMs,
      select: (data) => {
        return data.data.sort((a, b) => b.title.localeCompare(a.title));
      },
    }
  );
};

export const useGetInvestmentNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(
    ["getInvestmentNews", page],
    () => fetchInvestmentNews(page),
    {
      refetchOnWindowFocus: false,
      refetchInterval: intervalMs,
      select: (data) => {
        return data.data.sort((a, b) => b.title.localeCompare(a.title));
      },
    }
  );
};

export const useGetLifestyleNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(["getLifestyleNews", page], () => fetchLifestyleNews(page), {
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetMarketNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(["getMarketNews", page], () => fetchMarketNews(page), {
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetSyariahNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(["getSyariahNews", page], () => fetchSyariahNews(page), {
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetTechNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  return useQuery(["getTechNews", page], () => fetchTechNews(page), {
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};
