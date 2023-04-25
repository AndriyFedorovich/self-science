import React from 'react';
import { getDashboardLayout } from 'layouts/DashboardLayout';
import BrainExercises from 'screens/BrainExercises';

const PageBrainExercises = () => <BrainExercises />;

PageBrainExercises.getLayout = getDashboardLayout;

export default PageBrainExercises;
