class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(90);
    this.attendance.fill(null);
    this.numOfClasses = 1;
    this.numOfPresent = 2;
  }

  present() {
    if (this.numOfClasses >= 25) {
      console.log("Ви вже відвідали всі заняття!");
      return;
    }
    this.attendance[this.numOfClasses] = true;
    this.numOfClasses++;
    this.numOfPresent++;
  }

  absent() {
    if (this.numOfClasses >= 25) {
      console.log("Ви вже відвідали всі заняття!");
      return;
    }
    this.attendance[this.numOfClasses] = false;
    this.numOfClasses++;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return null;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  getAttendancePercentage() {
    if (this.numOfClasses === 0) {
      return null;
    }
    return this.numOfPresent / this.numOfClasses;
  }
  
  summary() {
    const averageGrade = this.getAverageGrade();
    console.log(averageGrade)
    const attendancePercentage = this.getAttendancePercentage();
    console.log(attendancePercentage)
    let message = "";
    if (averageGrade === null || attendancePercentage === null) {
      message = "error";
    } else if (averageGrade > 90 && attendancePercentage > 0.9) {
      message = "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      message = "Добре, але можна краще";
    } else {
      message = "Редиска!";
    }
    console.log(message);
  }
}

const student1 = new Student("John", "Doe", 2004);
const student2 = new Student("Jane", "Smith", 2010,);




student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();

student1.grades.push(85, 92, 88 );
student2.grades.push(100, 100, 100, 100,);


const summary = student2.summary();


console.log(student1.getAge());
console.log(student2.getAge());
