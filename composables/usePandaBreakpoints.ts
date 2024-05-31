import pandaPreset from "@pandacss/preset-panda";

/**
 *
 * Uses the vueuse `useBreakpoints` composable with the panda preset breakpoints.
 *
 */
export default function () {
  return useBreakpoints(pandaPreset.theme.breakpoints);
}
