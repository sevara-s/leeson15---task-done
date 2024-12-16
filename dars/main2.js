class User {
    username;
    email;
    role;
    constructor(username, email, role = "student") {
      this.username = username;
      this.email = email;
      this.role = role;
    }
    getInfo() {
      return `Ism: ${this.username}, Email: ${this.email}, Role: ${this.role}`;
    }
  }
  
  class Student extends User {
    courses = [];
    constructor(username, email, role, courses = []) {
      super(username, email, role);
      this.courses = courses;
    }
  
    enroll(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);  
        return `Siz ${course} ga qo'shildingiz`;  
      } else {
        return `Siz avval kursga qo'shilgansiz`;  
      }
    }
  
    listCourses() {
      return `Kurslar ro'yxati: ${this.courses.join(', ')}`;  
    }
  }
  
  class Instructor extends User {
    constructor(username, email, role, courses = []) {
      super(username, email, role);
      this.courses = courses;
    }
  
    createCourse(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);  
        return `Siz ${course} kursini qo'shdingiz`;  
      } else {
        return `Bu kurs mavjud`;  
      }
    }
  
    listCourses() {
      return `Kurslar ro'yxati: ${this.courses.join(', ')}`; 
    }
  }
  
  let user1 = new User("Sevara", "sevara@gmail.com", "student");
  console.log(user1.getInfo());
  
  let user2 = new Student("Sevara", "sevara@gmail.com", "student", ["IT"]);
  console.log(user2.enroll("English"));   
  console.log(user2.listCourses());   