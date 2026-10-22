# Testing Checklist for Record Onboarding Application

Use this checklist to verify all features are working correctly.

## ✅ Pre-Testing Setup

- [ ] MongoDB is running (local or Atlas)
- [ ] Backend dependencies installed (`cd server && npm install`)
- [ ] Frontend dependencies installed (`cd client && npm install`)
- [ ] `server/.env` file exists with correct MongoDB URI
- [ ] Backend server is running (`cd server && npm run dev`)
- [ ] Frontend server is running (`cd client && npm run dev`)
- [ ] Browser opened to http://localhost:5173

## ✅ Authentication Tests

### Sign Up Page
- [ ] Page loads at http://localhost:5173/signup
- [ ] Blue background with white centered card is displayed
- [ ] Email and Password input fields are visible
- [ ] Pink "SIGN UP" button is visible
- [ ] Social icons (G, f, in) are displayed
- [ ] "Already a user? LOGIN" link is visible
- [ ] Empty form submission shows error
- [ ] Invalid email format shows error
- [ ] Password less than 6 characters shows error
- [ ] Valid signup creates account successfully
- [ ] Success message is displayed
- [ ] Redirects to Login page after successful signup
- [ ] Duplicate email shows "Email already registered" error

### Login Page
- [ ] Page loads at http://localhost:5173/login
- [ ] Similar design to signup page
- [ ] Email and Password input fields are visible
- [ ] "Remember me?" checkbox is visible
- [ ] "Forgot Password?" link is visible
- [ ] Pink "LOGIN" button is visible
- [ ] Social icons are displayed
- [ ] "Need an account? SIGN UP" link is visible
- [ ] Empty form submission shows error
- [ ] Invalid credentials show "Invalid email or password" error
- [ ] Valid login succeeds
- [ ] Redirects to Step 1 for new users
- [ ] Redirects to Dashboard for users who completed onboarding

## ✅ Onboarding Flow Tests

### Step 1 - Personal Information
- [ ] Progress bar shows Step 1
- [ ] "It's your time!" heading is displayed
- [ ] All input fields are visible:
  - [ ] Your Name
  - [ ] Your Username
  - [ ] recordlive.com/username
  - [ ] What best describes you?
  - [ ] Select your location (dropdown)
  - [ ] How do you know us? (dropdown)
- [ ] Continue button is visible in bottom bar
- [ ] Cannot proceed without filling required fields
- [ ] Filling all fields and clicking Continue saves data
- [ ] Redirects to Step 2

### Step 2 - Goals Selection
- [ ] Progress bar shows Step 2
- [ ] "Hey [name] 👋" greeting is displayed with user's name
- [ ] Goal options are displayed as checkboxes:
  - [ ] Build my Skill Repository
  - [ ] Get a Good Job
  - [ ] Upskill for Current Role
  - [ ] Explore New Skills
  - [ ] Make Learning a Habit
  - [ ] Others
- [ ] Multiple goals can be selected
- [ ] Back button is visible
- [ ] Continue button is visible
- [ ] Clicking Back returns to Step 1 with data preserved
- [ ] Cannot proceed without selecting at least one goal
- [ ] Clicking Continue saves selections
- [ ] Redirects to Step 3

### Step 3 - Information Screen
- [ ] Progress bar shows Step 3
- [ ] "You bring the curiosity. We'll do with proof." heading visible
- [ ] Four benefit points with checkmarks are displayed
- [ ] Dark blue/navy panel on the right side
- [ ] "Trusted by" section at bottom
- [ ] Back button works
- [ ] Continue button works
- [ ] Redirects to Step 4

### Step 4 - Skills Selection (Initial)
- [ ] Progress bar shows Step 4
- [ ] "What's your Interest?" heading is displayed
- [ ] Search input field is visible
- [ ] Skill categories (Business, Design) are displayed
- [ ] Skill chips/buttons are clickable
- [ ] Selected skills change color (blue background)
- [ ] Multiple skills can be selected
- [ ] Search filters skills correctly
- [ ] Selected skill count is displayed
- [ ] Back button preserves previous step data
- [ ] Cannot proceed without selecting at least one skill
- [ ] Continue saves selections
- [ ] Redirects to Step 5

### Step 5 - Skills Review
- [ ] Progress bar shows Step 5
- [ ] "What's your Interest?" heading is displayed
- [ ] "Selected Skills" section shows previously selected skills
- [ ] Selected skills have orange/highlighted background
- [ ] Can add more skills from categories
- [ ] Can remove skills by clicking them again
- [ ] Search functionality works
- [ ] Back button works
- [ ] Continue saves updated selections
- [ ] Redirects to Step 6

### Step 6 - Profile Setup
- [ ] Progress bar shows Step 6
- [ ] "Set your profile" heading is displayed
- [ ] Circular profile picture placeholder is visible
- [ ] "Upload Photo" button is visible
- [ ] File upload works (shows feedback)
- [ ] Job search radio options are displayed:
  - [ ] "Yes, actively looking for a job"
  - [ ] "No, I'm not looking"
- [ ] Must select one job status option
- [ ] Back button works
- [ ] Continue button triggers final submission
- [ ] Redirects to Dashboard

## ✅ Dashboard Tests

### Dashboard Display
- [ ] Dashboard loads at http://localhost:5173/dashboard
- [ ] Sidebar navigation is visible on the left
- [ ] "Record" logo/branding is displayed
- [ ] Navigation items are present:
  - [ ] Dashboard (highlighted)
  - [ ] Skill Repository
  - [ ] Profile
  - [ ] Learning
  - [ ] Others
  - [ ] Settings
- [ ] Logout button is visible in sidebar
- [ ] Top header shows "Dashboard" title
- [ ] Upload button is visible in header
- [ ] User profile icon/avatar is displayed
- [ ] Success message is displayed: "🎉 Congratulations, [name]!"
- [ ] "You have successfully completed the onboarding form" message
- [ ] YouTube section card is displayed
- [ ] "Learning in progress" section with course cards
- [ ] Course cards show:
  - [ ] Gradient backgrounds
  - [ ] Course titles
  - [ ] "Powered by YouTube" text
  - [ ] Star ratings
- [ ] "Showcase in one profile" section with integration cards
- [ ] Right sidebar shows:
  - [ ] Skill Badges section
  - [ ] Learning Activities section
- [ ] Logout button works correctly

## ✅ Data Persistence Tests

### Browser Refresh Test
- [ ] Start onboarding flow
- [ ] Fill in Step 1 and proceed to Step 2
- [ ] Refresh the browser (F5)
- [ ] User remains logged in
- [ ] Data from Step 1 is still in database (test by going back)

### Back Navigation Test
- [ ] Complete Steps 1, 2, and 3
- [ ] Click Back from Step 4
- [ ] Verify Step 3 loads correctly
- [ ] Click Back again
- [ ] Verify Step 2 loads with previously selected goals
- [ ] Click Back again
- [ ] Verify Step 1 loads with all previously entered data

### Forward/Backward Cycle Test
- [ ] Navigate from Step 1 to Step 4
- [ ] Navigate back to Step 1 using Back button
- [ ] Navigate forward again to Step 4
- [ ] All data is preserved throughout

### Logout/Login Persistence Test
- [ ] Complete Steps 1-3
- [ ] Logout (if available, or clear token and refresh)
- [ ] Login again
- [ ] Should resume at Step 4 (or last incomplete step)
- [ ] Previous steps should have saved data

### Complete and Return Test
- [ ] Complete entire onboarding flow
- [ ] Reach the Dashboard
- [ ] Logout
- [ ] Login again
- [ ] Should go directly to Dashboard (not Step 1)
- [ ] Onboarding is marked as completed in database

## ✅ Responsive Design Tests

### Mobile View (< 768px)
- [ ] Signup page is readable and usable
- [ ] Login page is readable and usable
- [ ] Onboarding steps are single-column layout
- [ ] Dashboard sidebar collapses or becomes hamburger menu
- [ ] All buttons and inputs are touchable
- [ ] No horizontal scrolling

### Tablet View (768px - 1024px)
- [ ] All pages render correctly
- [ ] Dashboard maintains good layout
- [ ] Onboarding steps use appropriate width

### Desktop View (> 1024px)
- [ ] All pages match design screenshots
- [ ] Dashboard sidebar is visible
- [ ] Content is well-centered
- [ ] No elements are cut off

## ✅ Security Tests

### Password Security
- [ ] Passwords are not visible in MongoDB (check database)
- [ ] Passwords are hashed with bcrypt
- [ ] Password field type is "password" (hidden input)

### Authentication Security
- [ ] Cannot access `/onboarding/*` without login
- [ ] Cannot access `/dashboard` without login
- [ ] JWT token is used for authentication
- [ ] Token is stored in localStorage
- [ ] Invalid token redirects to login

### API Security
- [ ] API calls to `/api/onboarding/*` require authentication
- [ ] Unauthenticated requests return 401
- [ ] Users can only access their own data

## ✅ Error Handling Tests

### Form Validation
- [ ] Empty fields show appropriate errors
- [ ] Invalid email format is rejected
- [ ] Short passwords are rejected
- [ ] Required dropdowns enforce selection

### Network Errors
- [ ] Stop backend server
- [ ] Try to submit a form
- [ ] Error message is displayed
- [ ] User can retry after backend restarts

### Database Errors
- [ ] Stop MongoDB
- [ ] Try to login or signup
- [ ] Server handles error gracefully
- [ ] User sees meaningful error message

## ✅ Final Verification

- [ ] All 6 onboarding steps work correctly
- [ ] Data persistence works throughout
- [ ] Authentication flow is secure
- [ ] Dashboard displays correctly
- [ ] No console errors in browser
- [ ] No server errors in terminal
- [ ] Application matches provided screenshots
- [ ] All features listed in task document are implemented

## 🐛 Issues Found

Document any issues discovered during testing:

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

## ✅ Sign Off

- [ ] All critical tests passed
- [ ] All major features working
- [ ] Application is ready for submission

**Tested by:** _______________  
**Date:** _______________  
**Browser:** _______________  
**Node Version:** _______________  
**MongoDB Version:** _______________
