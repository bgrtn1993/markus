import React, { Component } from 'react';
import { AutoComplete, Input, Tooltip, Button } from "antd";
import {
    LinkedinOutlined,
    GithubOutlined,
    GitlabOutlined,
    InstagramOutlined
} from '@ant-design/icons';

const renderTitle = (title) => (
    <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);

const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <search /> {count}
            </span>
        </div>
    ),
});

const options = [
    {
        label: renderTitle('Libraries'),
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
        label: renderTitle('Solutions'),
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
        label: renderTitle('Articles'),
        options: [renderItem('AntDesign design language', 100000)],
    },
];

const projects = [
    {
        id: 0,
        title: 'C#\'da oluşan Sıkıntılar',
        link: ''
    },
    {
        id: 1,
        title: 'C#\'da oluşan Sıkıntılar',
        link: ''
    },
    {
        id: 2,
        title: 'C#\'da oluşan Sıkıntılar',
        link: ''
    },
    {
        id: 3,
        title: 'C#\'da oluşan Sıkıntılar',
        link: ''
    },
    {
        id: 4,
        title: 'C#\'da oluşan Sıkıntılar',
        link: ''
    },
    {
        id: 5,
        title: 'C#\'da oluşan Sıkıntılardan biridir bu',
        link: ''
    }
]

const SidebarLeft = () => {

    const sugg = projects.map((x) => {
        if (x.title.length > 23) {
            const title = x.title.substring(0, 23) + '...';
            return (
                <p key={x.id} className={"cursor-pointer m-1 p-1 hover:bg-mar-gray-lightest hover:rounded"}>
                    <Tooltip className={"border-gray-600"} placement="top" color={"gray"} key={x.id} title={x.title}>
                        {title}
                    </Tooltip></p>)
        }
        return (
            <p key={x.id} className={"cursor-pointer m-1 p-1 hover:bg-mar-gray-lightest hover:rounded"}>{x.title}</p>
        );
    });
    return (
        <div className={"text-mar-blue-light-50 p-2 ml-2 grid grid-flow-row auto-rows-max hover:auto-rows-min mb-2"} style={{ minWidth: '245px', maxWidth: '245px' }}>
            <div className={"grid justify-center bg-gray-600 rounded shadow-lg shadow-black h-60 mb-4 "}>
                <img className={"mt-4 w-24 rounded-full"} src="https://media-exp1.licdn.com/dms/image/C4E03AQHZOfbeO1kJMg/profile-displayphoto-shrink_800_800/0/1640549653828?e=1675296000&v=beta&t=sNIkv57FcMRngMW0Q_4Q1Jv2Ea0Dt7K7I6tiIhEP7f8" alt="Buğra Tuna" />
                <h1 className={"text-mar-blue-light-50"}>Buğra Tuna</h1>
                <div className={"flex flex-row justify-center"}>
                    <a className={"mr-1"} href='https://github.com/bgrtn1993' target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined /></a>
                    <a className={"mr-1"} href='https://www.linkedin.com/in/bugratuna/' target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined /></a>
                    <a className={"mr-1"} href='https://github.com/bgrtn1993' target="_blank" rel="noopener noreferrer">
                        <GithubOutlined /></a>
                    <a className={"mr-1"} href='https://github.com/bgrtn1993' target="_blank" rel="noopener noreferrer">
                        <GitlabOutlined /></a>
                </div>
            </div>
            <AutoComplete
                popupClassName="certain-category-search-dropdown border-mar-black"
                className={"mb-4  border-mar-gray-dark-100"}
                dropdownMatchSelectWidth={250}
                style={{ width: 250 }}
                options={options}
            >
                <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
            <div className={"bg-gray-600 rounded shadow-lg shadow-black h-max p-2"}>
                <div className={"text-mar-black font-bold border-b border-mar-black"}>Yeni Eklenenler</div>
                {sugg}
            </div>
        </div>
    );

}

export default SidebarLeft;