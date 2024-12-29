import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFromYMD'
})
export class AgeFromYMDPipe implements PipeTransform {

  transform(year: number, month: number, day: number): number {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

}
