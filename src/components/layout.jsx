'use client';

import {
  PeopleAlt as PeopleAltIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Work as WorkIcon,
  Article as ArticleIcon,
  Contacts as ContactsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { theme } from '@/theme';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import { useRouter } from 'next/navigation';

export function Layout({ children }) {
  const router = useRouter();
  return (
    <AppProvider
      navigation={[
        { title: 'Dashboard', icon: <PeopleAltIcon />, segment: 'dashboard' },
        {
          title: 'Products',
          segment: 'products',
          icon: <WorkIcon />,
          children: [
            { title: 'Add New Product', segment: 'addProduct' },
            { title: 'All Products', segment: 'allProduct' },
          ],
        },
        {
          title: 'Partners',
          segment: 'partners',
          icon: <PeopleAltIcon />,
          children: [
            { title: 'Add New Partner', segment: 'addNewPartner' },
            { title: 'All Partner', segment: 'allPartner' },
          ],
        },
        {
          title: 'Home Page',
          icon: <HomeIcon />,
          segment: 'homepage',
        },
        {
          title: 'About Page',
          segment: 'about',
          icon: <InfoIcon />,
          children: [
            {
              title: 'Manage About Content',
              segment: 'manageAboutContent',
            },
            {
              title: 'Manage Testimonials',
              segment: 'manageTestimonials',
            },
            { title: 'Manage Gallery', segment: 'manageGallery' },
          ],
        },
        {
          title: 'Company',
          segment: 'company',
          icon: <WorkIcon />,
          children: [
            { title: 'Manage Team', segment: 'manageTeam' },
            { title: 'Manage Career', segment: 'manageCareer' },
            { title: 'Manage Press', segment: 'managePress' },
          ],
        },
        {
          title: 'Blog',
          segment: 'blog',
          icon: <ArticleIcon />,
          children: [
            { title: 'Add New Blog', segment: 'addNewBlog' },
            { title: 'All Blogs', segment: 'allBlogs' },
          ],
        },
        {
          title: 'General Content',
          segment: 'generalContent',
          icon: <WorkIcon />,
          children: [
            { title: 'Add New Page', segment: 'addNewPage' },
            { title: 'All Pages', segment: 'allPages' },
          ],
        },
        {
          title: 'Contact Page',
          icon: <ContactsIcon />,
          segment: 'contactPage',
        },
        {
          title: 'Website General Settings',
          segment: 'websiteGeneralSetting',
          icon: <SettingsIcon />,
          children: [
            {
              title: 'Basic Information',
              segment: 'basicInformation',
            },
            {
              title: 'Menu Builder',
              segment: 'menuBuilder',
            },
            {
              title: 'Social Links',
              segment: 'socialLinks',
            },
            {
              title: 'Footer Info',
              segment: 'footerInfo',
            },
            {
              title: 'Email Configuration',
              segment: 'emailConfiguration',
            },
          ],
        },
      ]}
      theme={theme}
      router={{ navigate: (path) => router.push(path) }}
    >
      <DashboardLayout>{children}</DashboardLayout>
    </AppProvider>
  );
}
