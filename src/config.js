const API_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://jobmate-backend-jkx3.onrender.com/api";

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL?.trim() ||
  "https://jobmate-backend-jkx3.onrender.com";

if (!import.meta.env.VITE_API_URL) {
  console.warn("⚠️ VITE_API_URL not set. Using fallback:", API_URL);
}

console.log("✅ API URL:", API_URL);

export { API_URL, SOCKET_URL };
export default API_URL;