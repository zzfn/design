import React, {useEffect, useState} from 'react';
import TabPane from "./TabPane";

interface OptionsProps {
    value: string,
    label: string
}

interface TabsProps {
    options: OptionsProps[]
    onChange: (value:string) => void
    value: string
}

const Tabs: React.FC<TabsProps> = ({options,onChange,value}) => {
    return (
        <ul className={'zzf-tab'}>
            {
                options.map(node => <TabPane activeKey={value} onChange={(val)=> onChange(val)} key={node.value} label={node.label} value={node.value}/>)
            }
        </ul>
    );
}
export default Tabs;
