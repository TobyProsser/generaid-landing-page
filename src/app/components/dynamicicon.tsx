import React from "react";
import iconMap from "../../utils/iconMap";

interface DynamicIconProps {
  iconName: string;
  size?: number;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = 40 }) => {
  const IconComponent = iconMap[iconName];

  return IconComponent ? (
    <IconComponent color="white" width={`${size}px`} height={`${size}px`} />
  ) : (
    <p>Icon not found</p>
  );
};

export default DynamicIcon;
