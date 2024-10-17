"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
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
// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'page',
//     title: 'Page',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'page-2',
//     title: 'Page 2',
//     icon: <TimelineIcon />,
//   },
// ];


const NAVIGATION = [
    { title: "Dashboard", icon: <SpaceDashboardIcon />, path: "/dashboard" },
    {
        title: "Products",
      icon: <WorkIcon />,
      subMenu: [
        { name: "Add New Product", path: "/products/addProduct" },
        { name: "All Products", path: "/products/allProduct" },
      ],
    },
    {
        title: "Partners",
      icon: <PeopleAltIcon />,
      subMenu: [
        { name: "Add New Partner", path: "/partners/addNewPartner" },
        { name: "All Partner", path: "/partners/allPartner" },
      ],
    },
    {
        title: "Home Page",
      icon: <HomeIcon />,
      path: "/homepage",
    },
    {
        title: "About Page",
      icon: <InfoIcon />,
      subMenu: [
        { title: "Manage About Content", path: "/aboutpage/manageAboutContent" },
        { title: "Manage Testimonials", path: "/aboutpage/manageTestimonials" },
        { title: "Manage Gallery", path: "/aboutpage/manageGallery" },
      ],
    },
    {
        title: "Company",
      icon: <WorkIcon />,
      subMenu: [
        { title: "Manage Team", path: "/company/manageTeam" },
        { title: "Manage Career", path: "/company/manageCareer" },
        { title: "Manage Press", path: "/company/managePress" },
      ],
    },
    {
        title: "Blog",
      icon: <ArticleIcon />,
      subMenu: [
        { title: "Add New Blog", path: "/blog/addNewBlog" },
        { title: "All Blogs", path: "/blog/allBlog" },
      ],
    },
    {
        title: "General Content",
      icon: <WorkIcon />,
      subMenu: [
        { title: "Add New Page", path: "/content/addNewPage" },
        { title: "All Pages", path: "/content/allPages" },
      ],
    },
    { title: "Contact Page", icon: <ContactsIcon />, path: "/contactPage" },
    {
        title: "Website General Settings",
      icon: <SettingsIcon />,
      subMenu: [
        { title: "Basic Information", path: "/websiteGeneralSetting/basicInformation" },
        { title: "Menu Builder", path: "/websiteGeneralSetting/menuBuilder" },
        { title: "Social Links", path: "/websiteGeneralSetting/socialLinks" },
        { title: "Footer Info", path: "/websiteGeneralSetting/footerInfo" },
        { title: "Email Configuration", path: "/websiteGeneralSetting/emailConfiguration" },
      ],
    },
  ];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
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

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Newsidebar(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/page');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

Newsidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Newsidebar;