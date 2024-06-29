import { DASHBOARD_URL } from "./constants"
import { INavigationItem } from "@/app/dashboard/_components/Sidebar/SidebarNavigation"

export interface IDashboardSidebarSettings {
  prefix: string
  menu: INavigationItem[]
}

const dashboardSettings: IDashboardSidebarSettings = {
  prefix: DASHBOARD_URL,
  menu: [
    {
      id: "general",
      name: "General",
      slug: "/",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-full w-full"
        viewBox="0 0 24 24"
      >
        <path d="M14 21a1 1 0 01-1-1v-8a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-6zM4 13a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1H4zm5-2V5H5v6h4zM4 21a1 1 0 01-1-1v-4a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H4zm1-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 4a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1V4zm2 1v2h4V5h-4z"></path>
      </svg>
    },
    {
      id: "projects",
      name: "Projects",
      slug: "/projects",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-full h-full"
        viewBox="0 0 16 16"
      >
        <path d="M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.825a2 2 0 01-1.991-1.819l-.637-7a2 2 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981z"></path>
      </svg>
    },
    {
      id: "clients",
      name: "Clients",
      slug: "/clients",
      new: false,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-full w-full" viewBox="0 0 384 512">
        <path d="M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h80v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16z"></path>
      </svg>
    },
    {
      id: "charts",
      name: "Charts",
      slug: "/charts",
      new: true,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-full w-full"
        viewBox="0 0 512 512"
      >
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l89.4-89.3 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
      </svg>
    },
    {
      id: "tables",
      name: "Tables",
      slug: "/tables",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-full w-full"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 001-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 001 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"></path>
      </svg>
    },
    {
      id: "components",
      name: "Components",
      slug: "/components",
      new: false,
      icon: <svg
        fill="currentColor"
        stroke="currentColor"
        className="w-full h-full"
        strokeWidth="0"
        viewBox="0 0 512 512"
      >
        <path d="M128 256a128 128 0 10128 128 128 128 0 00-128-128zm379-54.86L400.07 18.29a37.26 37.26 0 00-64.14 0L229 201.14c-14.24 24.38 3.58 54.86 32.09 54.86h213.82c28.51 0 46.33-30.48 32.09-54.86zM480 288H320a32 32 0 00-32 32v160a32 32 0 0032 32h160a32 32 0 0032-32V320a32 32 0 00-32-32z"></path>
      </svg>
      // children: [
      //   {
      //     id: "button",
      //     name: "Button",
      //     slug: "button"
      //   },
      //   {
      //     id: "select",
      //     name: "Select",
      //     slug: "select"
      //   },
      //   {
      //     id: "card",
      //     name: "Card",
      //     slug: "card"
      //   },
      //   {
      //     id: "input",
      //     name: "Input",
      //     slug: "input"
      //   },
      //   {
      //     id: "headings",
      //     name: "Headings",
      //     slug: "headings"
      //   },
      //   {
      //     id: "typography",
      //     name: "Typography",
      //     slug: "typography"
      //   },
      // ]
    }
  ]
}

export { dashboardSettings }
