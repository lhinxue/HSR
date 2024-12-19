import viteLogo from "/vite.svg";
import { Button, ColorPicker, ConfigProvider, Divider, Input, Space, theme, Typography } from "antd";
import { useState } from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [primary, setPrimary] = useState("#00b96b");
    const { token } = theme.useToken();
    // https://ant.design/theme-editor
    return (
        <ConfigProvider
            theme={{
                // 1. Use dark algorithm
                // algorithm: theme.darkAlgorithm,

                // 2. Combine dark algorithm and compact algorithm
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                token: {
                    colorPrimary: primary,
                },
            }}
        >
            <Space>
                <ColorPicker showText value={primary} onChange={(color) => setPrimary(color.toHexString())} />
                <Divider />
                <Space>
                    <Input placeholder="Please Input" />
                    <Button type="primary">Submit</Button>
                    <Typography>{token.colorPrimary}</Typography>
                </Space>
            </Space>
        </ConfigProvider>
    );
}

export default App;
