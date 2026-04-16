import { NewsSource } from "./NewsSource";

export class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock Article 1", "Mock Article 2"];
  }
}