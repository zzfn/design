```tsx
import {useState} from 'react'
import { Button,Modal } from '@zzf/design';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => setVisible(true)}>
                打开 Modal
            </Button>
            <Modal onCancel={() => setVisible(false)} visible={visible} title="基本信息框">
                This is the content of a basic modal. More content...
            </Modal>
        </>
    );
};

export default App;
```
