import { withPluginApi } from "discourse/lib/plugin-api";
import RawHtml from "discourse/widgets/raw-html";

function attachMainAgentBlock(api) {
  api.decorateWidget("post-meta-data:after", dec => {
    const attrs = dec.attrs;

    const currentUser = api.getCurrentUser();
    if (currentUser && attrs.userCustomFields) {
      return [
        dec.h("hr"),
        dec.h(
          "div",
          new RawHtml({
            html: `<div class='post-user-main-agent'><span class='post-user-main-agent-title'>${attrs.userCustomFields.user_field_1}</span></div>`
          })
        )
      ];
    }
  });
}

export default {
  name: "extend-for-post-user-agent",
  initialize(container) {
    withPluginApi("0.1", api => attachMainAgentBlock(api));
  }
};
