package com.example.demo;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RequiredArgsConstructor
public class DemoApplication implements CommandLineRunner {

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

        User user=userRepository.findByUsername("admin");
		if(user==null) {
			List<Role> roleList = new ArrayList<>();
			roleRepository.save(new Role("ROLE_USER"));
			roleList.add(roleRepository.save(new Role("ROLE_ADMIN")));
			userRepository.save(new User("admin", passwordEncoder.encode("123"), roleList));
		}
// 		List<Role> roleList = new ArrayList<>();
//		roleList.add(roleRepository.save(new Role("ROLE_USER")));
//		userRepository.save(new User("user",passwordEncoder.encode("123"),roleList,12356));
	}
}
