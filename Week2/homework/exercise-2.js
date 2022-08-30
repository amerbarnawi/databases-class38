export const createResearchPaperTable = [
  {
    title: " EXERCISE - 2 : Create research papers table:",
    query: `CREATE TABLE IF NOT EXISTS research_Papers (
            paper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            paper_title TEXT,
            conference TEXT,
            publish_date DATE
            );`,
  },
];

// Many to Many relationship.
// The relationship table between( author ) and (research papers) tables:
export const createAuthorsPapersTable = [
  {
    title:
      "Create the table of relationship between authors and papers tables:",
    query: `CREATE TABLE IF NOT EXISTS authors_research_papers (
            id int not NULL PRIMARY KEY AUTO_INCREMENT,
            author_no int not null,
            paper_id int not null,
            FOREIGN KEY (author_no) REFERENCES authors (author_no),
            FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
           );`,
  },
];

// The data are in the insertData.js file.
