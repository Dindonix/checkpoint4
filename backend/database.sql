DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS project;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(250) NOT NULL,
  hashedPassword varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE project (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  project_name varchar(255) NOT NULL,
  project_image varchar(500),
  category_id int,
  FOREIGN KEY (category_id) REFERENCES category(id)
  ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` VALUES 
(1,'Matthieu','George','georgematthieu1@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$4DLzdtNOm/ZXffvxd61XDg$yDJ5V/rnqzMlTBqjGFm3MeN0/tfK58YBiOlW8XM5mS8');
INSERT INTO `category` VALUES 
(1, 'Divertissement'), (2, 'Qualité de vie'), (3,'Communication');
INSERT INTO `project` VALUES 
(1, 'France-Trivia',"https://www.zupimages.net/up/23/05/w39h.png",1),(2,'GoodToLive','https://www.zupimages.net/up/23/05/7um9.png',2),(3,'Projet Enedis',"https://www.zupimages.net/up/23/05/u1yl.png",3);
