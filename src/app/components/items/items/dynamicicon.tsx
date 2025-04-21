import * as Ionicons from "react-ionicons";

interface DynamicIconProps {
  iconName: keyof typeof Ionicons;
  size?: number; // Default size option
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = 40 }) => {
  const IconComponent = Ionicons[iconName];

  return IconComponent ? (
    <IconComponent color="white" width={`${size}px`} height={`${size}px`} />
  ) : (
    <p>Icon not found</p>
  );
};

export default DynamicIcon;
