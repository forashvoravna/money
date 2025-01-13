package com.example.demo.payload;

import com.example.demo.entity.MoneyType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@AllArgsConstructor
@NoArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MoneyPayload {
    @Enumerated(EnumType.STRING)
    MoneyType moneyType;
    String description;
    Long quantity;
}
