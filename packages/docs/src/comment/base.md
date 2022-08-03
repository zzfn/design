```tsx
import { Comment } from "@zzf/design";

const App = () => {
  return (
    <>
      <Comment
        content="love you"
        datetime="1 hour"
        author="Balzac"
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
      >
        <Comment
          content="love you too"
          datetime="2 hour"
          author="Balzac"
          avatar="//p1-arco.byteimg"
        ></Comment>
      </Comment>
      <Comment></Comment>
      <Comment></Comment>
    </>
  );
};

export default App;
```
