# The Wild Oasis

## Overview

This project is a multilingual web application built using React. It supports English and Arabic languages and includes
features for user authentication, account management, and hotel booking settings.

## Features

### Multilingual Support

- **Languages**: English and Arabic
- **Language Detection**: Automatically detects and sets the language based on user preference stored in local storage
  or defaults to English.

### User Authentication

- **Login**: Users can log in using their email and password.
- **Error Handling**: Provides error messages for invalid email formats, password length, and password mismatch.

### Account Management

- **Update Account**: Users can update their account information including email, full name, and avatar.
- **Update Password**: Users can change their password with validation for minimum length and confirmation.

### Hotel Booking Settings

- **Update Hotel Information**: Admins can update hotel-related settings such as minimum and maximum booking nights,
  maximum guests, and breakfast price.

### Pagination

- **Navigation**: Users can navigate through paginated data using previous and next buttons.

### Data Handling

- **Empty Data**: Displays a message when there is no data to show.

### Modals

- **Delete Confirmation**: Provides a modal to confirm deletion of items.

## Libraries and Technologies Used

- **JavaScript**
- **React**: For building the user interface.
- **i18next**: For internationalization.
- **i18next-http-backend**: For loading translations from the backend.
- **i18next-browser-languagedetector**: For detecting the user's language preference.
- **react-i18next**: For integrating i18next with React.
- **npm**: For package management.
- **@supabase/supabase-js**: For interacting with Supabase services.
- **@tanstack/react-query**: For data fetching and caching.
- **@tanstack/react-query-devtools**: For debugging React Query.
- **date-fns**: For date manipulation.
- **react-error-boundary**: For handling errors in React components.
- **react-hook-form**: For managing form state.
- **react-hot-toast**: For displaying toast notifications.
- **react-icons**: For using icons in React.
- **react-router-dom**: For routing in React applications.
- **recharts**: For creating charts.
- **styled-components**: For styling React components.
- **vite**: For building and serving the application.
- **eslint**: For linting JavaScript code.
- **prettier**: For code formatting.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/adelahmed0/The-Wild-Oasis


