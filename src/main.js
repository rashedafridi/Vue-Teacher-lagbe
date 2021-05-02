import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

//gloval UI component
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import LoadingSpinner from "./components/ui/LoadingSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", LoadingSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
