export class Student {
  constructor(
    public id: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public dateOfBirth: string = '',
    public phoneNumber: string = '',
    public address: string = '',
    public city: string = '',
    public state: string = '',
    public zipCode: string = '',
    public grade: string = '',
    public schoolName: string = '',
    public parentName: string = '',
    public parentPhone: string = '',
    public parentEmail: string = '',
    public emergencyContact: string = '',
    public emergencyPhone: string = '',
    public medicalConditions: string = '',
    public allergies: string = '',
    public createdAt: string = '',
    public updatedAt: string = ''
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  get age(): number {
    if (!this.dateOfBirth) return 0;
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  static fromDto(dto: any): Student {
    return new Student(
      dto.id || '',
      dto.firstName || '',
      dto.lastName || '',
      dto.email || '',
      dto.dateOfBirth || '',
      dto.phoneNumber || '',
      dto.address || '',
      dto.city || '',
      dto.state || '',
      dto.zipCode || '',
      dto.grade || '',
      dto.schoolName || '',
      dto.parentName || '',
      dto.parentPhone || '',
      dto.parentEmail || '',
      dto.emergencyContact || '',
      dto.emergencyPhone || '',
      dto.medicalConditions || '',
      dto.allergies || '',
      dto.createdAt || '',
      dto.updatedAt || ''
    );
  }

  toDto(): any {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      phoneNumber: this.phoneNumber,
      address: this.address,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      grade: this.grade,
      schoolName: this.schoolName,
      parentName: this.parentName,
      parentPhone: this.parentPhone,
      parentEmail: this.parentEmail,
      emergencyContact: this.emergencyContact,
      emergencyPhone: this.emergencyPhone,
      medicalConditions: this.medicalConditions,
      allergies: this.allergies,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
