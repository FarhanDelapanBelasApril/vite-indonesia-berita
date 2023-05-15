/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
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
import React, { useState } from "react";

export const useGetAllNews = (page) => {
  const [intervalMs, setIntervalMs] = React.useState(1000);
  // Access the client
  const query = useQuery(["getAllNews", page], () => fetchAllNews(page), {
    refetchOnWindowFocus: false,

    select: (data) => data.data.sort((a, b) => b.title - a.title),
  });

  return query;
};

export const useGetNasionalNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getNasionalNews", page],
    () => fetchNasionalNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetInternasionalNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getInternasionalNews", page],
    () => fetchInternasionalNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetEkonomiNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getEkonomiNews", page],
    () => fetchEkonomiNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetGayaHidupNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getGayaHidup", page],
    () => fetchGayaHidupNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetHiburanNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getHiburanNews", page],
    () => fetchHiburanNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetOlahragaNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getOlahragaNews", page],
    () => fetchOlahragaNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};

export const useGetTeknologiNews = (page) => {
  const [intervalMs, setIntervalMs] = useState(1000);
  // Access the client
  const query = useQuery(
    ["getTeknologiNews", page],
    () => fetchTeknologiNews(page),
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data.sort((a, b) => b.title - a.title),
    }
  );

  return query;
};
