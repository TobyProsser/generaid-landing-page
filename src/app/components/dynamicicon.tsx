import { CloseOutline } from "react-ionicons";
import iconMap from "../../utils/iconMap";

interface DynamicIconProps {
  iconName: string;
  size?: number;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = 40 }) => {
  const IconComponent = iconMap[iconName] || CloseOutline; // Use "X" if icon is missing

  return (
    <IconComponent color="white" width={`${size}px`} height={`${size}px`} />
  );
};

export default DynamicIcon;
