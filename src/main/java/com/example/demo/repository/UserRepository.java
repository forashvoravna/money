package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    @Query(value = "select * from users  where users.username like %:full_name% ", nativeQuery = true)
    List<User> findAllByFullNameLike(@Param("full_name") String fullName);

    @Query(value = "select count(*) from users ", nativeQuery = true)
    Long userCount();

    @Query(value = "select count(*) from users_role_list WHERE role_list_id=(select role.id from role where role.name='ROLE_ADMIN') ", nativeQuery = true)
    Long userAdminCount();





}
