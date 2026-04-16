enum Role {
    Doctor="Doctor",
    Nurse="Nurse",
    Admin="Admin"
}
interface Staff{
    id: number;
    name: string;
    role: Role;
}
//Create an array of staff members using the interface and enum
let staffMembers: Staff[]= [
    { id: 1, name: "Sana", role: Role.Doctor },
    { id: 2, name: "Sam", role: Role.Nurse },
    { id: 3, name: "Sha", role: Role.Admin }
];
function SummaryOfStaff(staff: Staff[]): void{
    console.log("Staff Summary:");
    staff.forEach(member => {
        console.log(`ID: ${member.id}, Name: ${member.name}, Role: ${member.role}`);
    });


}
SummaryOfStaff(staffMembers);

export {};