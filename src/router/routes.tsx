import { RootLayout } from "@/layout/root-layout";
import { HomePage } from "@/pages/home/home-page";
import { MonitorPage } from "@/pages/monitor/monitor-page";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true,element: <HomePage />},
      {path: "monitor",element: <MonitorPage />},
    ],
  },
]