// Źródło ConfigMapy frontendu (configMapGenerator). Edytuj i `kubectl apply -k k8s/web`.
// Zmiana wartości => nowy hash w nazwie ConfigMapy => rollout Deploymentu => nowy config.js.
//
// Same-origin (front i /api na tej samej domenie, routing po stronie ingress):
//   API_URL: ""  -> ścieżki względne (/api/...). Brak CORS, cookies działają wprost.
// Split-host (API na innej domenie):
//   API_URL: "https://api.cookbook.example.com"
//   -> wymaga server WEB_URL = origin SPA (CORS) oraz cookies SameSite=None; Secure.
window.__APP_CONFIG__ = {
  API_URL: '',
};
