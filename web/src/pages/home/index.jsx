import React from 'react'
import Table from '../../components/table'


const Home = ({ match }) => {

    const { table } = match.params;

    const list = [{
        Name: "Ilfrith",
        LastName: "Keck",
        WizzardName: "Hamba",
    },
    {
        Name: "Glenwig",
        LastName: "Hayner",
        WizzardName: "Smaug",
    },
    {
        Name: "Kymry",
        LastName: "Ardnek",
        WizzardName: "Eater",
    },
    {
        Name: "Aianna",
        LastName: "Alianne",
        WizzardName: "Sila",
    },
    {
        Name: "Vylon",
        LastName: "Skiff",
        WizzardName: "Mirajan",
    },
    {
        Name: "Phineas",
        LastName: "Swayne",
        WizzardName: "Pavo",
    },
    {
        Name: "Hogwarts",
        LastName: "Haworth",
        WizzardName: "Krebain",
    },
    {
        Name: "Randomir",
        LastName: "Reedy",
        WizzardName: "Emeric",
    },
    {
        Name: "Pafger",
        LastName: "Jablonski",
        WizzardName: "Marauder",
    },
    {
        Name: "Sorthliel",
        LastName: "Mcgowan",
        WizzardName: "Bloke",
    }];


    const render = table ? <Table lines={list} /> : "";


    return (<>
        <div className="container">
            <h1>Home</h1>
        </div>

        {render}

    </>)
}



export default Home;