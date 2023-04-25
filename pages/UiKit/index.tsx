import React from 'react';
import { getDashboardLayout } from 'layouts/DashboardLayout';
import UiKit from 'screens/UiKit';

const PageUiKit = () => <UiKit />;

PageUiKit.getLayout = getDashboardLayout;

export default PageUiKit;
