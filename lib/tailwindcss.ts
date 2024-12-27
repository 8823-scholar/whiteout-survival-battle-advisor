import classNames, { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

export function twClassNames(...classes: ArgumentArray): string {
  return twMerge(classes.map((c) => classNames(c)));
}
