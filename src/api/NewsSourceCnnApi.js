/* eslint-disable no-unused-vars */
import axios from "../constants/axios";

export async function fetchAllNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchInternasionalNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/internasional";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchNasionalNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/nasional";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchEkonomiNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/ekonomi";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchOlahragaNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/olahraga";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchTeknologiNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/teknologi";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchHiburanNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/hiburan";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchGayaHidupNews({ pageParams = 0 }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnn-news/gaya-hidup";

  try {
    const response = await axios.get(`${endpoint}?page=${pageParams}`, {
      method: "get",
      signal: controller.signal,
      validateStatus: (status) => status >= 200 && status < 300,
    });

    return response.data;
  } catch (error) {
    controller.abort();
  }
}
