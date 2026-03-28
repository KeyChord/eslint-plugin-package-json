// Adapted from https://github.com/michaelfaith/eslint-plugin-package-json/blob/main/src/rules/require-properties.ts
import {
	type CreateRequirePropertyRuleOptions,
	createSimpleRequirePropertyRule,
} from "../utils/property.js";

export const rule = createSimpleRequirePropertyRule('type', {
  fixValue: "module", isRecommended: true
}).rule;
