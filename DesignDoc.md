
# Home Plants Care Mobile App - Design Document

## Introduction

The Home Plants Care mobile app aims to provide users with an easy and efficient way to manage their home plants. The app will help users track their plants' growth, set watering reminders, and provide daily care tips. Users will also be able to categorize their plants, view plant details, and receive notifications.

## Objective

The main objective of this project is to design and develop a user-friendly, feature-rich mobile app for iOS and Android platforms that allows users to manage their home plants effectively.

## Tech Stack

- Frontend: React Native (with TypeScript)
- Backend: Node.js (with TypeScript)
- Database: MongoDB
- Cloud Storage: Amazon S3
- Authentication: Firebase Authentication
- Push Notifications: Firebase Cloud Messaging
- Analytics: Google Analytics for Firebase
- State Management: Redux (with TypeScript)

## Features

1. User authentication (login, signup, password reset)
2. Plant management (add, edit, delete plants)
3. Plant categorization (group plants by categories)
4. Plant image gallery (upload, view, delete images)
5. Plant details (view plant information and history)
6. Watering reminders (schedule, snooze, mark as done)
7. Daily care tips and notifications
8. Settings (change user information, preferences)
9. Analytics (track user behavior and app usage)

## Architecture Design

### Frontend

- Screens
  - Login
  - Signup
  - Plant List
  - Plant Details
  - Add/Edit Plant
  - Settings
  - Notifications
- Components
  - Plant Card
  - Category Card
  - Watering Reminder Card
  - Plant Image Gallery
- Services
  - Authentication
  - Plant API
  - Category API
  - Notifications
  - Watering Reminders
  - Analytics

### Backend

- API Endpoints
  - Users
  - Plants
  - Categories
  - Watering Reminders
  - Notifications
- Middleware
  - Authentication
  - Authorization
  - Image Upload

### Database

- Collections
  - Users
  - Plants
  - Categories
  - Watering Reminders
  - Notifications

## Development Plan

1. Set up the project environment and tech stack.
2. Design and implement the frontend components and screens.
3. Develop the backend API and integrate with frontend services.
4. Set up the database and cloud storage services.
5. Implement user authentication and push notifications.
6. Integrate analytics and monitoring tools.
7. Perform thorough testing on iOS and Android devices.
8. Deploy the app to the Apple App Store and Google Play Store.
9. Monitor app performance and user feedback for future improvements.

## Timeline

1. Project setup and environment configuration: 1 week
2. Frontend development: 4 weeks
3. Backend development: 3 weeks
4. Database and cloud storage setup: 1 week
5. Authentication and notifications integration: 1 week
6. Analytics integration and testing: 1 week
7. App deployment and launch: 2 weeks

Total project duration: 13 weeks

## Milestones

1. Project environment and tech stack setup completed
2. Frontend components and screens implemented
3. Backend API and integration completed
4. Database and cloud storage services configured
5. User authentication and push notifications integrated
6. Analytics and monitoring tools integrated
7. App tested and deployed to the App Store and Google Play Store

## Risks and Mitigation

1. Platform-specific issues: Test the app thoroughly on various iOS and Android devices to ensure compatibility and resolve any platform-specific issues.
2. Performance bottlenecks: Optimize the app's performance by implementing efficient data fetching, caching strategies, and minimizing resource usage.
3. Security vulnerabilities: Ensure that the app adheres to best practices in terms of securing user data, authentication, and communication with the backend. Regularly update dependencies and libraries to address known security issues.
4. Scope creep: Clearly define the app's features and requirements to prevent unnecessary additions or changes that may delay the project. Any new features should be assessed for their impact on the project timeline and planned accordingly.
5. User adoption and engagement: Monitor user feedback and analytics data to identify areas of improvement in the app's user experience and functionality. Iterate on the app based on user feedback and continue to refine the app's features to encourage user adoption and engagement.

## Maintenance and Support

Post-launch, a dedicated team will be responsible for maintaining the app, addressing user feedback, and providing support. The team will also work on implementing new features and improvements based on user feedback and analytics data.

1. Bug fixes and patches: Regularly monitor and address any issues or bugs reported by users or identified through analytics data. Release updates to ensure the app remains stable and functional.
2. New feature development: Identify and prioritize new features based on user feedback, market trends, and app performance. Allocate resources to implement these features in subsequent updates.
3. Performance optimization: Continuously monitor app performance and optimize it through code refactoring, better resource management, and improved caching strategies.
4. Security updates: Keep the app secure by regularly updating dependencies, libraries, and addressing any potential security vulnerabilities that may arise.
5. User support: Provide responsive and efficient user support through various channels (e.g., email, in-app chat, social media) to address user concerns and improve the overall user experience.

By following this design document and development plan, the Home Plants Care mobile app can be successfully built and launched, providing users with a valuable tool for managing their home plants. The app's continuous improvement based on user feedback and analytics data will ensure that it remains relevant and useful to its users in the long term.

# Project Environment and Tech Stack Setup

Install Node.js from https://nodejs.org/
Install the Expo CLI by running: npm install -g expo-cli
Install Android Studio from https://developer.android.com/studio
Set up an Android device or emulator for testing


To set up the project environment and tech stack for the Home Plants Care mobile app, follow these steps:

1. Install Node.js: Ensure that Node.js is installed on your development machine. You can download the latest version of Node.js from the official website: <https://nodejs.org/>

2. Install React Native CLI: The React Native CLI is a command-line tool to create and manage React Native projects. To install it globally, run the following command:
Follow the official React Native documentation to set up the development environment: https://reactnative.dev/docs/environment-setup

Two ways

- Expo Go (used here)

```
npx create-expo-app myPlantCareApp
```

- React Native CLI 

```bash
npm install -g react-native-cli
```

### Issue

 ERROR  [Reanimated] Mismatch between JavaScript part and native part of Reanimated (2.17.0 vs. 2.14.4). Did you forget to re-build the app after upgrading react-native-reanimated? If you use Expo Go, you must downgrade to 2.14.4 which is bundled into Expo SDK.

### Solution
This error occurs when there is a mismatch between the JavaScript and native parts of the Reanimated library. Since you're using Expo, you need to use the version of react-native-reanimated that is compatible with your Expo SDK version.

To fix this issue, you can downgrade react-native-reanimated to version 2.14.4, which is compatible with Expo SDK 42:

1. Uninstall the current version of react-native-reanimated:

```bash
npm uninstall react-native-reanimated
```

2. Install the compatible version (2.14.4):

```bash
npm install react-native-reanimated@2.14.4
```

After downgrading the library, the error should be resolved. If you still experience the issue, try clearing the cache and restarting the development server:

```bash
expo start --clear
```

If you want to use a newer version of Reanimated, you will need to upgrade your Expo SDK to a version that supports the desired Reanimated version. You can find the upgrade guide in the Expo documentation: https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/


3. Create a new React Native project with TypeScript template:

```bash
react-native init HomePlantsCare --template react-native-template-typescript
```

This command will create a new React Native project named "HomePlantsCare" using the TypeScript template.

4. Change into the project directory:

```bash
cd HomePlantsCare
```

5. Install required dependencies for navigation, Redux, and other libraries:

```bash
npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view redux react-redux redux-thunk @types/react-redux axios firebase
```

6. Link native modules: Some of the installed libraries contain native code that needs to be linked to the app. Use the following command to link these modules:

```bash
react-native link
```

7. Set up Firebase: To set up Firebase Authentication and Firebase Cloud Messaging, create a new project in the Firebase Console: <https://console.firebase.google.com/>

   - Follow the steps to add Firebase to your iOS and Android apps in the project settings.
   - Download the `GoogleService-Info.plist` file for iOS and place it in the `ios` folder of your project.
   - Download the `google-services.json` file for Android and place it in the `android/app` folder of your project.

8. Set up Android and iOS development environments: Follow the official React Native documentation to set up the required development environments for Android and iOS:

   - Android: <https://reactnative.dev/docs/environment-setup#docsNav>
   - iOS: <https://reactnative.dev/docs/environment-setup#installing-dependencies-3>

Once you have completed these steps, the project environment and tech stack for the Home Plants Care mobile app will be set up and ready for development.

## Start

```bash
npx react-native start
npx react-native run-android

npm start android


```

Expo

```bash
npx expo start
npx expo start --clear

```

## Overview of Dependencies

The following dependencies are required for the Home Plants Care mobile app, and each one serves a specific purpose:

1. `@react-navigation/native`, `@react-navigation/stack`, `react-native-reanimated`, `react-native-gesture-handler`, `react-native-screens`, `react-native-safe-area-context`, and `@react-native-masked-view/masked-view`: These libraries are required for implementing navigation within the app. React Navigation is a popular choice for handling navigation in React Native applications. The additional libraries are required for smooth transitions, gestures, safe area handling, and other features.

2. `redux`, `react-redux`, and `redux-thunk`: Redux is a state management library that helps manage the application state in a predictable and centralized way. React Redux connects the Redux store to React components, while Redux Thunk enables handling asynchronous actions in the Redux store. These libraries will help maintain a clean and organized state management system for the app.

3. `@types/react-redux`: This package provides TypeScript definitions for the `react-redux` library, which allows TypeScript to understand the types and interfaces used by the library, offering better type-checking and autocompletion in the development process.

4. `axios`: Axios is a popular HTTP client for making API requests. It will be used to handle communication between the frontend and the backend API, simplifying the process of fetching and posting data.

5. `firebase`: The Firebase SDK provides tools to integrate various Firebase services into the app, such as Firebase Authentication for user authentication and Firebase Cloud Messaging for push notifications. Firebase offers a scalable and easy-to-implement solution for these features.

To install the required dependencies, run the following command:

```bash
npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view redux react-redux redux-thunk @types/react-redux axios firebase
```

These dependencies help build the core functionality of the mobile app, streamlining the development process and ensuring a robust and well-structured application.

## Separate Frontend and Backend

The reasoning behind having both frontend and backend in the architecture design is based on the separation of concerns principle, which aims to improve the maintainability, scalability, and reusability of the code. Here are the main reasons for having separate frontend and backend components:

1. Maintainability: By separating the frontend and backend, developers can work on different parts of the application without affecting each other. This separation allows for easier maintenance and updates, as changes in one part of the system are less likely to cause unintended side effects in the other.

2. Scalability: Having separate frontend and backend components allows each component to scale independently. If there's a need to handle more concurrent users, you can scale the backend resources without affecting the frontend. This separation also enables better load balancing, horizontal scaling, and caching strategies.

3. Reusability: By creating a distinct backend API, you enable the possibility of reusing the same API for different applications (e.g., web app, mobile app, IoT devices) or integrations with third-party services. This approach promotes a more efficient development process, as developers can leverage the same backend for multiple frontends without duplicating code.

4. Security: Separating frontend and backend allows for better security practices. The backend can be secured by implementing authentication and authorization mechanisms, ensuring only authorized users have access to the data and functionality. Additionally, the frontend can implement client-side validation and data sanitization, helping to prevent potential attacks.

## Deployment

Deployment of such a solution typically involves the following steps:

1. Frontend: Build and package the mobile app for the desired platforms (iOS and Android). For a React Native app, you can use the `react-native run-android` and `react-native run-ios` commands to build and run the app on Android and iOS devices, respectively. Once the app is built and tested, you can submit it to the Apple App Store and Google Play Store for distribution.

2. Backend: Deploy the backend API on a server or cloud platform. There are several cloud providers that support Node.js, such as AWS Lambda, Google Cloud Functions, or Azure Functions. You can also use traditional server environments like an EC2 instance on AWS or a virtual machine on Google Cloud or Azure. After deploying the backend, make sure to update the frontend app with the correct API endpoint URLs.

3. Database: Set up and configure the database with the chosen cloud provider or on-premises. Ensure that the database is correctly connected to the backend application and secured with proper authentication and access controls.

4. Cloud Storage: Configure the cloud storage service (e.g., Amazon S3) for storing plant images. Ensure that the storage service is correctly integrated with the backend API and has proper access controls.

5. Authentication and Push Notifications: Set up Firebase Authentication and Firebase Cloud Messaging in the Firebase Console, and connect them to the frontend and backend applications accordingly.

6. Monitoring and Analytics: Set up monitoring and analytics tools (e.g., Google Analytics for Firebase) to track the app's performance, user behavior, and other metrics to help you improve the app over time.

7. Continuous Integration and Continuous Deployment (CI/CD): Establish a CI/CD pipeline to automate the build, test, and deployment processes for the frontend and backend components, ensuring a streamlined and efficient workflow for future updates and improvements.
