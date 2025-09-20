# MedKit HealthCare

A modern, responsive healthcare appointment booking platform built with React, TypeScript, and Material UI.

## Features

- **Find a Doctor:** Browse and filter doctors by specialty, location, and availability.
- **Book Appointments:** Select appointment type, date, and time with a smooth, animated UI.
- **Responsive Design:** Optimized for all devices and screen sizes.
- **Client Zone:** Manage your appointments and view your booking history.
- **About Us:** Learn more about the MedKit HealthCare team and mission.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [MUI Icons](https://mui.com/material-ui/material-icons/)

## Project Structure

```
src/
  api/           # API utilities (country, times)
  assets/        # Images and icons
  components/    # Reusable UI components
    cards/       # Doctor cards and info
    findDoctor/  # Find doctor-related components
    footer/      # Footer component
    home/        # Home page sections
    navbar/      # Navigation bar
    search/      # Search and booking bar
  hooks/         # Custom React hooks
  pages/         # Page components (Home, About, Book, etc.)
  routes/        # App routing
  service/       # Service layer for API/data
  store/         # State management (if any)
  types/         # TypeScript types and interfaces
  main.tsx       # App entry point
  vite-env.d.ts  # Vite environment types
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/medkit-healthcare.git
   cd medkit-healthcare
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Scripts

- `dev` – Start the development server
- `build` – Build the app for production
- `preview` – Preview the production build

## Customization

- **Add Doctors:** Update `src/assets/` with new images and edit doctor data in the relevant components.
- **Edit Appointment Types:** Modify `AppointmentTypeSelector.tsx` for new or changed appointment types.
- **API Integration:** Replace mock data in `api/` and `service/` folders with your backend endpoints.

## License

This project is licensed under the MIT License.

---

**MedKit HealthCare** – Making healthcare appointments simple and accessible.
