// src/constants/constants.ts

export const APP_NAME = "Startup Project";
export const APP_DISCRIPTION = "Next.js and java spring boot app.";

export const API_ENDPOINTS = {
  BASE_URL: "https://api.example.com",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};

export const APP_ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  REGISTER: "/register"
};

export const ENVIRONMENT = process.env.NODE_ENV || "development";

export const DEFAULT_SETTINGS = {
  LANGUAGE: "en",
  THEME: "light",
};
