export const joinQueries = [
  {
    title: `EXERCISE - 3 : The query prints names of all authors and their corresponding mentors.`,
    query: `SELECT a.author_name, m.name AS mentor 
            FROM authors a
            LEFT JOIN mentors m
              ON a.mentor_id = m.id;`,
  },
  {
    title: `The query prints all columns of authors and their published paper_title`,
    query: `SELECT a.* , rp.paper_title FROM authors_research_papers
            RIGHT JOIN authors a 
              USING(author_no)
            LEFT JOIN research_Papers rp
              USING(paper_id);`,
  },
];
