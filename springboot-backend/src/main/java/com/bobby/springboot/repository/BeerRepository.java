package com.bobby.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bobby.springboot.model.Beer;
import org.springframework.stereotype.Repository;
// JPA Repository exposes DB CRUD METHODS (save, findbyid, findall, deletebyid, etc)
// JPA Repository: Pass Beer JP Entity and the type of Primary Key
@Repository
public interface BeerRepository extends JpaRepository<Beer,Integer> {

}
