package com.example.demo.controller;

import com.example.demo.dto.MoneyDTO;
import com.example.demo.entity.Money;
import com.example.demo.payload.MoneyPayload;
import com.example.demo.response.MoneyExcelExporter;
import com.example.demo.service.MoneyService;
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

@Slf4j
@Controller
@RequestMapping("/api/money")
@RequiredArgsConstructor
public class MoneyController {
    private final MoneyService moneyService;
    @GetMapping("/sahifa/getAll")
    public String Sahifa(Model model) {
        model.addAttribute("money", moneyService.getAllMoney());
        model.addAttribute("kirim",moneyService.getAllKirim());
        model.addAttribute("harajat", moneyService.getAllHarajat());
        model.addAttribute("qarz", moneyService.getAllQarz());
        model.addAttribute("list", moneyService.getAll());
        model.addAttribute("moneyType",moneyService.getAllMoneyType());
        return "UmumiyIndex";
    }

    @GetMapping("/harajat/getAll")
    public String harajat(Model model) {
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("harajat",moneyService.getAllHarajat());
        model.addAttribute("harajatList",moneyService.getAllHarajatList());
        return "HarajatIndex";
    }

    @GetMapping("/kirim/getAll")
    public String kirim(Model model) {
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("kirim",moneyService.getAllKirim());
        model.addAttribute("kirimList",moneyService.getAllKirimList());
        return "KirimIndex";
    }

    @GetMapping("/qarz/getAll")
    public String qarz(Model model) {
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("qarz",moneyService.getAllQarz());
        model.addAttribute("qarzList",moneyService.getAllQarzList());
        return "QarzIndex";
    }

    @PostMapping("/sahifa/save")
    public String saveMoney(MoneyPayload moneyPayload){
        moneyService.saveMoney(moneyPayload);
        log.info("Yangi money yaratildi " + moneyPayload);
        return "redirect:/api/money/sahifa/getAll";
    }
    @GetMapping("/sahifa/delete/{id}")
    public String deleteMoney(@PathVariable("id") Long id){
         moneyService.deleteMoney(id);
         return "redirect:/api/money/sahifa/getAll";
    }
    @GetMapping("/sahifa/edit/{id}")
    @ResponseBody
    public Money editMoney(@PathVariable("id") Long id){
        return moneyService.getById(id);
    }
    @PostMapping("/sahifa/edit/{id}")
    public String editMoney(@PathVariable("id") Long id, MoneyPayload moneyPayload){
        moneyService.editMoney(id,moneyPayload);
        log.info("Money tahrirlandi " + moneyPayload);
        return "redirect:/api/money/sahifa/getAll";
    }

    @PostMapping("/sahifa/getAll")
    public String findAllUserByFullNameLike(Model model,String fullName){
        model.addAttribute("list", moneyService.findAllByFullNameLike(fullName));
        model.addAttribute("money", moneyService.getAllMoney());
        model.addAttribute("harajat", moneyService.getAllHarajat());
        model.addAttribute("qarz", moneyService.getAllQarz());
        model.addAttribute("moneyType",moneyService.getAllMoneyType());
        return "UmumiyIndex";
    }
    @PostMapping("/harajat/getAll")
    public String harajatFindAllUserByFullNameLike(Model model,String fullName){
        model.addAttribute("harajatList", moneyService.findAllByFullNameLike(fullName).stream()
                .filter(moneyDTO -> moneyDTO.getMoneyType().equals("HARAJAT")).toList());
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("harajat",moneyService.getAllHarajat());
        return "HarajatIndex";
    }
    @PostMapping("/kirim/getAll")
    public String kirimFindAllUserByFullNameLike(Model model,String fullName){
        model.addAttribute("kirimList", moneyService.findAllByFullNameLike(fullName).stream()
                .filter(moneyDTO -> moneyDTO.getMoneyType().equals("KIRIM")).toList());
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("kirim",moneyService.getAllKirim());
        return "KirimIndex";
    }
    @PostMapping("/qarz/getAll")
    public String qarzFindAllUserByFullNameLike(Model model,String fullName){
        model.addAttribute("qarzList", moneyService.findAllByFullNameLike(fullName).stream()
                .filter(moneyDTO -> moneyDTO.getMoneyType().equals("QARZ")).toList());
        model.addAttribute("money",moneyService.getAllMoney());
        model.addAttribute("qarz",moneyService.getAllQarz());
        return "QarzIndex";
    }

    @GetMapping("/sahifa/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=umumiy_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<MoneyDTO> moneyDTOS = moneyService.getAll();

        MoneyExcelExporter excelExporter = new MoneyExcelExporter(moneyDTOS);

        excelExporter.generate(response);
    }

    @GetMapping("/kirim/export/excel")
    public void kirimExportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=kirim_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<MoneyDTO> moneyDTOS = moneyService.getAllKirimList();

        MoneyExcelExporter excelExporter = new MoneyExcelExporter(moneyDTOS);

        excelExporter.generate(response);
    }

    @GetMapping("/harajat/export/excel")
    public void harajatExportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=harajat_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<MoneyDTO> moneyDTOS = moneyService.getAllHarajatList();

        MoneyExcelExporter excelExporter = new MoneyExcelExporter(moneyDTOS);

        excelExporter.generate(response);
    }
    @GetMapping("/qarz/export/excel")
    public void qarzExportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=qarz_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        List<MoneyDTO> moneyDTOS = moneyService.getAllQarzList();

        MoneyExcelExporter excelExporter = new MoneyExcelExporter(moneyDTOS);

        excelExporter.generate(response);
    }
}
