import type { Rule } from "eslint";
import * as typeProperty from "./rules/type-property.js";

const plugin = {
    meta: { name: "@keychord/package-json" },
    rules: {
        "type": typeProperty.rule as Rule.RuleModule,
    },
};

export default plugin;
