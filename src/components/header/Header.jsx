import React from "react";
import "./Header.css";
import html from "./html.js";

const Header = () => {
	return (
		<>
			<header className="header">Welcome to JavaScript</header>
			<div className="component_div">
				<div className="img">
					{/* <input type="HTML"  placeholder="HTML" className="input_html"/> */}
					<button className="button_html">
						<a href="./html.js" target="_blank">
							HTML
						</a>
					</button>

					<h1 className="text">Путь JavaScript</h1>
					{/* <img src={pach} alt="CSS" className="img_foto" /> */}
					<button className="button_css">
						<a href="link">CSS</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
