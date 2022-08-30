export const insertData = [
  {
    title: "Inserting mentors data into mentors table:",
    query: `INSERT INTO mentors (name)
            VALUES ("Fede"), ("Unmesh"),( "Alejo");`,
  },
  {
    title: `Inserting research papers data:`,
    query: `INSERT INTO research_Papers 
        ( paper_title, conference, publish_date)
        VALUES 
        -- Programming:
        ("Pros and Cons of using Bootstrap in design.", "programming", "2022-08-01"),
        ("Use javascript to write SQL using special functions.", "programming", "2022-08-01" ),
        ("Front-end development is the desire of most programmers.","programming", "2022-08-01"),
        ("Impact of prior learning on programming.","programming", "2022-08-02"),
        ("The benefits of problem-solving in learning programming.","programming", "2022-08-02"),
        
        -- Radiation physics:
        ("Batteries charged by cosmic rays.", "Radiation physics","2022-09-01"),
        ("Use leaded glass to shield from radiation.", "Radiation physics","2022-09-01"),
        ("Using Montecarlo models to simulate radiotherapy for a cancer patient.", "Radiation physics","2022-09-02"),
        ("Occupational safety procedures for nuclear medicine workers", "Radiation physics","2022-09-02"),
        ("Using the CERN accelerator to explore the structure of matter.", "Radiation physics","2022-09-03"),
        
        -- Technology:
        ("Using of programmable logic controllers in cars.","Technology","2022-10-01"),
        ("Microcontroller programming in C language.","Technology","2022-10-01"),
        ("Using LEGO robots to teach programming to children.","Technology","2022-10-02"),
        ("Connecting the electronic circuit to the computer.","Technology","2022-10-03"),
        ("Using the block method as an alternative to programming languages.","Technology","2022-10-05"),
        
        -- Education:
        ("Developing creative thinking and problem-solving skills for children using programming languages.", "Education", "2022-11-01"),
        ("The negative impact of educational content on the desire to learn.", "Education", "2022-11-02"),
        ("The use of visual and audio materials and their role in the learning process.", "Education", "2022-11-03"),
        ("The positive effect of open exams on achievement.", "Education", "2022-11-04"),
        ("The role of experiments in motivating learners to learn.", "Education", "2022-11-05"),
        
        -- Languages:
        ("The effect of learning foreign languages on the literature of immigrant poets.", "Languages", "2022-12-01"),
        ("Learning a second foreign language is faster than learning the first.", "Languages", "2022-12-02"),
        ("The reflection of learning foreign languages on the mother tongue.", "Languages", "2022-12-03"),
        ("Ways to learn a new foreign language.", "Languages", "2022-12-04"),
        ("Some languages are similar in grammar.", "Languages", "2022-12-05"),
        
        -- Psychology:
        ("The positive effects of successful romantic relationships on professional life.", "Psychology", "2023-01-01"),
        ("Motivation to learn increases with age.", "Psychology", "2023-01-01"),
        ("The impact of social activities on the logic of thinking.", "Psychology", "2023-01-01"),
        ("The impact of the environment on the mental development of the child.", "Psychology", "2023-01-01"),
        ("The positive impact of hobbies on social life.", "Psychology", "2023-01-01");`,
  },
  {
    title: ` Inserting authors data:`,
    query: `INSERT INTO authors 
        ( author_name, university, date_of_birth, h_index, gender, mentor_id)
        VALUES 
        ("Amer", "Damascus University", "1983-01-01", 30, "M", 1 ),
        ("Ahmad", "Open University", "1970-01-01", 54, "M", 2 ),
        ("Mohammad", "Life University", "1980-01-01", 22, "M", 3 ),
        ("Sara", "Damascus University", "1990-01-01", 66, "F", NULL ),
        ("Mais", "Life University", "1982-01-01", 81, "F", 1 ),
        ("Khaled", "Open University", "1973-01-01", 23, "M", 2 ),
        ("Jona", "Damascus University", "1966-01-01", 60, "F", 3 ),
        ("Wafa", "Open University", "1981-01-01", 18, "F", NULL ),
        ("Basema", "Life University", "1978-01-01", 25, "F", 1 ),
        ("Nada", "Damascus University", "1979-01-01", 48, "F", 2 ),
        ("Nour", "Open University", "1988-01-01", 33, "F", NULL ),
        ("Bassam", "Life University", "1987-01-01", 21, "M", 3 ),
        ("Lama", "Damascus University", "1966-01-01", 24, "F", 1 ),
        ("Basel", "Open University", "1985-01-01", 32, "M", 2 ),
        ("Feras", "Damascus University", "1980-01-01", 63, "M", NULL );`,
  },

  {
    title: "Inserting authors-papers relationship table data:",
    query: `INSERT INTO authors_research_papers( author_no, paper_id)
    VALUES 
    (1, 8), (1, 5), (2, 1), ( 2, 4 ), (3, 2), ( 3, 6), (4, 7), (4, 3), (5, 9), (5, 10),
    (6, 11), (6, 12), (7, 13), ( 7, 14 ), (8, 15), ( 8, 16), (9, 17), (9, 18), (10, 19), (10, 20),
    (11, 21), (11, 22), (12, 23), ( 12, 24 ), (1, 25), ( 6, 26), (14, 27), (14, 28), (15, 29), (15, 30),
    (1, 25), (5, 16), (15, 23), ( 12, 13 ), (2, 25), ( 2, 26), (6, 27), (12, 28), (4, 29), (8, 30);`,
  },
];
