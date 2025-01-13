package com.example.demo.service;

import com.example.demo.dto.MoneyDTO;
import com.example.demo.entity.Money;
import com.example.demo.entity.MoneyType;
import com.example.demo.entity.User;
import com.example.demo.payload.MoneyPayload;
import com.example.demo.repository.MoneyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class MoneyService {
    private final MoneyRepository moneyRepository;

    public Money saveMoney(MoneyPayload moneyPayload) {
        Money money = new Money();
        money.setMoneyType(moneyPayload.getMoneyType());
        money.setDescription(moneyPayload.getDescription());
        money.setQuantity(moneyPayload.getQuantity());
        return moneyRepository.save(money);
    }

    public List<MoneyDTO> getAll() {
        return moneyRepository.findAll().stream().map(MoneyDTO::new).toList();

    }

    public String getAllMoney() {
        DecimalFormat decimalFormat = new DecimalFormat("#,###");
        Long Sum = 0L;
        List<Money> moneyList = moneyRepository.findAll();
        for (Money money : moneyList) {
            if (money.getMoneyType().equals(MoneyType.KIRIM)) {
                Sum += money.getQuantity();
            } else if (money.getMoneyType().equals(MoneyType.HARAJAT)) {
                Sum -= money.getQuantity();
            } else if (money.getMoneyType().equals(MoneyType.QARZ)) {
                Sum -= money.getQuantity();
            }
        }
        return decimalFormat.format(Sum);
    }

    public String getAllHarajat() {
        DecimalFormat decimalFormat = new DecimalFormat("#,###");
        Long Sum = 0L;
        List<Money> moneyList = moneyRepository.findAll();
        for (Money money : moneyList) {
            if (money.getMoneyType().equals(MoneyType.HARAJAT)) {
                Sum += money.getQuantity();
            }
        }
        return decimalFormat.format(Sum);
    }

    public String getAllKirim() {
        DecimalFormat decimalFormat = new DecimalFormat("#,###");
        Long Sum = 0L;
        List<Money> moneyList = moneyRepository.findAll();
        for (Money money : moneyList) {
            if (money.getMoneyType().equals(MoneyType.KIRIM)) {
                Sum += money.getQuantity();
            }
        }
        return decimalFormat.format(Sum);
    }

    public String getAllQarz() {
        DecimalFormat decimalFormat = new DecimalFormat("#,###");
        Long Sum = 0L;
        List<Money> moneyList = moneyRepository.findAll();
        for (Money money : moneyList) {
            if (money.getMoneyType().equals(MoneyType.QARZ)) {
                Sum += money.getQuantity();
            }
        }
        return decimalFormat.format(Sum);
    }

    public List<MoneyDTO> getAllHarajatList() {
        return moneyRepository.findAll().stream()
                .filter(money -> money.getMoneyType()
                        .equals(MoneyType.HARAJAT)).toList().stream().map(MoneyDTO::new).toList();
    }

    public List<MoneyDTO> getAllKirimList() {
        return moneyRepository.findAll().stream()
                .filter(money -> money.getMoneyType()
                        .equals(MoneyType.KIRIM)).toList().stream().map(MoneyDTO::new).toList();
    }

    public List<MoneyDTO> getAllQarzList() {
        return moneyRepository.findAll().stream()
                .filter(money -> money.getMoneyType()
                        .equals(MoneyType.QARZ)).toList().stream().map(MoneyDTO::new).toList();
    }

    public List<MoneyType> getAllMoneyType() {
        List<MoneyType> moneyTypes = new ArrayList<>();
        moneyTypes.add(MoneyType.HARAJAT);
        moneyTypes.add(MoneyType.KIRIM);
        moneyTypes.add(MoneyType.QARZ);
        return moneyTypes;
    }

    public void deleteMoney(Long id) {
        moneyRepository.deleteById(id);
    }

    public Money getById(Long id) {
        return moneyRepository.findById(id).get();
    }

    public Money editMoney(Long id, MoneyPayload moneyPayload) {
        Money money = moneyRepository.findById(id).get();
        money.setMoneyType(moneyPayload.getMoneyType());
        money.setDescription(moneyPayload.getDescription());
        money.setQuantity(moneyPayload.getQuantity());
        return moneyRepository.save(money);
    }

    public List<MoneyDTO> findAllByFullNameLike(String fullName) {
        return moneyRepository.findAllByFullNameLike(fullName).stream().map(MoneyDTO::new).toList();

    }


}
