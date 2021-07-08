# Spring-ReactJS-MySQL-Application
Full Stack Web Appliaction utilizing Spring Framework with ReactJS and MySQL to create and apply RESTful API's with an emphasis on database CRUD operations. <br /><br /> Application connects to a beer database that allows users to add, search, view, update, and delete beers. <br /><br />
Back-End was built with powerful Spring JPA library, Spring annotations, and Java Hibernate which allowed for efficient setup and development. Front-End was created through ReactJS with implementations 
of powerful libraries such as MomentJS, React Router, Axios Library, and Bootstrap. 



The BEER table in the H2 database has the following schema:
ID - INTEGER PK.  <br />
NAME - VARCHAR(100) NOT NULL UNIQUE. <br />
DESCRIPTION - VARCHAR(4000). <br />
ABV - DOUBLE. <br />
IBU - INTEGER. <br />
CREATE_DATE - TIMESTAMP NOT NULL. <br />
