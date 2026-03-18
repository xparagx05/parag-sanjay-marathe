import { ScrollSmoother } from "gsap/ScrollSmoother";

export let smoother: ScrollSmoother;

export function setSmoother(s: ScrollSmoother) {
  smoother = s;
}
