const Colors: Record<string, string> = {
  blue: "bg-blue-100",
  red: "bg-red-100",
  cyan: "bg-cyan-100",
  orange: "bg-orange-100",
  green: "bg-green-100",
  pink: "bg-pink-100",
  gray: "bg-gray-100",
  purple: "bg-purple-100",
  white: "bg-white",
};

export function getBgColor(color: string | null) {
  return Colors[color || "white"];
}
