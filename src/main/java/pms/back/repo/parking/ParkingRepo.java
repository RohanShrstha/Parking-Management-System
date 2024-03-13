package pms.back.repo.parking;

import pms.back.entity.parking.Parking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

@Repository
public interface ParkingRepo extends JpaRepository<Parking,Integer> {

    @Query("SELECT p FROM Parking p WHERE p.parking_name = :parking_name")
    Optional<Parking> findByParking_name(String parking_name);
}
