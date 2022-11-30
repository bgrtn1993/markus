import React, {Component, useState} from 'react';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import './sidebar-right.css'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    };
}

const items: MenuItem[] = [
    getItem('.Net', 'sub1',[ //<MailOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),

    getItem('RXJS', 'sub2',[ //<AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', '7'),
    ]),
    getItem('Angular', 'sub3',[ //<SettingOutlined />, [
        getItem('Option 9', '8'),
        getItem('Option 10', '9'),
        getItem('Option 11', '10'),
        getItem('Option 12', '11'),
    ]),
    getItem('ReactJS', 'sub4',[ //<SettingOutlined />, [
        getItem('Option 9', '12'),
        getItem('Option 10', '13'),
        getItem('Option 11', '14'),
        getItem('Option 12', '15'),
    ]),
    getItem('HTML', 'sub5',[ //<SettingOutlined />, [
        getItem('Option 9', '16'),
        getItem('Option 10', '17'),
        getItem('Option 11', '18'),
        getItem('Option 12', '19'),
    ]),
    getItem('CSS', 'sub6',[ //<SettingOutlined />, [
        getItem('Option 9', '20'),
        getItem('Option 10', '21'),
        getItem('Option 11', '22'),
        getItem('Option 12', '23'),
    ]),
    getItem('Ag-Grid', 'sub7',[ //<SettingOutlined />, [
        getItem('Option 9', '24'),
        getItem('Option 10', '25'),
        getItem('Option 11', '26'),
        getItem('Option 12', '27'),
    ]),
];

const SidebarRight : React.FC = () => {
    // const [theme, setTheme] = React.useState<MenuTheme>('dark');
    const [current, setCurrent] = React.useState('0');


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className={"p-2 mr-2  mt-2 overflow-y-auto overflow-x-hidden"} style={{height:'1250px',maxWidth:'250px',minWidth:'250px'}}>
                <Menu
                    classname={"menuitem"}
                    onClick={onClick}
                    style={{ width: '100%',scroll,
                        backgroundColor:'rgb(82 82 82)',
                        color:'rgb(233 246 255)',
                        borderRadius: '0.25rem',colorItemBgSelected:'rgb(82 82 82'}}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
        </div>
    );
}

export default SidebarRight;