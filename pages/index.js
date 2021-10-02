import Layout from "../components/layout"
import Title from "../components/title"
import Head from "next/head"

export default function Home(){
    return (
        <>
            <Head>
                <title>Aprendamos NextJS con Webtutoriales!</title>
                <meta name="description" content="Esto es un ejemplo de next js"/>
            </Head>
            <Title>Home Page</Title>
            <p>Aprendamos NextJS con Webtutoriales!</p>
            <style>
                {`
                    p {
                        color: darkgray;
                    }
                    p:hover {
                        color: darkred;
                    }
                `}
            </style>
        </>
    )
}