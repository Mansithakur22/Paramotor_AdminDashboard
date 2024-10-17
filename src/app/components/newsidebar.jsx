"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  ListItemIcon,
  ListSubheader,
  Avatar,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  SpaceDashboard as SpaceDashboardIcon,
  PeopleAlt as PeopleAltIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Article as ArticleIcon,
  Contacts as ContactsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function DashboardLayoutNavigationNested({children}) {
  const base_url=`localhost:3000`
  // const { window } = props;

  // const [pathname, setPathname] = React.useState("/movies/lord-of-the-rings");

  // const router = React.useMemo(() => {
  //   return {
  //     pathname,
  //     searchParams: new URLSearchParams(),
  //     navigate: (path) => setPathname(String(path)),
  //   };
  // }, [pathname]);

  // Remove this const when copying and pasting into your project.
  // const demoWindow = window !== undefined ? window() : undefined;

  const router = useRouter(); // Use the useRouter hook from next/router

  const handleNavigation = (segment) => {
    router.push(segment); // Use router.push to navigate to the selected route
  };

  return (
    // preview-start
    <AppProvider
      navigation={[
        { title: "Dashboard", icon: <PeopleAltIcon />, segment: `dashboard` },
        {
          title: "Products",
          icon: <WorkIcon />,
          children: [
            { title: "Add New Product", segment: `${base_url}/products/addProduct` },
            { title: "All Products", segment: `${base_url}/products/allProduct` },
          ],
        },
        {
          title: "Partners",
          icon: <PeopleAltIcon />,
          children: [
            { title: "Add New Partner", segment: `${base_url}/partners/addNewPartner`, },
            { title: "All Partner", segment: `${base_url}/partners/allPartner` },
          ],
        },
        {
          title: "Home Page",
          icon: <HomeIcon />,
          segment: "homepage",
          
        },
        {
          title: "About Page",
          icon: <InfoIcon />,
          children: [
            {
              title: "Manage About Content",
              segment: `${base_url}/aboutpage/manageAboutContent`,
            },
            {
              title: "Manage Testimonials",
              segment: `${base_url}/aboutpage/manageTestimonials`,
            },
            { title: "Manage Gallery", segment: `${base_url}/aboutpage/manageGallery` },
          ],
        },
        {
          title: "Company",
          icon: <WorkIcon />,
          children: [
            { title: "Manage Team", segment: `${base_url}/company/manageTeam` },
            { title: "Manage Career", segment: `${base_url}/company/manageCareer` },
            { title: "Manage Press", segment: `${base_url}/company/managePress` },
          ],
        },
        {
          title: "Blog",
          icon: <ArticleIcon />,
          children: [
            { title: "Add New Blog", segment: `${base_url}/blog/addNewBlog` },
            { title: "All Blogs", segment: `${base_url}/blog/allBlogs` },
          ],
        },
        {
          title: "General Content",
          icon: <WorkIcon />,
          children: [
            { title: "Add New Page", segment: `${base_url}/generalContent/addNewPage` },
            { title: "All Pages", segment: `${base_url}/generalContent/allPages` },
          ],
        },
        {
          title: "Contact Page",
          icon: <ContactsIcon />,
          segment: `contactPage`,
        },
        {
          title: "Website General Settings",
          icon: <SettingsIcon />,
          children: [
            {
              title: "Basic Information",
              segment: `${base_url}/websiteGeneralSetting/basicInformation`,
            },
            {
              title: "Menu Builder",
              segment: `${base_url}/websiteGeneralSetting/menuBuilder`,
            },
            {
              title: "Social Links",
              segment: `${base_url}/websiteGeneralSetting/socialLinks`,
            },
            {
              title: "Footer Info",
              segment: `${base_url}/websiteGeneralSetting/footerInfo`,
            },
            {
              title: "Email Configuration",
              segment: `${base_url}/websiteGeneralSetting/emailConfiguration`,
            },
          ],
        },
      ]}
      // router={router}
      theme={demoTheme}
      // window={demoWindow}
    >
      <DashboardLayout>
       {children}
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutNavigationNested.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutNavigationNested;
