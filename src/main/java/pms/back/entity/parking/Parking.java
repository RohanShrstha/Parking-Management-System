package pms.back.entity.parking;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "parking")
public class Parking {
    @Id
    @SequenceGenerator(name = "parking_sequence", sequenceName = "parking_sequence", allocationSize = 1)
    @GeneratedValue(generator = "parking_sequence", strategy = GenerationType.SEQUENCE)
    private Integer parkingId;

    @Column(name = "parking_name", length = 100)
    private String parking_name;

    @Column(name = "parking_contact", length = 100)
    private String parking_contact;

    @Column(name = "parking_openingTime", length = 10)
    private String parking_openingTime;

    @Column(name = "parking_closingTime", length = 10)
    private String parking_closingTime;

    @Column(name = "parking_price", length = 100)
    private Integer parking_price;

    @Column(name = "parking_status", length = 100)
    private String parking_status;

    @Column(name = "parking_latitude", length = 100)
    private String parking_latitude;

    @Column(name = "parking_longitude", length = 100)
    private String parking_longitude;

    @Column(name = "parking_twowheel", length = 100)
    private String parking_twowheel;

    @Column(name = "parking_fourwheel", length = 100)
    private String parking_fourwheel;

    @Column(name = "parking_twowheel_capacity", length = 100)
    private String parking_twowheel_capacity;

    @Column(name = "parking_fourwheel_capacity", length = 100)
    private String parking_fourwheel_capacity;

    @Column(name = "parking_email", length = 100)
    private String parking_email;

    @Column(name = "parking_password", length = 100)
    private String parking_password;

    public Parking(Integer parkingId) {
        this.parkingId = parkingId;
    }
}
