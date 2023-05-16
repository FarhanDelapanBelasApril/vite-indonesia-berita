/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllNews,
  fetchEkonomiNews,
  fetchGayaHidupNews,
  fetchHiburanNews,
  fetchInternasionalNews,
  fetchNasionalNews,
  fetchOlahragaNews,
  fetchTeknologiNews,
} from "../api/NewsSourceCnnApi";

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ["cnn-news-allNews"],
    queryFn: async ({ pageParam = 1 }) => await fetchAllNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data?.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetNasionalNews = () => {
  return useQuery({
    queryKey: ["cnn-news-nasionalNews"],
    queryFn: async ({ pageParam = 1 }) => fetchNasionalNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetInternasionalNews = () => {
  return useQuery({
    queryKey: ["cnn-news-internasionalNews"],
    queryFn: async ({ pageParam = 1 }) => fetchInternasionalNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetEkonomiNews = () => {
  return useQuery({
    queryKey: ["cnn-news-ekonomiNews"],
    queryFn: async ({ pageParam = 1 }) => fetchEkonomiNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetGayaHidupNews = () => {
  return useQuery({
    queryKey: ["cnn-news-gayaHidup"],
    queryFn: async ({ pageParam = 1 }) => fetchGayaHidupNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetHiburanNews = () => {
  return useQuery({
    queryKey: ["cnn-news-hiburan"],
    queryFn: async ({ pageParam = 1 }) => fetchHiburanNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetOlahragaNews = () => {
  return useQuery({
    queryKey: ["cnn-news-olahraga"],
    queryFn: async ({ pageParam = 1 }) => fetchOlahragaNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};

export const useGetTeknologiNews = () => {
  return useQuery({
    queryKey: ["cnn-news-teknologi"],
    queryFn: async ({ pageParam = 1 }) => fetchTeknologiNews(pageParam),
    networkMode: "online",
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.data.sort((a, b) => b.title.localeCompare(a.title));
    },
  });
};
