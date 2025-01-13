package com.example.demo.dto;

import com.example.demo.entity.Money;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;

@AllArgsConstructor
@NoArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MoneyDTO {
    Long id;
    String moneyType;
    String description;
    String quantity;
    String created_at;
    String updated_at;

    public MoneyDTO(Money money) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        DecimalFormat decimalFormat = new DecimalFormat("#,###");
        this.id = money.getId();
        this.moneyType = money.getMoneyType().name();
        this.description = money.getDescription();
        this.quantity = decimalFormat.format(money.getQuantity());
        this.created_at = simpleDateFormat.format(money.getCreated_at());
        this.updated_at = simpleDateFormat.format(money.getUpdated_at());
    }
}
