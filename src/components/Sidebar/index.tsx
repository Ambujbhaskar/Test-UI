import React, { useState, useRef, MouseEvent } from 'react';
import "./sidebar.css";
import settingsIcon from "../../../public/gear-six.svg";
import userIcon from "../../../public/user-circle.svg";
import folderIcon from "../../../public/folder-open.svg";
import SidebarIcon from './SidebarIcon';
import { getRemSize, handleMouseDown } from './helpers';

const Sidebar: React.FC = () => {
	const [size, setSize] = useState<{ width: number }>({ width: 20 * getRemSize() });
	const [page, setPage] = useState<string>('folder');
	const divRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={divRef}
			style={{
				width: size.width,
				maxWidth: '20rem',
			}}
			className='resizable'
		>
			<span className='left-col'>
				<div className='icons-container'>
					<SidebarIcon
						icon={folderIcon}
						page={page}
						setPage={setPage}
						activePage="folder"
					/>
				</div>
				<div className='icons-container'>
					<SidebarIcon
						icon={userIcon}
						page={page}
						setPage={setPage}
						activePage="profile"
					/>
					<SidebarIcon
						icon={settingsIcon}
						page={page}
						setPage={setPage}
						activePage="settings"
					/>
				</div>
			</span>
			<span className='right-col'>
				{page.toLocaleUpperCase()}
			</span>
			<span
				className='trigger'
				onMouseDown={(e: MouseEvent) => handleMouseDown(e as any, divRef, setSize)}
			>
			</span>
		</div>
	);
};

export default Sidebar;
