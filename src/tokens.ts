import { Token } from "typedi";
import { NewsSource } from "./NewsSource";

export const NEWS_SOURCE = new Token<NewsSource>("NEWS_SOURCE");