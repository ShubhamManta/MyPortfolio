import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slices/portfolioSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      portfolio: portfolioReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Selectors
export const selectPortfolio = (state: RootState) => state.portfolio;
export const selectProfile = (state: RootState) => state.portfolio.profile;
export const selectServices = (state: RootState) => state.portfolio.services;
export const selectTechStack = (state: RootState) => state.portfolio.techStack;
export const selectTestimonials = (state: RootState) => state.portfolio.testimonials;
export const selectFeaturedSkills = (state: RootState) => state.portfolio.featuredSkills;
export const selectSkills = (state: RootState) => state.portfolio.skills;
export const selectProjects = (state: RootState) => state.portfolio.projects;
export const selectExperience = (state: RootState) => state.portfolio.experience;
export const selectEducation = (state: RootState) => state.portfolio.education;
export const selectPortfolioLoading = (state: RootState) => state.portfolio.loading;
