export default class Student {

  constructor(firstname, surname, lastname, birthDate, startStudy, faculty) {
    this.surname = surname
    this.firstname = firstname
    this.lastname = lastname
    this.birthDate = birthDate
    this.startStudy = startStudy
    this.faculty = faculty
  }

  get getNamefull() {
    return this.firstname + ' ' + this.surname + ' ' + this.lastname;
  }

  get getFaculty() {
    return this.faculty;
  }

  getBirthDateString() {
    let yyyy = this.birthDate.getFullYear();
    let mm = this.birthDate.getMonth() + 1;
    let dd = this.birthDate.getDate();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '.' + mm + '.' + yyyy;
  }

  getAge() {
    let today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    let month = today.getMonth() - this.birthDate.getMonth();
    let yaer;
    if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      yaer = 'лет';
    } else {
      count = count % 10;
      if (count == 1) {
        yaer = 'год';
      } else if (count >= 2 && count <= 4) {
        yaer = 'года';
      } else {
        yaer = 'лет';
      }
    }
    return age + ' ' + yaer;
  }

  getStudyPeriod() {
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let studyPeriod = todayYear - this.startStudy.getFullYear();
    let studyMonth = this.startStudy.getMonth();
    let yearStudy = this.startStudy.getFullYear();
    let finished = yearStudy + 4;
    let completedСourse;
    if (studyPeriod === 0 && studyMonth < 9) {
      studyPeriod = '';
      completedСourse = 'абитуриент';
      return yearStudy + ' ' + finished + ' ' + studyPeriod + ' ' + completedСourse;
    } else if (studyPeriod === 0 && studyMonth >= 9) {
      completedСourse = 'курс';
      return yearStudy + ' ' + finished + ' ' + studyPeriod + ' ' + completedСourse;
    }
    if (studyPeriod === 4 && todayMonth > 9 || studyPeriod > 4) {
      studyPeriod = '',
        completedСourse = 'закончил(а)';
      return yearStudy + '-' + finished + ' ' + studyPeriod + '' + completedСourse;
    } else if (completedСourse !== 'закончил(а)') {
      completedСourse = 'курс';
      return yearStudy + '-' + finished + ' ' + studyPeriod + ' ' + completedСourse;
    }
  }
}



