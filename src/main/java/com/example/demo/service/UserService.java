package com.example.demo.service;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.payload.UserPayload;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    public List<Role> getRoleList(UserPayload userPayload){
        List<Role> roleList = new ArrayList<>();
        for (Role role : roleRepository.findAll()) {
            for (Long id : userPayload.getRolesId()) {
                if (role.getId().equals(id)){
                    roleList.add(role);
                }
            }
        }
        return roleList;
    }
    public void saveUser(UserPayload userPayload){
        User user=new User();
        user.setRoleList(getRoleList(userPayload));
        user.setUsername(userPayload.getUsername());
        user.setPassword(userPayload.getPassword());
        user.setPassword(passwordEncoder.encode(userPayload.getPassword()));
        userRepository.save(user);
    }

    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public User findUserById(Long id){
        try {
            if(userRepository.existsById(id)){
                return userRepository.findById(id).orElse(null);
            }
        }catch (Exception e){
                 log.error(e.getMessage());
             }
             return null;
    }
    public User getUserByUserName(String username){
        try {
                return userRepository.findByUsername(username);
        }catch (Exception e){
            log.error(e.getMessage());
        }
        return null;
    }

    public List <User> findAllByFullNameLike(String fullName){
        try {
            return userRepository.findAllByFullNameLike(fullName);
        }catch (Exception e){
            log.error(e.getMessage());
        }
        return null;
    }


    public Long countUser(){
        return userRepository.userCount();
    }

    public Long countUserAdmin(){
        return userRepository.userAdminCount();
    }


    public void editUser(Long id, UserPayload userPayload){
        try {
            if (userRepository.existsById(id)){
                User user=findUserById(id);
                user.setRoleList(getRoleList(userPayload));
                user.setUsername(userPayload.getUsername());
                user.setPassword(passwordEncoder.encode(userPayload.getPassword()));
                userRepository.save(user);
            }
        }catch (Exception e){
                 log.error(e.getMessage());
             }
    }

    public void deleteUser(Long id){
        try {
            userRepository.deleteById(id);
        }catch (Exception e){
                 log.error(e.getMessage());
             }
    }

}
