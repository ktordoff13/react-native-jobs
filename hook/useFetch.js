import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
};

const axios = require("axios");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
};
