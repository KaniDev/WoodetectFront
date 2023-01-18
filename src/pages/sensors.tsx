import Nav from "../components/Navbar";
import Head from "next/head";
import SensorCard from "../components/SensorCard";
import AlertCard from "../components/AlertCard";
import { Tab } from "@headlessui/react";

export default function SensorPage() {
  return (
    <div className="items-center w-full h-full">
      <Head>
        <title>Sensors - Woodetect</title>
      </Head>
      <Nav />
      <div className="flex flex-col items-center justify-center w-full mt-12 pb-4">
        <Tab.Group>
          <Tab.List className="text-3xl text-gray-700 dark:text-gray-100 border rounded-md border-black dark:border-gray-300">
            <Tab className="pr-4 pl-4 border-r border-black dark:border-gray-300">
              Sensors
            </Tab>
            <Tab className="pr-4 pl-4 border-l border-black dark:border-gray-300">
              Alerts
            </Tab>
          </Tab.List>
          <br />
          <Tab.Panels>
            <Tab.Panel className="flex flex-row">
              <SensorCard
                sensorName="Sensor 1"
                status="active"
                lastActive="Now"
              />
              <SensorCard
                sensorName="Sensor 2"
                status="inactive"
                lastActive="2 hours ago"
              />
            </Tab.Panel>
            <Tab.Panel className="flex flex-col w-96 items-center text-xl text-gray-700 dark:text-gray-100">
              Past alerts
              <AlertCard
                alertName="Connection Issues"
                alertText="Unstable connection leads to inaccurate data"
                severityColor="orange"
              ></AlertCard>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
