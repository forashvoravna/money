package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.payload.LoginPayload;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthContRoller {

    private final UserService userService;

    private final PasswordEncoder passwordEncoder;

    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }

    @PostMapping("/login")
    public String getUser(@ModelAttribute LoginPayload loginPayload,
                          Model model) {
        User user = userService.getUserByUserName(loginPayload.getUsername());
        if (user == null) {
            model.addAttribute("isFullName", "Ism topilmadi");
            return "login";
        } else if (!user.getPassword().equals(passwordEncoder.encode(loginPayload.getPassword()))){
            model.addAttribute("isPassword", "Parol xato");
            return "login";
        }else {
            model.addAttribute("user", user);
            return "redirect:/api/money/sahifa/getAll";
        }
    }
}
