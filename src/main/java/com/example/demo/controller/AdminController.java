package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.payload.UserPayload;
import com.example.demo.response.UserExcelExporter;
import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api")

public class AdminController {
    private final UserService userService;
    private final RoleService roleService;

    @GetMapping("admin/user/getAll")
    public String showListofUsers(Model model){
        model.addAttribute("userCount", userService.countUser());
        model.addAttribute("userAdminCount",userService.countUserAdmin());
        model.addAttribute("data", userService.getAllUser());
        model.addAttribute("roles", roleService.getAllRole());
        return "AdminIndex";
    }

    @GetMapping("admin/sahifa/getAll")
    public String showMain(Model model){
        return "UmumiyIndex";
    }

    @PostMapping("admin/userName/getAll")
    public String findAllUserByFullNameLike(Model model,String fullName){
        model.addAttribute("data", userService.findAllByFullNameLike(fullName));
        return "AdminIndex";
    }

    @PostMapping("admin/user/save")
    public String saveUser(UserPayload userPayload) {
        userService.saveUser(userPayload);
        log.info("Yangi foydalanuvchi yaratildi " + userPayload.getUsername());
        return "redirect:/api/admin/user/getAll";
    }

    @GetMapping("admin/user/edit/{id}")
    @ResponseBody
    public Optional<User> update(@PathVariable Long id){
        log.info("Foydalanuvchi tahrirlanish uchu chaqirildi. Foydalanuvchi id = "+ id);
        return Optional.ofNullable(userService.findUserById(id));
    }

    @PostMapping("admin/user/edit/{id}")
    public String editUser(UserPayload userPayload, @PathVariable Long id) {
        userService.editUser(id,userPayload);
        log.info("Foydalanuvchi tahrirlandi. "+ id + userPayload.getUsername());
        return "redirect:/api/admin/user/getAll";
    }

    @GetMapping("admin/user/delete/{id}")
    public String delete(@PathVariable Long id) {
        userService.deleteUser(id);
        log.info("Foydalanuvchi o'chirildi. Users id: " + id);
        return "redirect:/api/admin/user/getAll";
    }

    @GetMapping("admin/user/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<User> listUsers = userService.getAllUser();

        UserExcelExporter excelExporter = new UserExcelExporter(listUsers);

        excelExporter.generate(response);
    }

}
