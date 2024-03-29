import MainAdminPage from "../../pages/admin/MainAdminPage";
import OrderAdminPage from "../../pages/admin/OrderAdminPage";
import ProductsAdminPage from "../../pages/admin/ProductsAdminPage";
// import ReviewAdminPage from "../../pages/admin/ReviewAdminPage";
import SettingsAdminPage from "../../pages/admin/SettingsAdminPage";
import UsersAdminPage from "../../pages/admin/UsersAdminPage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const items = [
  {
    title: "Головна",
    path: "main",
    content: <MainAdminPage />,
    icon: <HomeOutlinedIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    title: "Товари",
    path: "products",
    content: <ProductsAdminPage />,
    icon: <LayersOutlinedIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    title: "Замовлення",
    path: "order",
    content: <OrderAdminPage />,
    icon: <CheckBoxOutlinedIcon sx={{ width: 24, height: 24 }} />,
  },
  // {
  //   title: "Відгуки",
  //   path: "reviews",
  //   content: <ReviewAdminPage />,
  //   icon: <FlagOutlinedIcon sx={{ width: 24, height: 24 }} />,
  // },
  {
    title: "Користувачі",
    path: "users",
    content: <UsersAdminPage />,
    icon: <PeopleAltOutlinedIcon sx={{ width: 24, height: 24 }} />,
  },
  {
    title: "Налаштування",
    path: "settings",
    content: <SettingsAdminPage />,
    icon: <SettingsOutlinedIcon sx={{ width: 24, height: 24 }} />,
  },
];
