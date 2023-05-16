/* eslint-disable no-unused-vars */
import axios from "../constants/axios";

export async function fetchAllNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news";
  const LIMIT = 10;

  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchInternasionalNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/internasional";
  const LIMIT = 10;

  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchNasionalNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/nasional";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchEkonomiNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/ekonomi";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchOlahragaNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/olahraga";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchTeknologiNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/teknologi";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchHiburanNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/hiburan";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchGayaHidupNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/gaya-hidup";
  const LIMIT = 10;
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=${LIMIT}`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}
