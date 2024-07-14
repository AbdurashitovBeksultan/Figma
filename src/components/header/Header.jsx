import React from "react";
import "./Header.css";
import path from "../../assets/png/Path 3.png";
import pach from "../../assets/png/Path 4.png";
import Placeholder from "react-placeholder";

const Header = () => {
	return (
		<>
			<header className="header">Welcome to JavaScript</header>
			<div className="component_div">
				<Placeholder
					type="media"
					mediaStyle={{ width: 100, height: 100 }} 
					ready={!path}
				>
					{/* <img src={path} alt="HTML" className="img_foto" /> */}
				</Placeholder>
				<div className="img">
					<img src={path} alt="HTML" className="img_foto" />
					<h1 className="text">Путь Javascript</h1>
					<img src={pach} alt="CSS" className="img_foto" />
				</div>
			</div>
		</>
	);
};

export default Header;
