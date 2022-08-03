---
order: 0
title: 基本用法
---

## zh-CN

按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。

## en-US

There are `primary`, `secondary`, `dashed`, `outline` and `text` button types.

```tsx
import { Button, Space } from "@zzf/design";

const App = () => {
  return (
    <Space size="large">
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  );
};

export default App;
```
