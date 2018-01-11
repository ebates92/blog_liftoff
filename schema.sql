CREATE TABLE Authors (
    id SERIAL PRIMARY KEY,
    firstname varchar(20),
    lastname varchar(20),
    dateadded DATE
);

CREATE TABLE Articles (
    id SERIAL PRIMARY KEY,
    author_id INTEGER references Authors(id),
    title varchar(100),
    body TEXT,
    dateposted DATE
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    article_id INTEGER references Articles(id),
    comment TEXT
);

CREATE TABLE Tags (
    id SERIAL PRIMARY KEY,
    name varchar(20)
);

CREATE TABLE ArticleTags (
    article_id INTEGER references Articles(id),
    tag_id INTEGER references Tags(id)
);