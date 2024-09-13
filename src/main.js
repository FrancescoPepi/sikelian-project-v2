import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
// ADD PRIMEVUE COMPONENTS UI
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import "./main.css";
import App from "./App.vue";

// COMPONENT UI PRIMEVUE
import Button from "primevue/button";
import Divider from "primevue/divider";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import Badge from "primevue/badge";
import OverlayBadge from "primevue/overlaybadge";
import Chip from "primevue/chip";
// import AnimateOnScroll from "primevue/animateonscroll";

// FONTAWSOME
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMagnifyingGlass,
  faHouse,
  faNewspaper,
  faLandmarkDome,
  faMasksTheater,
  faEarthAmericas,
  faAward,
  faUtensils,
  faBookOpen,
  faAngleDown,
  faAngleUp,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
//   faCircle as faCircleS,
//   faPhone,
//   faLink,
//   faLayerGroup,
import {
  //   faFacebookF,
  //   faTwitter,
  faYoutube,
  //   faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faNewspaper as faNews,
  //   faCircle as faCircleR,
  //   faCopyright,
  //   faEnvelope,
  //   faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faAngleDown,
  faAngleRight,
  faAngleUp,
  faNews,
  faBookOpen,
  faMagnifyingGlass,
  faNewspaper,
  faLandmarkDome,
  faMasksTheater,
  faEarthAmericas,
  faAward,
  faUtensils,
  //   faCircleS,
  //   faCircleR,
  //   faCopyright,
  //   faFacebookF,
  //   faTwitter,
  faYoutube,
  //   faInstagram,
  //   faPhone,
  faHouse
);
//   faLink,
//   faEnvelope,
//   faCircleRight,
//   faLayerGroup

const app = createApp(App);
// app.directive("animateonscroll", AnimateOnScroll);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(MotionPlugin);
app.component("Button", Button);
app.component("Chip", Chip);
app.component("Card", Card);
app.component("Divider", Divider);
app.component("Badge", Badge);
app.component("OverlayBadge", OverlayBadge);
app.component("IconField", IconField);
app.component("Carousel", Carousel);
app.component("InputIcon", InputIcon);
app.component("Avatar", Avatar);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
