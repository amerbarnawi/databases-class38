export const createAuthorTable = [
  {
    title: "Create authors table:",
    query: `CREATE TABLE IF NOT EXISTS authors (
            author_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            author_name VARCHAR (50) NOT NULL,
            university VARCHAR (150),
            date_of_birth DATE,
            h_index INT,
            gender ENUM('M','F')
            );`,
  },
];

export const addMentorColumn = [
  {
    title: `EXERCISE - 1 : Adding the mentors column:`,
    query: `alter table authors
                add column mentor_id INT, 
                ADD CONSTRAINT FK_mentor FOREIGN KEY(mentor_id) REFERENCES mentors(id);`,
  },
];

export const createMentorsTable = [
  {
    title: `Create mentors table:`,
    query: `CREATE TABLE IF NOT EXISTS mentors (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR (50) NOT NULL);`,
  },
];
