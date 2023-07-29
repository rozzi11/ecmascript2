class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Название: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}
const book1 = new Book("Война и мир", "Лев Толстой", 1225);
book1.displayInfo();

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Имя студента:${this.name}`);
        console.log(`Возраст студента:${this.age}`);
        console.log(`Класс студента:${this.grade}`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();