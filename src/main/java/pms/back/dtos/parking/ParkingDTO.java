package pms.back.dtos.parking;

import com.fasterxml.jackson.annotation.JsonInclude;
import pms.back.entity.parking.Parking;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)

public class ParkingDTO {

    private Integer parkingId;

    private String parking_name;

    private String parking_contact;

    private String parking_openingTime;

    private String parking_closingTime;

    private Integer parking_price;

    private String parking_status;

    private String parking_latitude;

    private String parking_longitude;

    private String parking_twowheel;

    private String parking_fourwheel;

    private String parking_fourwheel_capacity;

    private String parking_twowheel_capacity;

    private String parking_email;

    private String parking_password;

    public Parking toEntity(ParkingDTO parkingDTO){
        Parking parking = Parking.builder()
                .parkingId(parkingDTO.getParkingId())
                .parking_name(parkingDTO.getParking_name())
                .parking_contact(parkingDTO.getParking_contact())
                .parking_openingTime(parkingDTO.getParking_openingTime())
                .parking_closingTime(parkingDTO.getParking_closingTime())
                .parking_price(parkingDTO.getParking_price())
                .parking_status(parkingDTO.getParking_status())
                .parking_latitude(parkingDTO.getParking_latitude())
                .parking_longitude(parkingDTO.getParking_longitude())
                .parking_twowheel(parkingDTO.getParking_twowheel())
                .parking_fourwheel(parkingDTO.getParking_fourwheel())
                .parking_twowheel_capacity(parkingDTO.getParking_twowheel_capacity())
                .parking_fourwheel_capacity(parkingDTO.getParking_fourwheel_capacity())
                .parking_email(parkingDTO.getParking_email())
                .parking_password(parkingDTO.getParking_password())
                .build();
        return parking;
    }

    public ParkingDTO toDto(Parking parking){
        ParkingDTO parkingDTO = ParkingDTO.builder()
                .parkingId(parking.getParkingId())
                .parking_name(parking.getParking_name())
                .parking_contact(parking.getParking_contact())
                .parking_openingTime(parking.getParking_openingTime())
                .parking_closingTime(parking.getParking_closingTime())
                .parking_price(parking.getParking_price())
                .parking_status(parking.getParking_status())
                .parking_latitude(parking.getParking_latitude())
                .parking_longitude(parking.getParking_longitude())
                .parking_twowheel(parking.getParking_twowheel())
                .parking_fourwheel(parking.getParking_fourwheel())
                .parking_fourwheel_capacity(parking.getParking_fourwheel_capacity())
                .parking_twowheel_capacity(parking.getParking_twowheel_capacity())
                .parking_email(parking.getParking_email())
                .parking_password(parking.getParking_password())
                .build();
        return parkingDTO;
    }
}
