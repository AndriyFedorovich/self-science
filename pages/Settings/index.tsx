import React from 'react';
import { getDashboardLayout } from 'layouts/DashboardLayout';
import Settings from 'screens/Settings';

const PageSettings = () => <Settings />;

PageSettings.getLayout = getDashboardLayout;

export default PageSettings;
