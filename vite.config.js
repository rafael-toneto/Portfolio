import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function getGitHubPagesBase() {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) {
    return "/";
  }

  const [, repoName] = repository.split("/");

  if (!repoName || repoName.endsWith(".github.io")) {
    return "/";
  }

  return `/${repoName}/`;
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.PAGES_BASE || (process.env.GITHUB_ACTIONS ? getGitHubPagesBase() : "/"),
});
