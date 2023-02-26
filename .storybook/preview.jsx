import React from "react";
import { enUS as en, jaJP as ja, zhCN as zhHans } from "@ones-design/locale";
import { ConfigProvider } from "@ones-design/core";

const locale = {
  en,
  ja,
  zhHans,
};

export const decorators = [
  (Story, { globals }) => {
    return (
      <ConfigProvider locale={locale[globals.locale]}>
        <Story />
      </ConfigProvider>
    );
  },
];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "国际化",
    defaultValue: "zhHans",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "ja", right: "🇯🇵", title: "日本語" },
        { value: "zhHans", right: "🇨🇳", title: "简体中文" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "ONES Design",
        "Install 安装",
        "Theme 定制主题",
        "Locale 国际化",
        "FAQ 常见问题",
        "tailwindcss",
        "icons",
        "core",
        "guide",
        "user",
        "filter",
        "table",
        ["Table 表格"],
        "更新日志",
      ],
    },
  },
  designToken: {
    disable: true,
  },
  statuses: {
    "v2.1+": {
      color: "#24b47e",
    },
    "v2.2+": {
      color: "#24b47e",
    },
    "v2.3+": {
      color: "#24b47e",
    },
    "v2.5+": {
      color: "#24b47e",
    },
    "v2.6+": {
      color: "#24b47e",
    },
    "v2.8+": {
      color: "#24b47e",
    },
    "v2.11+": {
      color: "#24b47e",
    },
    "v2.12+": {
      color: "#24b47e",
    },
    "v2.13+": {
      color: "#24b47e",
    },
    "v2.15+": {
      color: "#24b47e",
    },
    "v2.16+": {
      color: "#24b47e",
    },
    "v2.17+": {
      color: "#24b47e",
    },
    "v2.18+": {
      color: "#24b47e",
    },
  },
};
