
# Diet on the Go

Diet on the Go is a web application built with React.js using Vite as the build tool and Mantine framework for the UI components. The application focuses on helping users manage their diet effectively by calculating maintenance calories based on daily activity levels, adjusting calories for surplus or deficit, and planning macronutrients accordingly.

## Features

- **Calculate Maintenance Calories:** Determine maintenance calorie levels based on daily activity.
- **Adjust Caloric Intake:** Modify calorie intake to achieve surplus or deficit calories.
- **Macro Nutrient Calculation:** Calculate protein, carbohydrates, and fat based on user's dietary requirements.
- **Meal Planning:** Add food to a meal list to achieve target calorie goals through an intuitive UI.
- **Progress Tracking:** Store and track progress data in the database.
- **Export and Import Data:** Export and import progress data in a specific format.

## Firebase Configuration

To set up Firebase for authentication and data storage, create a `firebase.ts` file in your project with the following configuration:

```typescript
// firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const db = getFirestore(firebaseApp);
```

Replace the placeholders (`YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, `YOUR_APP_ID`) with your Firebase project details.

## Getting Started

Follow these steps to get the project up and running locally:

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.

## Usage

1. Set up Firebase by following the Firebase Configuration steps.
2. Navigate to the application and authenticate using Google OAuth2.
3. Utilize the application features to manage your diet effectively.
