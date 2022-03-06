// TODO: Typescript way...
export function getBgColor(color: string | null) {
  switch (color) {
    case "blue":
      return "bg-blue-100";

    case "red":
      return "bg-red-100";

    case "cyan":
      return "bg-cyan-100";

    case "orange":
      return "bg-orange-100";

    case "green":
      return "bg-green-100";

    case "pink":
      return "bg-pink-100";

    case "gray":
      return "bg-gray-100";

    case "purple":
      return "bg-purple-100";

    default:
      return "bg-white";
  }
}
