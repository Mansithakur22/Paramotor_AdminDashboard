// Sidebar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export const Sidebar = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleClick = (name) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const menuItems = [
    { name: "Dashboard", icon: <SpaceDashboardIcon />, path: "/dashboard" },
    {
      name: "Products",
      icon: <WorkIcon />,
      subMenu: [
        { name: "Add New Product", path: "/products/addProduct" },
        { name: "All Products", path: "/products/allProduct" },
      ],
    },
    {
      name: "Partners",
      icon: <PeopleAltIcon />,
      subMenu: [
        { name: "Add New Partner", path: "/partners/addNewPartner" },
        { name: "All Partner", path: "/partners/allPartner" },
      ],
    },
    {
      name: "Home Page",
      icon: <HomeIcon />,
      path: "/homepage",
    },
    {
      name: "About Page",
      icon: <InfoIcon />,
      subMenu: [
        { name: "Manage About Content", path: "/aboutpage/manageAboutContent" },
        { name: "Manage Testimonials", path: "/aboutpage/manageTestimonials" },
        { name: "Manage Gallery", path: "/aboutpage/manageGallery" },
      ],
    },
    {
      name: "Company",
      icon: <WorkIcon />,
      subMenu: [
        { name: "Manage Team", path: "/company/manageTeam" },
        { name: "Manage Career", path: "/company/manageCareer" },
        { name: "Manage Press", path: "/company/managePress" },
      ],
    },
    {
      name: "Blog",
      icon: <ArticleIcon />,
      subMenu: [
        { name: "Add New Blog", path: "/blog/addNewBlog" },
        { name: "All Blogs", path: "/blog/allBlog" },
      ],
    },
    {
      name: "General Content",
      icon: <WorkIcon />,
      subMenu: [
        { name: "Add New Page", path: "/content/addNewPage" },
        { name: "All Pages", path: "/content/allPages" },
      ],
    },
    { name: "Contact Page", icon: <ContactsIcon />, path: "/contactPage" },
    {
      name: "Website General Settings",
      icon: <SettingsIcon />,
      subMenu: [
        { name: "Basic Information", path: "/websiteGeneralSetting/basicInformation" },
        { name: "Menu Builder", path: "/websiteGeneralSetting/menuBuilder" },
        { name: "Social Links", path: "/websiteGeneralSetting/socialLinks" },
        { name: "Footer Info", path: "/websiteGeneralSetting/footerInfo" },
        { name: "Email Configuration", path: "/websiteGeneralSetting/emailConfiguration" },
      ],
    },
  ];

  return (
    <div className="w-60">
      <List
        subheader={
          <ListSubheader component="div" className="flex items-center p-2">
            <Avatar src="/logo.jpg" alt="Company Logo" className="mr-2" />
            <span className="font-bold">Paramotor</span>
          </ListSubheader>
        }
      >
        <Divider />
        {menuItems.map((item) => (
          <div key={item.name}>
            <ListItem
              button
              component={Link}
              href={item.path || "#"}
              onClick={() => item.subMenu && handleClick(item.name)}
              className={`hover:bg-gray-200 ${
                pathname.startsWith(item.path) ? "bg-gray-300" : ""
              }`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.subMenu ? (
                openSubMenu[item.name] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {item.subMenu && (
              <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenu.map((subItem) => (
                    <ListItem
                      button
                      component={Link}
                      href={subItem.path}
                      key={subItem.name}
                      className={`pl-8 hover:bg-gray-200 ${
                        pathname.startsWith(subItem.path) ? "bg-gray-300" : ""
                      }`}
                    >
                      <ListItemText primary={subItem.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
      <Divider />
    </div>
  );
};
