import "reflect-metadata";
import { Container } from "typedi";

import { NewsAggregator } from "./NewsAggregator";
import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";
import { MockNewsSource } from "./MockNewsSource";
import { NEWS_SOURCE } from "./tokens";

async function main() {
  console.log("=== RSS Source ===");
  Container.reset();
  Container.set(NEWS_SOURCE, new RSSFeedSource());

  const agg1 = Container.get(NewsAggregator);
  await agg1.getLatestArticles();

  console.log("=== API Source ===");
  Container.reset();
  Container.set(NEWS_SOURCE, new APISource());

  const agg2 = Container.get(NewsAggregator);
  await agg2.getLatestArticles();

  console.log("=== Mock Source ===");
  Container.reset();
  Container.set(NEWS_SOURCE, new MockNewsSource());

  const agg3 = Container.get(NewsAggregator);
  await agg3.getLatestArticles();
}

main();