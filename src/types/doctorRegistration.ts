export interface DoctorFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    profilePhoto: File | null;
  };
  professionalDetails: {
    licenseNumber: string;
    specialization: string;
    yearsOfExperience: string;
    boardCertifications: string[];
  };
  education: {
    medicalSchool: string;
    graduationYear: string;
    residency: string;
    fellowship: string;
  };
  currentPractice: {
    hospitalName: string;
    position: string;
    workAddress: string;
    workPhone: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };
}

export interface PersonalInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  profilePhoto: File | null;
}

export interface ProfessionalDetailsData {
  licenseNumber: string;
  specialization: string;
  yearsOfExperience: string;
  boardCertifications: string[];
}

export interface EducationData {
  medicalSchool: string;
  graduationYear: string;
  residency: string;
  fellowship: string;
}

export interface CurrentPracticeData {
  hospitalName: string;
  position: string;
  workAddress: string;
  workPhone: string;
}

export interface EmergencyContactData {
  name: string;
  relationship: string;
  phone: string;
  email: string;
}
