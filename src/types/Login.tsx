export const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 533.5 544.3">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.2H272v95h146.9c-6.3 33.8-25.1 62.5-53.5 81.7v67.6h86.2c50.4-46.5 81.9-115 81.9-194.1z"/>
    <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24 178.2-65.3l-86.2-67.6c-24 16.1-54.7 25.7-92 25.7-70.8 0-130.8-47.8-152.3-112.1H30.2v70.3C74.7 475.2 167.9 544.3 272 544.3z"/>
    <path fill="#FBBC05" d="M119.7 324.9c-10.1-30-10.1-62.2 0-92.2v-70.3H30.2c-30.2 60.2-30.2 132.6 0 192.8l89.5-70.3z"/>
    <path fill="#EA4335" d="M272 107.7c39.5-.6 77.2 13.9 106.2 39.6l79.1-79.1C391.9 23.7 332.3-.2 272 0 167.9 0 74.7 69.1 30.2 172.4l89.5 70.3C141.2 155.5 201.2 107.7 272 107.7z"/>
  </svg>
);

export const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#1877F2"
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 262.16 0c-73.05 0-121 44.38-121 124.72v70.62H89.33V288h51.83v224h100.2V288z"
    />
    <path
      fill="#1877F2"
      d="M224.73 512V288h69.73l14.22-92.66h-83.95v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 262.16 0c-73.05 0-121 44.38-121 124.72v70.62H89.33V288h51.83v224h83.57z"
    />
  </svg>
);

export const RegisteredPatientsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1976d2" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 
      3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 
      0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 
      3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

export const DoctorsOnlineIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#2e7d32" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v16h6v-5h6v5h6V5c0-1.1-.9-2-2-2zM8 9H6V7h2V5h2v2h2v2h-2v2H8V9zm10 12h-2v-5H8v5H6V5h12v16z"/>
    <circle cx="17" cy="8" r="1" fill="#2e7d32" />
  </svg>
);


export const LiveConsultationsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#e65100" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6h-7.59l2.3-2.29c.39-.39.39-1.03 0-1.41s-1.02-.39-1.41 0L12 4.29 9.71 2c-.39-.39-1.03-.39-1.41 
      0s-.39 1.02 0 1.41L10.59 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 
      2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 
      14H3V8h18v12z"/>
    <path d="M10 16.5v-5l4.5 2.5-4.5 2.5z" fill="#e65100"/>
  </svg>
);


export const JoinNowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#9c27b0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" />
        <path d="M15 20H3v-1.5c0-2 3-3.5 6-3.5s6 1.5 6 3.5V20z" />
    <path d="M21 8h-2V6h-2v2h-2v2h2v2h2v-2h2V8z" />
  </svg>
);


export interface LoginSectionProps {
  onSwitch: () => void;
}