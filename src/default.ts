import * as typeProperty from "./rules/type-property.js";

const plugin = {
    meta: { name: "oxlint-plugin-keychord" },
    rules: {
        "type": typeProperty.rule,
    },
};

export default plugin;
