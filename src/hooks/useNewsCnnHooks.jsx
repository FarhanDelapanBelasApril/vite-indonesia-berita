/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery, useQueryClient } from "react-query";
import {
  fetchAllNews,
  fetchNasionalNews,
  fetchInternasionalNews,
  fetchEkonomiNews,
  fetchGayaHidupNews,
  fetchHiburanNews,
  fetchOlahragaNews,
  fetchTeknologiNews,
} from "../api/NewsSourceCnnApi";
import React from "react";

export const useGetAllNews = (page) => {
  const [intervalMs, setIntervalMs] = React.useState(1000);
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(["getAllNews", page], () => fetchAllNews(page), {
    onSuccess: () => {
      queryClient.invalidateQueries("getAllNews");
    },
    onError: () => {
      queryClient.invalidateQueries("getAllNews");
    },
    refetchOnWindowFocus: false,
    refetchInterval: intervalMs,
    select: (data) => data.data.sort((a, b) => b.title - a.title),
  });

  return query;
};

export const useGetNasionalNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getNasionalNews", page],
    () => fetchNasionalNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,

      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetInternasionalNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getInternasionalNews", page],
    () => fetchInternasionalNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetEkonomiNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getEkonomiNews", page],
    () => fetchEkonomiNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetGayaHidupNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getGayaHidup", page],
    () => fetchGayaHidupNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetHiburanNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getHiburanNews", page],
    () => fetchHiburanNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetOlahragaNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getOlahragaNews", page],
    () => fetchOlahragaNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetTeknologiNews = (page) => {
  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery(
    ["getTeknologiNews", page],
    () => fetchTeknologiNews(page),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      onError: () => {
        queryClient.invalidateQueries("getAllNews");
      },
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};
