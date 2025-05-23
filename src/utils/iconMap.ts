import {
  AccessibilityOutline,
  BarbellOutline,
  BarChartOutline,
  BasketOutline,
  BookOutline,
  BriefcaseOutline,
  BrushOutline,
  CameraOutline,
  CarOutline,
  ChatbubbleOutline,
  CloudOutline,
  ConstructOutline,
  DiceOutline,
  EyedropOutline,
  FastFoodOutline,
  FishOutline,
  FitnessOutline,
  FlagOutline,
  FlameOutline,
  GameControllerOutline,
  GlassesOutline,
  GlobeOutline,
  HammerOutline,
  HeartOutline,
  HomeOutline,
  ImagesOutline,
  LanguageOutline,
  LaptopOutline,
  LockClosedOutline,
  LogoFacebook,
  LogoInstagram,
  MailOutline,
  MapOutline,
  MedkitOutline,
  MusicalNotesOutline,
  NotificationsOutline,
  PawOutline,
  PeopleOutline,
  PersonOutline,
  PhonePortraitOutline,
  PlayOutline,
  PricetagsOutline,
  ReaderOutline,
  RefreshOutline,
  RoseOutline,
  SaveOutline,
  SearchOutline,
  SendOutline,
  SettingsOutline,
  ShareOutline,
  StarOutline,
  StorefrontOutline,
  TrashOutline,
  WarningOutline,
} from "react-ionicons";

const iconMap: Record<
  string,
  React.FC<{ color?: string; width?: string; height?: string }>
> = {
  flag: FlagOutline,
  "bar-chart": BarChartOutline,
  "paint-brush": BrushOutline,
  "logo-instagram": LogoInstagram,
  "logo-facebook": LogoFacebook,
  home: HomeOutline,
  settings: SettingsOutline,
  search: SearchOutline,
  heart: HeartOutline,
  star: StarOutline,
  camera: CameraOutline,
  chatbubble: ChatbubbleOutline,
  cloud: CloudOutline,
  globe: GlobeOutline,
  "lock-closed": LockClosedOutline,
  mail: MailOutline,
  map: MapOutline,
  notifications: NotificationsOutline,
  person: PersonOutline,
  "phone-portrait": PhonePortraitOutline,
  play: PlayOutline,
  refresh: RefreshOutline,
  save: SaveOutline,
  send: SendOutline,
  share: ShareOutline,
  trash: TrashOutline,
  warning: WarningOutline,
  "laptop-outline": LaptopOutline,
  "car-outline": CarOutline,
  "hammer-outline": HammerOutline,
  "fitness-outline": FitnessOutline,
  "accessibility-outline": AccessibilityOutline,
  "pricetags-outline": PricetagsOutline,
  "fast-food-outline": FastFoodOutline,
  "book-outline": BookOutline,
  "briefcase-outline": BriefcaseOutline,
  "language-outline": LanguageOutline,
  "fish-outline": FishOutline,
  "dice-outline": DiceOutline,
  "medkit-outline": MedkitOutline,
  "images-outline": ImagesOutline,
  "people-outline": PeopleOutline,
  "basket-outline": BasketOutline,
  "glasses-outline": GlassesOutline,
  "barbell-outline": BarbellOutline,
  "eyedrop-outline": EyedropOutline,
  "paw-outline": PawOutline,
  "storefront-outline": StorefrontOutline,
  "rose-outline": RoseOutline,
  "reader-outline": ReaderOutline,
  "flame-outline": FlameOutline,
  "musical-notes-outline": MusicalNotesOutline,
  "game-controller-outline": GameControllerOutline,
  "construct-outline": ConstructOutline,
};

export default iconMap;
