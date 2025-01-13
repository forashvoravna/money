package com.example.demo.repository;

import com.example.demo.entity.Money;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoneyRepository extends JpaRepository<Money, Long> {

    @Query(value = "select * from money  where money.description like %:full_name%", nativeQuery = true)
    List<Money> findAllByFullNameLike(@Param("full_name") String fullName);
}
