import React from "react";
import { useState } from "react";

import Hero from "./hero.jsx";

import Logo from "/svg/netflix-logo.svg";

function Header() {
	const [activePage, setActivePage] = useState(0);

	const handleNavItemClick = (index) => {
		setActivePage(index);
	};

	return (
		<header className="header">
			<div className="header__bar">
				<div className="header__bar-left">
					<img
						src={Logo}
						alt="Netflix Logo"
						className="header__logo"
					/>

					<nav>
						<ul className="header__nav-list">
							<li className="header__nav-item">
								<a
									href="#"
									className={`header__nav-link ${
										activePage === 0 ? "selected" : ""
									}`}
									onClick={() => handleNavItemClick(0)}
								>
									Home
								</a>
							</li>

							<li className="header__nav-item">
								<a
									href="#"
									className={`header__nav-link ${
										activePage === 1 ? "selected" : ""
									}`}
									onClick={() => handleNavItemClick(1)}
								>
									Shows
								</a>
							</li>

							<li className="header__nav-item">
								<a
									href="#"
									className={`header__nav-link ${
										activePage === 2 ? "selected" : ""
									}`}
									onClick={() => handleNavItemClick(2)}
								>
									Movies
								</a>
							</li>

							<li className="header__nav-item">
								<a
									href="#"
									className={`header__nav-link ${
										activePage === 3 ? "selected" : ""
									}`}
									onClick={() => handleNavItemClick(3)}
								>
									Popular
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="header__bar-right">
					<span className="header__search">
						<button
							className="header__search-btn btn"
							aria-label="Search"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="header__search-icon"
								data-name="MagnifyingGlass"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
					</span>

					<span className="header__notifications">
						<button
							className="header__notifications-btn btn"
							aria-label="Notificações"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="header__notifications-icon"
								data-name="Bell"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
									fill="#fff"
								></path>
							</svg>
						</button>
					</span>

					<span className="header__profile">
						<button
							className="header__profile-btn btn"
							aria-label="Perfil"
						>
							<img
								src="/images/profile/user-img.png"
								alt="Profile"
								className="header__profile-img"
							/>
						</button>

						<svg
							id="Triangle_24"
							width="8"
							height="8"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							className="header__profile-icon"
						>
							<rect
								width="24"
								height="24"
								stroke="none"
								fill="#fff"
								opacity="0"
							/>

							<g transform="matrix(0.5 0 0 0.5 12 12)">
								<path
									transform=" translate(-24, -23.2)"
									d="M 40.394 41 L 7.606 41 C 6.303 41 5.1370000000000005 40.326 4.486 39.198 C 3.834999999999999 38.07 3.835 36.722 4.486 35.594 L 20.88 7.2 L 20.88 7.2 C 21.531 6.072 22.697 5.399 24 5.399 C 25.303 5.399 26.469 6.072 27.12 7.2 L 43.513999999999996 35.595 C 44.165 36.723 44.165 38.071 43.513999999999996 39.199 C 42.86299999999999 40.327 41.696 41 40.394 41 z"
									strokeLinecap="round"
								/>
							</g>
						</svg>
					</span>
				</div>
			</div>

			<Hero />
		</header>
	);
}

export default Header;
