import Nav from "../components/Navbar";
import Head from "next/head";
import { Tab } from "@headlessui/react";

export default function Sensors() {
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
