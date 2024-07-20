import chroma from "chroma-js";

/**
 *
 * @colors
 * Order of colors should be from high to low. i.e on a Scale of 1, color at index 0 will be show and on Scale 0 color at last index will be shown
 *
 * @scale
 * Scale value lies in the range from 0 to 1, both inclusive
 *
 */
export default function ColorTransition({
  content,
  colors,
  scale
}: {
  content: string | number;
  colors: string[];
  scale: number /** This function returns the current user */;
}) {
  const colorBlend = chroma.scale(colors)(scale).hex();
  return <span style={{ color: colorBlend }}>{content}</span>;
}
