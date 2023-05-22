import React, { Component } from 'react';
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";

const GET_ESSAYS = gql`
    {
      getEssays {
            content,
            header,
            id
      }
}
`;


const projects = [{
    id: 0,
    header: 'CSS Projects',
    description: 'CSS projelerinde bir kaç bir şey deniyorum o da bunlardan birisi. Bu yazıyı uzun tutuyorumki length değerine göre gösterimini yapmasını sağlayacak',
    link: ''
}, {
    id: 1,
    header: 'C# Projects',
    description: '.NET tabanlı programlama dilleri (C#, VB.NET) ile PostgreSQL veritabanı kullanımı için gerekli olan PostgreSQL veri sağlayıcısının kurulumu, PostgreSQL bağlantısı, tablo oluşturma, veri ekleme, güncelleme, silme ve sorgulama işlemleri yer alıyor',
    link: ''
}, {
    id: 2,
    header: 'Angular Projects',
    description: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps',
    link: ''
}]



class Home extends Component {

    async essayFunc(){
        try {

            const { data,refetch} = useQuery(GET_ESSAYS,{
                variables: {
                    name: 'blogDB'
                }});
            return data;
        }catch (e){
            console.log(e);
        }
        return null;
    }

    render() {
        const { loading, error, data } = useQuery(GET_ESSAYS, {
            fetchPolicy: 'network-only',
            nextFetchPolicy: 'cache-first'// Doesn't check cache before making a network request
        });
        console.log(data);
        const proItems = projects.map((x) => {
            const desc = x.description.substring(0, 400);
            return (
                <div key={x.id} className={"grid grid-flow-row auto-rows-max hover:auto-rows-min m-2 rounded border-gray-200 drop-shadow-md shadow-black"}>
                    <div className={"h-max rounded-t border-mar-gray-dark-100 bg-gray-600 text-mar-blue-light-50 p-2"}>
                        <Link to={x.link} className={"hover:text-mar-link cursor-pointer"}>{x.header}</Link>
                    </div>
                    <div className={"bg-gray-50 rounded-b border-mar-gray-dark-100 text-mar-black p-2"}>
                        {desc}...
                    </div>
                </div>
            );
        })
        return (
            <div className={"w-full ml-4 mr-4 rounded"}>
                {proItems}
            </div>
        );
    }
}

export default Home;