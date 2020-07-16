<template>
  <div>
    <div class="nav" id="nav">
      <div class="menu-container">
        <input type="checkbox" id="openmenu" class="hamburger-checkbox" />
        <div class="hamburger">
          <label for="openmenu" id="hamburger-label">
            <span class="hamburger__item"></span>
            <span class="hamburger__item"></span>
            <span class="hamburger__item"></span>
          </label>
        </div>
        <div class="menu-pane">
          <nav>
            <ul class="navigation">
              <li class="navigation__item">
                <router-link class="navigation__links" to="/">Home</router-link>
              </li>

              <li class="navigation__item">
                <router-link class="navigation__links" to="/about">About me</router-link>
              </li>
              <li class="navigation__item">
                <router-link class="navigation__links" to="/movie">Movie</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
.hamburger {
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 5px;
  left: 15px;
  padding-bottom: 2vh;
  &__item {
    cursor: pointer;
    height: 4px;
    width: 30px;
    border-radius: 5px;
    background-color: $white;
    display: block;
    margin: 7px 0;
    transition: 0.7s ease-in-out;
    transform: none;
  }
}
.hamburger-checkbox {
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 5px;
  left: 15px;
  width: 30px;
  opacity: 0;
  height: 40px;
}
.menu-pane {
  z-index: 1;
  background-color: rgba(#000, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

#openmenu:checked ~ .menu-pane {
  left: 0;
  transition: all 0.6s ease-in-out;
}

#openmenu:checked ~ .hamburger span:nth-of-type(1) {
  transform: translate(0%, 225%) rotate(-45deg);
  background-color: white;
  border-radius: 0;
}

#openmenu:checked ~ .hamburger span:nth-of-type(2) {
  transform: rotate(45deg);
  background-color: white;
  border-radius: 0;
}

#openmenu:checked ~ .hamburger span:nth-of-type(3) {
  opacity: 0;
  background-color: white;
  width: 0;
}

#openmenu:checked ~ .menu-pane {
  visibility: visible;
  opacity: 1;
  width: 35%;
  transition: all 0.6s ease-in-out;
  @include media {
    width: 25%;
  }
}

.navigation {
  padding-top: 50px;
  list-style: none;
  @include flex(flex-start, stretch, column);
  transition: all 0.6s ease-in-out;
  &__item {
    text-align: left;
    width: 100%;
  }
  &__links {
    display: block;
    cursor: pointer;
    max-width: 100%;
    padding: 20px 0;
    padding-left: 20px;
    @include text($H200, 400, #c9c9c9);
    text-decoration: none;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 1.5px;
    transition: all 0.2s ease;
    border-bottom: 1px solid $link;
    background-color: rgba($text-about, 0.1);

    @include media {
      &:hover {
        color: $white !important;
      }
    }
    &.router-link-exact-active {
      background-color: rgba(#000, 0.1);
      border: none;
      color: #c9c9c9;
    }
  }
}

.nav {
  transition: all 0.6s ease-in-out;
  position: fixed;
  z-index: 10;
  padding: 25px 30px;
  background-color: rgba(#000, 0.8);
  width: 40px;
}
</style>
