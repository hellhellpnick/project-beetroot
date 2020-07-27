<template>
  <div>
    <div class="main-menu">
      <div class="main-menu-form">
        <div class="main-menu-btn">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <div class="main-menu-content">
        <!-- main logo -->
        <div class="main-menu-logo">
          <h2>Everything will be fine at the end of watching</h2>
        </div>
        <!-- navigation -->
        <ul class="main-menu-nav">
          <li>
            <router-link class="navigation-links" to="/">
              <i class="fa fa-home fa-fw"></i>&nbsp;
              Home
            </router-link>
          </li>
          <li>
            <router-link href="#" class="navigation-links" to="/about">
              <i class="fa fa-users fa-fw"></i>&nbsp; About
            </router-link>
          </li>
          <li>
            <router-link class="navigation-links" href="#" to="/movies">
              <svg class="navigation-links__svg">
                <use xlink:href="#video" />
              </svg> Movies
            </router-link>
          </li>
        </ul>

        <a href="#" class="main-menu-close">
          <i class="fa fa-close"></i>&nbsp; Close menu
        </a>
        <p class="text-menu">TM & &copy; 2020 hellpnick.</p>
        <p class="text-menu">All right reserved.</p>
      </div>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
.text-menu {
  @include text($H50, 500, $white);
  text-align: left;
  margin-left: 15px;
  margin-top: 40px;
  &:last-child {
    margin-top: 10px;
  }
}
.navigation-links {
  @include text($H50, 500, $white);
  font-family: $base-font;
  text-transform: capitalize;
  margin-bottom: 5px;
  opacity: 0;
  @include media {
    &:hover svg {
      fill: $blue;
    }
    &:hover i {
      color: $blue;
    }
  }
  &__svg {
    @include svg(20px, $white);
    margin-right: 7px;
    transition: all 0.2s ease;
  }
}
.main-menu.open .navigation-links {
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in 0.3s;
  -moz-transition: opacity 0.5s ease-in 0.3s;
  transition: opacity 0.5s ease-in 0.3s;
}
.main-menu {
  float: left;
  position: fixed;
  font-family: $base-font;
  min-height: 100%;
  width: 475px;
  z-index: 1000;
  -webkit-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -moz-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  transform-origin: 100% 0;

  -webkit-transform: translate(-336px, 0);
  -moz-transform: translate(-336px, 0);
  transform: translate(-336px, 0);
}
.main-menu.open {
  -webkit-transform: translate(0, 0) skew(0);
  -moz-transform: translate(0, 0) skew(0);
  transform: translate(0, 0) skew(0);
}
.main-menu.open .main-menu-form {
  -webkit-transform: skewX(-25deg);
  -moz-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
.main-menu.open .main-menu-form:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: $blue;
  box-shadow: 0px 0px 6px 1px rgba($blue, 0.7);
}
.main-menu-form {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1001;
  -webkit-transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -moz-transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);

  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  transform-origin: 100% 0;

  -webkit-transform: skewX(-38deg);
  -moz-transform: skewX(-38deg);
  transform: skewX(-38deg);
}

.main-menu.open .main-menu-btn {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0s, visibility 0s;
  -moz-transition: opacity 0s, visibility 0s;
  transition: opacity 0s, visibility 0s;
}

/*main menu content*/
.main-menu-content {
  position: relative;
  padding: 35px 55px 35px 25px;
  display: none;
}
.main-menu.open .main-menu-content {
  z-index: 1002;
  display: block;
}
.main-menu-logo h2 {
  @include text($H300, 500, $white);
  opacity: 0;
  text-align: left;
  letter-spacing: 1.5px;
  font-family: $base-font;
}
.main-menu.open .main-menu-logo h2 {
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in 0.3s;
  -moz-transition: opacity 0.5s ease-in 0.3s;
  transition: opacity 0.5s ease-in 0.3s;
}
.main-menu-nav {
  list-style: none;
  margin-top: 35px;
  @include flex(flex-start, flex-start, column);
}

.main-menu.open .main-menu-nav a {
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-transition: color 0.2s ease-in-out 0s, opacity 0.3s ease,
    transform 0.3s ease;
  -moz-transition: color 0.2s ease-in-out 0s, opacity 0.3s ease,
    transform 0.3s ease;
  transition: color 0.2s ease-in-out 0s, opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
}
.main-menu-nav a {
  opacity: 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  color: $blue;
  -webkit-transform: translate(0, 100%);
  -moz-transform: translate(0, 100%);
  transform: translate(0, 100%);
}
.main-menu-nav i {
  color: #fff;
  margin-right: 5px;
  -webkit-transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}
.main-menu.open .main-menu-nav a:hover {
  color: $blue;
  /*i don't care*/
  -webkit-transition-delay: 0s !important;
  -moz-transition-delay: 0s !important;
  transition-delay: 0s !important;
}

/*toggle button*/
.main-menu-btn {
  position: absolute;
  z-index: 100;
  width: 40px;
  height: 40px;
  top: 38px;
  right: 39px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border: 2px solid #aeb6bf;
  -webkit-transition: opacity 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
    visibility 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  -moz-transition: opacity 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
    visibility 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition: opacity 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
    visibility 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);

  -webkit-transform: skew(38deg) rotate(38deg);
  -moz-transform: skew(38deg) rotate(38deg);
  transform: skew(38deg) rotate(38deg);
}
.main-menu-btn i {
  -webkit-transform: rotate(-38deg);
  -moz-transform: rotate(-38deg);
  transform: rotate(-38deg);
  color: #aeb6bf;
}
.main-menu-btn:hover i {
  color: $blue;
}

/*close button*/
.main-menu.open .main-menu-close {
  opacity: 1;
  -webkit-transition: color 0.2s ease, opacity 1s ease 1s,
    transform 0.3s ease 1s;
  -moz-transition: color 0.2s ease, opacity 1s ease 1s, transform 0.3s ease 1s;
  transition: color 0.2s ease, opacity 1s ease 1s, transform 0.3s ease 1s;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  transform: translate(0, 0);
}
.main-menu-close {
  opacity: 0;
  display: inline-block;
  margin-top: 65px;
  margin-left: -285px;
  font-size: 18px;
  color: #bdc3c7;
  -webkit-transform: translate(0, 100%);
  -moz-transform: translate(0, 100%);
  transform: translate(0, 100%);
}
.main-menu-close:hover {
  color: $blue;
}
</style>
