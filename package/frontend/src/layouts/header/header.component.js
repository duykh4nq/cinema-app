import React from 'react';
import '../../assets/css/plugins.css';
import '../../assets/css/style.css';
import logo from '../../assets/images/logo1.png';

function HeaderComponent() {
	return (
		<header>
			<div class="container">
				<nav class=" navbar navbar-default navbar-custom">
					<div class="navbar-header logo">
						<div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<div id="nav-icon1">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<a href="index-2.html"><img class="logo" src={logo} alt="" width="119" height="58"></img></a>
					</div>
					<div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav flex-child-menu menu-left">
							<li class="hidden">
								<a href="#page-top"></a>
							</li>
							<li><a href="#">MOVIES</a></li>
							<li><a href="#">MOVIES SCHEDULE</a></li>
							<li><a href="#">THEATERS ADN PRICES</a></li>
							<li><a href="#">PROMOTION</a></li>
						</ul>
						<ul class="nav navbar-nav flex-child-menu menu-right">
							<li><a href="#">Help</a></li>
							<li class="loginLink"><a href="#">LOG In</a></li>
							<li class="btn signupLink"><a href="#">sign up</a></li>
						</ul>
					</div>
				</nav>

				<div class="top-search">
					<select>
						<option value="united">MOVIES SHOWING</option>
						<option value="saab">MOVIES MOST WATCHED</option>
					</select>
					<input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"></input>
				</div>
			</div>
		</header>
	);
}

export default HeaderComponent;