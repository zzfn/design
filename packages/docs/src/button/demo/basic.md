---
order: 0
title: Basic
---

Basic Button usage.

```js
import { Button,Space } from '@zzf/design';

const App = () => {
  return <Space>
      <Button type="primary"> Primary </Button>
      <Button type="secondary"> default </Button>
      <Button type="text"> text </Button>
  </Space>;
};

export default App;
```

```css
.zzf-btn {
  color: red;
}
```
