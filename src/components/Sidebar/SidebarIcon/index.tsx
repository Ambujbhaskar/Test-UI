import "./sidebar-icon.css";

const SidebarIcon = (props: {
    icon: string;
    page: string;
    setPage: (page: string) => void;
    activePage: string;
}) => {
    const onIconClick = () => {
        props.setPage(props.activePage);
    }
    return (
        <img
            className={`sidebar-icon ${props.page === props.activePage ? "sidebar-icon--active" : ""}`}
            src={props.icon}
            alt={props.activePage}
            onClick={onIconClick}
        />
    );
};

export default SidebarIcon;