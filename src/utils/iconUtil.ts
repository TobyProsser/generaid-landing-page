import iconMap from "./iconMap"; // Import the centralized icon mapping

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName] || null;
};
