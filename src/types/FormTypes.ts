export interface PersonalDetails {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface ServiceDetails {
    vehicleCategory: string;
    vehicleModel: string;
}

export interface BoardingDetails {
    appointmentDate: string;
    appointmentTime: string;
}

export type FormData = PersonalDetails & ServiceDetails & BoardingDetails;
