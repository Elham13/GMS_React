import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faIgloo,
    faReceipt,
    faShoppingBag,
    faUserCircle,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        title: "Dashboard",
        icon:  <FontAwesomeIcon icon={faIgloo} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: "/admin",
        label: "Dashboard"
    },
    {
        title: "Services",
        icon:  <FontAwesomeIcon icon={faUsers} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: "/services",
        label: "Services"
    },
    {
        title: "Projects",
        icon:  <FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: '',
        label: "Projects"
    },
    {
        title: "Orders",
        icon:  <FontAwesomeIcon icon={faShoppingBag} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: '',
        label: "Orders"
    },
    {
        title: "Inventory",
        icon:  <FontAwesomeIcon icon={faReceipt} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: '',
        label: "Inventory"
    },
    {
        title: "Accounts",
        icon:  <FontAwesomeIcon icon={faUserCircle} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: '',
        label: "Accounts"
    },
    {
        title: "Tasks",
        icon:  <FontAwesomeIcon icon={faClipboardList} className="adminIcon" style={{marginRight: '1rem', width: '20px'}} />,
        link: '',
        label: "Tasks"
    },
]