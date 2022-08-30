export const queries = [
  {
    title: `EXERCISE - 4 : All research papers and the number of authors that wrote that paper.`,
    query: ` SELECT rp.paper_title, COUNT(a.author_no) AS count_of_authors 
                FROM authors_research_papers arp
                JOIN authors a 
                    USING(author_no)
                JOIN research_Papers rp
                    USING(paper_id)
                GROUP BY paper_title`,
  },
  {
    title: `2- The research papers published by all female authors.`,
    query: `SELECT  COUNT(rp.paper_title) AS papers_published_by_females 
            FROM authors_research_papers
            JOIN authors a
                USING(author_no)
            JOIN research_papers rp
                USING(paper_id)
            GROUP BY  gender
            HAVING gender = "F";`,
  },
  {
    title: `3- Average of the h-index of all authors per university.`,
    query: `SELECT university, AVG(h_index) AS average_of_indexes FROM authors
            GROUP BY university;`,
  },
  {
    title: `4- Sum of the research papers of the authors per university.`,
    query: `SELECT a.university, COUNT(rp.paper_title) AS count_of_papers
            FROM authors_research_papers
            JOIN authors a
                USING(author_no)
            JOIN research_papers rp
                USING(paper_id)
            GROUP BY university;`,
  },
  {
    title: `5- Minimum and maximum of the h-index of all authors per university.`,
    query: `SELECT university, MIN(h_index), MAX(h_index) FROM authors
            GROUP BY university;`,
  },
];
