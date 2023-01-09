import Nav from "../components/Navbar";
import Head from "next/head";
import { Tab } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { baseUrl, instance }  from '../axios'

export default function Sensors() {

  const lat_value = 45.527;
  const long_value = 1.975;
  const [sensorData, setSensorData] = useState([]);
  const [nbSensors, setNbSensors] = useState(4);
  var alertedSensors = 0;
  var sensorsnb= 4;

  const redOptions = { color: 'red' };
  const company = "300763";

  useEffect(() => {
    console.log("useEffect");
    setInterval(() => {
      instance.get('sensors/company/' + company, {
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data)
        setSensorData(response.data)
      }, (error) => {
          console.log(error)
      });
    }, 1000);
    if (JSON.parse(JSON.stringify(sensorData)).length >= 0)
      setNbSensors(JSON.parse(JSON.stringify(sensorData)).length)
  }, [sensorData]);

  return (
    <div className="items-center w-full h-full">
      <Head>
        <title>Sensors - Woodetect</title>
      </Head>
      <Nav />
      <div className="flex flex-col items-center justify-center w-full mt-12">
        <h1 className="text-3xl underline text-gray-700 dark:text-gray-100 pb-7">
          Sensors
        </h1>
        <Tab.Group vertical>
          <Tab.List>
            <Tab>Sensor 1</Tab>
            <Tab>Sensor 2</Tab>
            <Tab>Sensor 3</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <p className="text-xl text-gray-700 dark:text-gray-100 w-auto text-center">
                Sensor 1
              </p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-xl text-gray-700 dark:text-gray-100 w-auto text-center">
                Sensor 2
              </p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-xl text-gray-700 dark:text-gray-100 w-auto text-center">
                Sensor 3
              </p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
