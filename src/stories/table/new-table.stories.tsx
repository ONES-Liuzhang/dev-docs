import React from "react";
import VirtualTable from "@ones-design/table";

export default {
  title: "Table/VirtualTable",
  component: VirtualTable,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <VirtualTable
    dataSource={[
      {
        key: "1",
        name: "组件库",
        user: "htmlin",
        editUser: "htmlin",
        date: "2020-04-12",
        editDate: "2020-04-12",
        time: "14:07",
        number: 12,
      },
      {
        key: "2",
        name: "设计系统",
        user: "lbg",
        editUser: "lbg",
        date: "2020-04-13",
        editDate: "2020-04-13",
        time: "14:08",
        number: 412,
      },
      {
        key: "3",
        name: "TestCase",
        user: "稀饭",
        editUser: "稀饭",
        date: "2020-04-14",
        editDate: "2020-04-14",
        time: "14:17",
        number: 41,
      },
      {
        key: "4",
        name: "这个产品名称真的是长到令人发指是真的非常长啊",
        user: "稀饭",
        editUser: "稀饭",
        date: "2020-04-14",
        editDate: "2020-04-14",
        time: "14:17",
        number: 41,
      },
      {
        key: "11",
        name: "组件库",
        user: "htmlin",
        editUser: "htmlin",
        date: "2020-04-12",
        editDate: "2020-04-12",
        time: "14:07",
        number: 12,
      },
      {
        key: "22",
        name: "设计系统",
        user: "lbg",
        editUser: "lbg",
        date: "2020-04-13",
        editDate: "2020-04-13",
        time: "14:08",
        number: 412,
      },
      {
        key: "33",
        name: "TestCase",
        user: "稀饭",
        editUser: "稀饭",
        date: "2020-04-14",
        editDate: "2020-04-14",
        time: "14:17",
        number: 41,
      },
      {
        key: "44",
        name: "这个产品名称真的是长到令人发指是真的非常长啊",
        user: "稀饭",
        editUser: "稀饭稀饭稀饭稀饭稀饭稀饭稀饭稀饭稀饭稀饭",
        date: "2020-04-14",
        editDate: "2020-04-14",
        time: "14:17",
        number: 41,
      },
    ]}
    columns={[
      {
        name: "产品名称",
        code: "name",
        getValue: (row: any, rowIndex: number) => {
          return `${row.name}-${rowIndex}`;
        },
      },
      {
        name: "产品创建人",
        code: "user",
      },
      {
        name: "产品负责人",
        code: "editUser",
      },
      {
        name: "创建日期",
        code: "date",
      },
      {
        name: "修改日期",
        code: "editDate",
      },
      {
        name: "工作项数量",
        code: "number",
      },
      {
        name: "操作",
        code: "actions",
        render: () => <span>操作列</span>,
      },
    ]}
  />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "VirtualTable",
};
